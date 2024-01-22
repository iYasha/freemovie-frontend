<template>
  <default-layout>
    <main class="w-5/6">
      <div v-if="loading" class="skeleton-block h-11"></div>
      <h1 v-else class="text-5xl font-bold color-white">{{ movie.title_en ? movie.title_en : movie.title }}<span
          class="color-red">.</span></h1>

      <div v-if="loading" class="skeleton-block h-7 mt-1"></div>
      <h2 v-else class="text-xl color-gray mt-1">{{ movie.short_description }}</h2>
      <div class="flex mt-10">
        <div class="w-1/4">
          <div v-if="loading" class="skeleton-block w-half rounded-1 h-96"></div>
          <img v-else :src="movie.poster_url" alt="poster" class="w-half rounded-1">

          <div class="mt-5 flex justify-between">
            <button @click="console.log('watch trailer')" class="action-button font-bold">Watch Trailer</button>
            <button @click="favorite = !favorite" class="badge-icon bg-gray color-soft-gray action-button">
              <font-awesome-icon v-if="favorite" class="h-4 w-4 color-red" icon="fa-solid fa-bookmark"/>
              <font-awesome-icon v-else class="h-4 w-4" icon="fa-regular fa-bookmark"/>
            </button>
            <button @click="liked = !liked" class="badge-icon bg-gray color-soft-gray action-button">
              <font-awesome-icon v-if="liked" class="h-4 w-4 color-red" icon="fa-solid fa-heart"/>
              <font-awesome-icon v-else class="h-4 w-4" icon="fa-regular fa-heart"/>
            </button>
          </div>
        </div>
        <div class="w-3/5 ml-10">
          <div v-if="loading" class="skeleton-block h-7"></div>
          <div v-else>
            <h3 class="text-xl font-medium color-white inline">IMDb: </h3>
            <span class="color-soft-gray text-lg">{{ movie.imdb_rating }}</span>
          </div>

          <div v-if="loading" class="skeleton-block h-16 mt-3"></div>
          <div v-else class="mt-3" v-if="movie.tagline">
            <h3 class="text-xl font-medium color-white">Tagline</h3>
            <span class="color-soft-gray text-lg mt-1 block">
            {{ movie.tagline }}
          </span>
          </div>

          <div v-if="loading" class="skeleton-block h-28 mt-3"></div>
          <div v-else class="mt-3">
            <h3 class="text-xl font-medium color-white mb-1">Storyline</h3>
            <span class="color-soft-gray text-lg">
            <span v-if="!show_more">{{ short_description }}</span>
            <span v-else>{{ movie.description }}</span>
          </span>
            <br v-if="show_more">
            <span class="color-red text-lg cursor-pointer" @click="show_more = !show_more">{{
                !show_more ? ' read more' : 'hide'
              }}</span>
          </div>
          <div class="mt-3">
            <div v-if="loading" class="skeleton-block h-7 mb-2"></div>
            <h3 v-else class="text-xl font-medium color-white mb-2">More details</h3>

            <div v-if="loading" class="skeleton-block h-7 mt-1"></div>
            <div v-else class="mt-1 flex" v-if="movie.age_limit">
              <h4 class="text-lg font-medium color-white mr-2">Age limit:</h4>
              <span class="color-soft-gray text-lg block">+{{ movie.age_limit }}</span>
            </div>

            <div v-if="loading" class="skeleton-block h-7 mt-1"></div>
            <div v-else class="mt-1 flex" v-if="movie.production_country">
              <h4 class="text-lg font-medium color-white mr-2">Production country:</h4>
              <span class="color-soft-gray text-lg block">{{ movie.production_country }}</span>
            </div>

            <div v-if="loading" class="skeleton-block h-7 mt-1"></div>
            <div v-else class="mt-1 flex" v-if="movie.release_date">
              <h4 class="text-lg font-medium color-white mr-2">Release date:</h4>
              <span class="color-soft-gray text-lg block">{{ movie.release_date }}</span>
            </div>

            <div class="mt-1 flex" v-if="seasons_count">
              <h4 class="text-lg font-medium color-white mr-2">Seasons count:</h4>
              <span class="color-soft-gray text-lg block">{{ seasons_count }}</span>
            </div>
            <div class="mt-1 flex" v-if="avg_episode_in_season">
              <h4 class="text-lg font-medium color-white mr-2">Average episodes in season:</h4>
              <span class="color-soft-gray text-lg block">{{ avg_episode_in_season }}</span>
            </div>

            <div v-if="loading" class="skeleton-block h-7 mt-1"></div>
            <div v-else class="mt-1 flex" v-if="duration">
              <h4 class="text-lg font-medium color-white mr-2">
                <span v-if="movie.movie_type === 'film'">Duration:</span>
                <span v-else>Episode duration:</span>
              </h4>
              <span class="color-soft-gray text-lg block">{{ duration }}</span>
            </div>

            <div v-if="loading" class="skeleton-block h-7 mt-1"></div>
            <div v-else class="mt-1 flex" v-if="directors">
              <h4 class="text-lg font-medium color-white mr-2">Directed:</h4>
              <span class="color-soft-gray text-lg block">{{ directors }}</span>
            </div>

            <div v-if="loading" class="skeleton-block h-20 mt-1"></div>
            <div v-else class="mt-1 flex" v-if="actors">
              <h4 class="text-lg font-medium color-white mr-2">Actors:</h4>
              <span class="color-soft-gray text-lg block">{{ actors }}</span>
            </div>

            <div v-if="loading" class="skeleton-block h-14 mt-1"></div>
            <div v-else class="mt-1 flex" v-if="genres">
              <h4 class="text-lg font-medium color-white mr-2">Genres:</h4>
              <span class="color-soft-gray text-lg block">{{ genres }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-10 mb-10">
        <div id="player" class="h-screen"></div>
      </div>

    </main>
  </default-layout>
</template>

<script>
import pjs from '../assets/playerjsloader.js';
import axios from 'axios';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

// https://playerjs.com/docs/ru=chromecast

export default {
  components: {
    DefaultLayout,
  },
  data() {
    return {
      loading: false,

      liked: false,
      favorite: false,

      movie: {},

      directors: null,
      actors: null,
      duration: null,
      genres: null,
      seasons_count: null,
      avg_episode_in_season: null,

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
    this.loading = true;
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
        season: playlist[2] === 'null' ? null : playlist[2],
        episode: playlist[3] === 'null' ? null : playlist[3],
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

        if (this.movie.watch_progress !== null && this.movie.watch_progress.time_code !== null) {
          playerOptions.start = this.movie.watch_progress.time_code;
        }

        this.player = new Playerjs(playerOptions);
        document.getElementById("player").addEventListener("time", this.playerTimeEvent);
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
          } else {
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
      this.seasons_count = data.seasons.length;

      let total_episodes = 0;
      data.seasons.forEach((season) => {
        total_episodes += season.episodes.length;
      });
      this.avg_episode_in_season = Math.round(total_episodes / data.seasons.length);

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
    prettyDuration(duration_minutes) {
      const hours = Math.floor(duration_minutes / 60);
      const minutes = duration_minutes % 60;
      let duration = '';
      if (hours > 0) {
        duration += hours + 'h ';
      }
      if (minutes > 0) {
        duration += minutes + 'm';
      }
      return duration;
    },
    parseMovieAttributes() {
      if (this.movie.duration) {
        this.duration = this.prettyDuration(this.movie.duration)
      }
      if (this.movie.genres) {
        this.genres = this.movie.genres.map((genre) => genre.title).join(', ');
      }
      this.movie.attributes.forEach((attribute) => {
        if (attribute.directors) {
          this.directors = attribute.directors.map((director) => director[1]).join(', ');
        }
        if (attribute.actors) {
          this.actors = attribute.actors.map((actor) => actor[1]).join(', ');
        }
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
        this.parseMovieAttributes();
        if (this.movie.movie_type === 'film') {
          await this.loadFilm();
        } else if (this.movie.movie_type === 'series') {
          await this.loadSeries();
        } else {
          return;
        }

        this.loading = false;

        await this.loadPlayer();
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    },
  },
};
</script>