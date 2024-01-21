<template>
  <main class="w-5/6">
    <h1 class="text-5xl font-bold color-white">{{ movie.title_en }}<span class="color-red">.</span></h1>
    <h2 class="text-xl color-gray">{{ movie.short_description }}</h2>
    <div class="flex mt-10">
      <div class="w-1/4">
        <img :src="movie.poster_url" alt="poster" class="w-half">
      </div>
      <div class="w-1/2 ml-10">

        <span v-if="!show_more" class="color-white">{{ short_description }}</span><span class="color-white" v-else>{{
          movie.description
        }}</span>
        <br v-if="show_more">
        <span class="color-red cursor-pointer" @click="show_more = !show_more">{{
            !show_more ? ' read more' : 'hide'
          }}</span>
      </div>
    </div>
    <div class="mt-10">
      <div id="player" class="h-screen"></div>
    </div>

  </main>
</template>

<script>
import pjs from '../assets/playerjsloader.js';
import axios from 'axios';

// https://playerjs.com/docs/ru=chromecast

export default {
  data() {
    return {
      movie: {},
      streams: [],
      short_description: '',
      more_description: '',
      show_more: false,
      player_files: [],
      player: Object,
      progress_saved: false,
      player_current_file_key: null,
    };
  },
  mounted() {
    this.loadMovie();
  },
  unmounted() {
    this.player.api('stop');
    this.player.api('destroy');
  },
  methods: {
    breakPlayerLocalStorage() {
      const url = window.location.href;

      const local_storage_key = 'pljsplayfrom_player' + url.replace('https://', '').replace('http://', '');
      if (this.player_current_file_key !== null) {
        localStorage.setItem(local_storage_key, this.player_current_file_key);
      }
    },
    generatePlaylistId(movie_id, audio_id, season, episode) {
      return movie_id + '_' + audio_id + '_' + season + '_' + episode;
    },
    parsePlaylistId(playlist_id) {
      const playlist = playlist_id.split('_');
      return {
        movie_id: playlist[0],
        audio_id: playlist[1],
        season: playlist[2] === 'null'? null : playlist[2],
        episode: playlist[3] === 'null'? null : playlist[3],
      };

    },
    async playerTimeEvent(event) {
      const time_code = Math.round(event.info)
      if (time_code === 0 || time_code % 10 !== 0) {
        this.progress_saved = false;
        return;
      }
      if (this.progress_saved === true) {
        return;
      }
      this.progress_saved = true;
      const url = import.meta.env.VITE_API_URL + '/api/v1/watch/progress/save';
      const playlist = this.parsePlaylistId(this.player.api('playlist_id'));
      try {
        const authToken = import.meta.env.VITE_AUTH_TOKEN;
        await axios.post(url, {
          movie_id: playlist.movie_id,
          audio_track_id: playlist.audio_id,
          season_no: playlist.season,
          episode_no: playlist.episode,
          time_code: event.info,
        }, {
          headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': authToken,
          },
        });
      } catch (error) {
        console.error('Error saving progress:', error);
      }
    },
    async loadPlayer() {
      this.breakPlayerLocalStorage();
      await (async () => {
        await pjs;
        const playerOptions = {
          id: 'player',
          // log: 1,
          // hlsdebug: 1,
          file: this.player_files,
          hlsconfig: {
            maxBufferLength: 600,
            maxMaxBufferLength: 600,
            maxBufferSize: 33554432000,
          },
        };

        if (this.movie.watch_progress !== null && this.movie.watch_progress.time_code !== null)
        {
          playerOptions.start = this.movie.watch_progress.time_code;
        }

        this.player = new Playerjs(playerOptions);
        document.getElementById("player").addEventListener("time",this.playerTimeEvent);
      })();
    },
    mapParamsForStreamUrl(rezka_movie_id, rezka_audio_id, movie_type, season = 1, episode = 1, return_data = false) {
      return '' + rezka_movie_id + ',' + rezka_audio_id + ', "' + import.meta.env.VITE_API_URL + '", "' + import.meta.env.VITE_AUTH_TOKEN + '", "' + movie_type + '", ' + season + ', ' + episode + ', ' + return_data;
    },
    async loadFilm() {
      this.movie.audio_tracks.forEach((audio_track) => {
        const params = this.mapParamsForStreamUrl(this.movie.rezka_movie_id, audio_track.rezka_audio_id, this.movie.movie_type);
        this.player_files.push({
          title: audio_track.title,
          file: 'js:getStreamUrl(' + params + ')',
          id: this.generatePlaylistId(this.movie.id, audio_track.id, null, null),
        });
      });
    },
    getAudioFolder(audio_idx, audio_track, seasons, current_stream) {
      const season_folder = [];
      seasons.forEach((season, season_idx) => {
        const episode_folder = [];
        season.episodes.forEach((episode, episode_idx) => {
          let file = '';
          const playlistID = this.generatePlaylistId(this.movie.id, audio_track.id, season.season_no, episode);
          if (current_stream.rezka_audio_id === audio_track.rezka_audio_id && current_stream.season === season.season_no && current_stream.episode === episode) {
            file = current_stream.stream_url;
            this.player_current_file_key = '{xxx-' + audio_idx + '-' + season_idx + '-' + episode_idx + '-' + playlistID + '}';
          }
          else {
            const params = this.mapParamsForStreamUrl(this.movie.rezka_movie_id, audio_track.rezka_audio_id, this.movie.movie_type, season.season_no, episode, false);
            file = 'js:getStreamUrl(' + params + ')';
          }
          episode_folder.push({
            title: 'Series ' + episode,
            file: file,
            // "start":"continue"  // if it's not current_stream
            // start: 10  // if it's current_stream then take start from it
            id: playlistID,
          });
        });
        season_folder.push({
          title: 'Season ' + season.season_no,
          folder: episode_folder,
        });
      });
      return season_folder;
    },
    async loadSeries() {
      let rezka_audio_id = this.movie.audio_tracks[0].rezka_audio_id;
      let current_season = 1;
      let current_episode = 1;
      if (this.movie.watch_progress !== null) {
        rezka_audio_id = this.movie.watch_progress.rezka_audio_track_id;
        current_season = this.movie.watch_progress.season_no;
        current_episode = this.movie.watch_progress.episode_no;
      }
      const data = getStreamUrl(
          this.movie.rezka_movie_id,
          rezka_audio_id,
          import.meta.env.VITE_API_URL,
          import.meta.env.VITE_AUTH_TOKEN,
          this.movie.movie_type,
          current_season,
          current_episode,
          true,
      )
      const stream_url = mapQualityStream(data.streams);
      const current_stream = {
        rezka_audio_id: rezka_audio_id,
        season: current_season,
        episode: current_episode,
        stream_url: stream_url,
      }
      this.movie.audio_tracks.forEach((audio_track, idx) => {
        this.player_files.push({
          title: audio_track.title,
          folder: this.getAudioFolder(idx, audio_track, data.seasons, current_stream),
        });
      });
    },
    async loadMovie() {

      const url = import.meta.env.VITE_API_URL + '/api/v1/movies/' + this.$route.params.id + '/';
      try {
        const authToken = import.meta.env.VITE_AUTH_TOKEN; // Replace with your actual authentication token
        const response = await axios.get(url, {
          headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': authToken,
          },
        });
        this.movie = response.data.data;
        this.short_description = this.movie.description.slice(0, 200).split(' ').slice(0, -1).join(' ')
        if (this.movie.movie_type === 'film') {
          await this.loadFilm();
        } else if (this.movie.movie_type === 'series') {
          await this.loadSeries();
        } else {
          return;
        }

        await this.loadPlayer();
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },
  },
};
</script>