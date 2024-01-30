<template>
  <movie-detail
      :release-date="movie.release_date"
      :trailer-url="movie.trailer_url"
      :backdrop-url="movie.backdrop_path"
      :loading="loading"
      :poster-url="movie.poster_path"
      :title="movie.title"
      :rating="movie.rating"
      :tagline="movie.tagline"
      back-url="/movies"
      back-title="All Movies"
  >

    <template v-slot:attributes>

      <div v-if="loading" class="skeleton-block h-28 mt-10"></div>
      <div v-else class="mt-10">
        <h3 class="text-xl font-medium color-white mb-1">Storyline</h3>
        <span class="color-soft-gray text-lg">
            <span v-if="!show_more">{{ short_description }}</span>
            <span v-else>{{ movie.overview }}</span>
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
        <div v-else class="mt-1 flex" v-if="movie.is_adult">
          <h4 class="text-lg font-medium color-white mr-2">Age limit:</h4>
          <span class="color-soft-gray text-lg block">+18</span>
        </div>

        <div v-if="loading" class="skeleton-block h-14 mt-1"></div>
        <div v-else class="mt-1 flex" v-if="movie.genres">
          <h4 class="text-lg font-medium color-white mr-2">Genres:</h4>
          <span class="color-soft-gray text-lg block">{{
              movie.genres.map((genre) => genre.title).join(', ')
            }}</span>
        </div>

        <div v-if="loading" class="skeleton-block h-7 mt-1"></div>
        <div v-else class="mt-1 flex" v-if="movie.production_countries">
          <h4 class="text-lg font-medium color-white mr-2">Production countries:</h4>
          <span class="color-soft-gray text-lg block">{{
              movie.production_countries.map(country => country.name).join(', ')
            }}</span>
        </div>

        <div v-if="loading" class="skeleton-block h-7 mt-1"></div>
        <div v-else class="mt-1 flex" v-if="movie.production_companies">
          <h4 class="text-lg font-medium color-white mr-2">Production companies:</h4>
          <span class="color-soft-gray text-lg block">{{
              movie.production_companies.map(company => company.name).join(', ')
            }}</span>
        </div>

        <div v-if="loading" class="skeleton-block h-7 mt-1"></div>
        <div v-else class="mt-1 flex" v-if="movie.release_date">
          <h4 class="text-lg font-medium color-white mr-2">Release date:</h4>
          <span class="color-soft-gray text-lg block">{{ movie.release_date }}</span>
        </div>

        <div v-if="loading" class="skeleton-block h-7 mt-1"></div>
        <div v-else class="mt-1 flex" v-if="movie.runtime_minutes">
          <h4 class="text-lg font-medium color-white mr-2">
            <span>Duration:</span>
          </h4>
          <span class="color-soft-gray text-lg block">{{ format_duration(movie.runtime_minutes) }}</span>
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
      <player
          :start-from="(movie.watch_progress) ? movie.watch_progress.time_code : null"
          :ready-to-play="ready_to_play"
          :current-file-key="player_current_file_key"
          :files="player_files"
      />
    </template>
  </movie-detail>

</template>


<script>
import MovieDetail from "@/components/MovieDetail.vue";

import MovieService from "@/services/movie.service.js";
import Player from "@/components/Player.vue";
import PlayerService from "@/services/player.service.js";

// https://playerjs.com/docs/ru=chromecast

export default {
  components: {
    Player,
    MovieDetail,
  },
  data() {
    return {
      loading: false,


      movie: {},

      directors: null,
      actors: null,
      genres: null,

      streams: [],
      short_description: '',
      more_description: '',
      show_more: false,

      player_files: [],
      player_current_file_key: null,
      ready_to_play: false,

    };
  },
  mounted() {
    this.loading = true;
    this.loadMovie();
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
    async loadStream() {
      MovieService.get_stream(this.movie.id).then(
          response => {
            if (response.data.custom_code === 4001) {
              return;
            }
            const streams = response.data.data.streams.map((stream) => {
              return '[' + stream.quality + ']' + stream.streams.hls;
            }).join(',');
            response.data.data.audio_tracks.forEach((audio_track) => {
              const params = PlayerService.mapParamsForStreamUrl(this.movie.id, null, audio_track.translator_hash);
              let streamFile = 'js:getStreamUrl(' + params + ')';
              if (audio_track.is_default) {
                streamFile = streams;
                // this.player_current_file_key = '{xxx-' + this.movie.id + '-' + audio_track.translator_hash + '}';
              }
              this.player_files.push({
                title: audio_track.title,
                file: streamFile,
                id: PlayerService.generatePlaylistId(this.movie.id, null, audio_track.translator_hash),
              });
            });
            this.ready_to_play = true;
          },
          error => {
            console.log(error);
          }
      );
    },
    parseMovieAttributes() {
      if (this.movie.participants) {
        this.directors = this.movie.participants.filter((participant) => participant.role === 'director').map((director) => director.full_name).join(', ');
        this.actors = this.movie.participants.filter((participant) => participant.role === 'actor').map((actor) => {
          let actor_name = actor.full_name;
          if (actor.characters) {
            actor_name += ' (' + actor.characters.join(', ') + ')';
          }
          return actor_name;
        }).join(', ');
      }
    },
    async loadMovie() {
      MovieService.detail(this.$route.params.id).then(
          response => {
            this.movie = response.data.data;
            this.short_description = this.movie.overview.slice(0, 200).split(' ').slice(0, -1).join(' ')
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

