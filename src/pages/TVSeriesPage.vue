<template>
  <movie-detail
      :release-date="tv_series.release_date"
      :trailer-url="tv_series.trailer_url"
      :backdrop-url="tv_series.backdrop_path"
      :loading="loading"
      :poster-url="tv_series.poster_path"
      :title="tv_series.title"
      :rating="tv_series.rating"
      :tagline="tv_series.tagline"
      back-url="/tv-shows"
      back-title="All TV Shows"
  >

    <template v-slot:attributes>

      <div v-if="loading" class="skeleton-block h-28 mt-10"></div>
      <div v-else class="mt-10">
        <h3 class="text-xl font-medium color-white mb-1">Storyline</h3>
        <span class="color-soft-gray text-lg">
            <span v-if="!show_more">{{ short_description }}</span>
            <span v-else>{{ tv_series.overview }}</span>
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
        <div v-else class="mt-1 flex" v-if="tv_series.is_adult">
          <h4 class="text-lg font-medium color-white mr-2">Age limit:</h4>
          <span class="color-soft-gray text-lg block">+18</span>
        </div>

        <div v-if="loading" class="skeleton-block h-14 mt-1"></div>
        <div v-else class="mt-1 flex" v-if="tv_series.genres">
          <h4 class="text-lg font-medium color-white mr-2">Genres:</h4>
          <span class="color-soft-gray text-lg block">{{
              tv_series.genres.map((genre) => genre.title).join(', ')
            }}</span>
        </div>

        <div v-if="loading" class="skeleton-block h-7 mt-1"></div>
        <div v-else class="mt-1 flex" v-if="tv_series.production_countries">
          <h4 class="text-lg font-medium color-white mr-2">Production countries:</h4>
          <span class="color-soft-gray text-lg block">{{
              tv_series.production_countries.map(country => country.name).join(', ')
            }}</span>
        </div>

        <div v-if="loading" class="skeleton-block h-7 mt-1"></div>
        <div v-else class="mt-1 flex" v-if="tv_series.production_companies">
          <h4 class="text-lg font-medium color-white mr-2">Production companies:</h4>
          <span class="color-soft-gray text-lg block">{{
              tv_series.production_companies.map(company => company.name).join(', ')
            }}</span>
        </div>

        <div v-if="loading" class="skeleton-block h-7 mt-1"></div>
        <div v-else class="mt-1 flex" v-if="tv_series.release_date">
          <h4 class="text-lg font-medium color-white mr-2">Release date:</h4>
          <span class="color-soft-gray text-lg block">{{ tv_series.release_date }}</span>
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
        <div v-else class="mt-1 flex" v-if="tv_series.runtime_minutes">
          <h4 class="text-lg font-medium color-white mr-2">
            <span>Episode duration:</span>
          </h4>
          <span class="color-soft-gray text-lg block">{{ format_duration(tv_series.runtime_minutes) }}</span>
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
      </div>
    </template>


    <template v-slot:player>
      <div class="flex">
        <div class="w-1/4 flex flex-col h-96 overflow-auto ">
          <button
              @click="loadStream(audio_track.translator_hash)"
              v-if="audio_tracks"
              class="action-button font-bold"
              :class="{ 'mt-2': idx > 0 }"
              v-for="(audio_track, idx) in audio_tracks"
              :key="audio_track.translator_hash"
              :disabled="audio_track.is_default"
          >
            {{ audio_track.title }}
          </button>
        </div>
        <div class="w-3/4">
          <player
              v-if="renderPlayer"
              :start-from="(tv_series.watch_progress) ? tv_series.watch_progress.time_code : null"
              :ready-to-play="ready_to_play"
              :current-file-key="player_current_file_key"
              :files="player_files"
          />
        </div>
      </div>

    </template>
  </movie-detail>

</template>


<script>
import MovieDetail from "@/components/MovieDetail.vue";

import MovieService from "@/services/movie.service.js";
import Player from "@/components/Player.vue";
import PlayerService from "@/services/player.service.js";
import TVSeriesService from "@/services/tv-series.service.js";

// https://playerjs.com/docs/ru=chromecast

export default {
  components: {
    Player,
    MovieDetail,
  },
  data() {
    return {
      loading: false,

      tv_series: {},

      directors: null,
      actors: null,
      genres: null,
      seasons_count: null,
      avg_episode_in_season: null,

      streams: [],
      short_description: '',
      more_description: '',
      show_more: false,

      player_files: [],
      player_current_file_key: null,
      ready_to_play: false,
      audio_tracks: [],
      renderPlayer: true,

    };
  },
  mounted() {
    this.loading = true;
    this.loadSeries();
  },
  methods: {

    format_duration(duration_minutes) {
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

    async loadStream(translator_hash=null, season=null, episode=null) {
      TVSeriesService.get_stream(this.tv_series.id, translator_hash, season, episode).then(
          response => {
            if (response.data.custom_code === 4001) {
              return;
            }
            this.renderPlayer = false;
            const response_data = response.data.data;
            this.player_files = [];
            this.audio_tracks = response_data.audio_tracks;
            const streams = response_data.streams.map((stream) => {
              return '[' + stream.quality + ']' + stream.streams.hls;
            }).join(',');
            const translator_hash = response_data.audio_tracks.filter((audio_track) => audio_track.is_default)[0].translator_hash;

            Object.entries(response_data.available_seasons).forEach((data, season_idx) => {
              const season = parseInt(data[0])
              const episodes = data[1]
              let folder = []
              episodes.forEach((episode, episode_idx) => {
                let file_url = ''
                const playlistID = PlayerService.generatePlaylistId(null, this.tv_series.id, translator_hash, season, episode)
                if (response_data.current_season === season && response_data.current_episode === episode) {
                  this.player_current_file_key = `{xx-${season_idx}-${episode_idx}-${playlistID}}`;
                  file_url = streams;
                }
                else {
                  const params = PlayerService.mapParamsForStreamUrl(null, this.tv_series.id, translator_hash, season, episode, false);
                  file_url = 'js:getStreamUrl(' + params + ')';
                }
                folder.push({
                  title: 'Episode ' + episode,
                  file: file_url,
                  id: playlistID,
                });
              });

              this.player_files.push({
                title: 'Season ' + season,
                folder: folder,
              });
            });
            console.log(this.player_files)
            this.ready_to_play = true

            this.renderPlayer = true;
          },
          error => {
            console.log(error);
          }
      );
    },

    parseMovieAttributes() {
      if (this.tv_series.participants) {
        this.directors = this.tv_series.participants.filter((participant) => participant.role === 'director').map((director) => director.full_name).join(', ');
        this.actors = this.tv_series.participants.filter((participant) => participant.role === 'actor').map((actor) => {
          let actor_name = actor.full_name;
          if (actor.characters) {
            actor_name += ' (' + actor.characters.join(', ') + ')';
          }
          return actor_name;
        }).join(', ');
      }
    },
    async loadSeries() {
      TVSeriesService.detail(this.$route.params.id).then(
          response => {
            this.tv_series = response.data.data;
            this.short_description = this.tv_series.overview.slice(0, 200).split(' ').slice(0, -1).join(' ')
            this.parseMovieAttributes();
            this.loadStream();

            this.loading = false;
          },
          error => {
            console.log(error);
          }
      );
    },
  },
};
</script>

