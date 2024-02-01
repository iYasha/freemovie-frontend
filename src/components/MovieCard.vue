<template>
  <div class="rounded-1">
    <router-link :to="loading ? '' : (movieType === 'film' ? '/movie/' : '/tv-show/') + movie.id">
      <div class="movie-card h-full bg-cover bg-center p-3 flex flex-col justify-between rounded-1" @mouseover="hovered=true" @mouseleave="hovered=false">

        <div
            class="card-image rounded-1"
            :class="{ 'skeleton': loading }"
            :style="{ backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 60%), url(' + movie.poster_path + ')' }"
        ></div>
        <div class="watch-progress" v-if="watch_progress !== null" :style="{width: `${watch_progress}%`}"></div>
        <div class="watch-progress-gray" v-if="watch_progress !== null"></div>

        <div class="flex"
             :class="{
          'justify-between': movie.rating || movie.release_date || loading,
          'justify-end': !movie.rating && !movie.release_date,
          'skeleton-wrapper': loading,
        }">
          <div v-if="movie.rating || loading"
               class="skeleton-content-hide w-fit text-sm bg-dark color-soft-gray font-medium py-1.5 px-3 rounded-1 flex justify-center items-center">
            <font-awesome-icon class="mr-1 h-4 w-4 color-orange" icon="fa-solid fa-star"/>
            <span>{{ round_rating(movie.rating) }}</span>
          </div>
          <div v-if="movie.release_date || loading"
               class="skeleton-content-hide w-fit text-sm bg-dark color-soft-gray font-medium py-1.5 px-3 rounded-1 flex justify-center items-center">
            <span>{{ format_date(movie.release_date) }}</span>
          </div>
          <button
              @click.prevent="toggleWatchlist()"
              class="badge skeleton-content-hide badge-icon cursor-pointer w-fit text-sm bg-dark color-soft-gray font-medium py-1.5 px-3 rounded-1 flex justify-center items-center">
            <font-awesome-icon v-if="this.is_in_watchlist" class="h-4 w-4 color-red" icon="fa-solid fa-bookmark"/>
            <font-awesome-icon v-else class="h-4 w-4" icon="fa-regular fa-bookmark"/>
          </button>

        </div>

        <div class="mb-3">
          <div :class="{'skeleton-wrapper': loading}">
            <div :class="{ 'max-h-14': !hovered, 'overflow-hidden': !hovered }" class="skeleton-content-hide color-white font-semibold text-lg text-center w-full flex justify-center">
              <span>{{ movie.title }}</span>
            </div>
          </div>

          <div class="card-hidden" v-if="!loading">

            <div class="color-white mt-2 text-center">{{ movie.genres.map(genre => genre.title).join(', ') }}</div>
          </div>
        </div>

      </div>
    </router-link>
  </div>
</template>

<script>
import moment from "moment";
import WatchlistService from "@/services/watchlist.service.js";

export default {
  name: "MovieCard",
  components: {},
  props: {
    movie: Object,
    loading: Boolean,
    movieType: {
      type: String,
      default: 'film',
    },
  },
  data() {
    return {
      hovered: false,
      is_in_watchlist: false,
      old_watchlist_state: false,
    }
  },
  computed: {
    watch_progress() {
      if (!this.movie.watch_progress || !this.movie.watch_progress.watch_in_percent) {
        return null;
      }
      return Math.round(this.movie.watch_progress.watch_in_percent)
    },
  },
  mounted() {
    this.is_in_watchlist = this.movie.is_in_watchlist
  },
  methods: {
    toggleWatchlist() {
      WatchlistService.toggle(this.movie.id, this.movieType, !this.is_in_watchlist).then((response) => {
        if (response.data.custom_code !== 0) {
          this.is_in_watchlist = this.old_watchlist_state
        }
      }).catch((e) => {
        this.is_in_watchlist = this.old_watchlist_state
      })
      this.old_watchlist_state = this.is_in_watchlist
      this.is_in_watchlist = !this.is_in_watchlist
    },
    round_rating(value) {
      if (value) {
       return value.toFixed(1)
      }
      return 0.0;
    },
    format_date(value) {
      if (value) {
        return moment(String(value)).format('YYYY')
      }
      return '0000';
    },
  }
}
</script>

<style scoped>

.skeleton {
  background: #222222 !important;
  animation: skeleton-loading 1.5s linear infinite;
}

.skeleton-wrapper > * {
  background: #323232 !important;
  border-radius: 0;
  position: relative;
}


.skeleton-wrapper > *::before {
  background: linear-gradient(90deg, #323232 40%, #404040, #323232 60%) right / 300% 100%;
  animation: skeleton-loading 1.5s linear infinite;

  position: absolute;
  content: '';
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.skeleton-wrapper .skeleton-content-hide > * {
  opacity: 0;
}

.card-image {
  width: 100%;
  height: 100%;
  content: '';
  left: 0;
  top: 0;
  position: absolute;
  z-index: -1;
  overflow: hidden;
  background-size: cover;
  transition: .3s;
}

.movie-card {
  position: relative;
  z-index: 1;
  transition: .3s;
  overflow: hidden;
}

.movie-card:hover .card-image.skeleton {
  filter: none !important;
}

.movie-card:hover .card-image {
  filter: blur(5px);
}

.card-hidden {
  display: none;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
}

.movie-card:hover .card-hidden {
  visibility: visible;
  opacity: 1;
  display: block;
}

.watch-progress {
  height: 4px;
  background: #e50914;
  content: '';
  left: 0;
  bottom: 0;
  position: absolute;
  z-index: 0;
  overflow: hidden;
  background-size: cover;
  transition: .3s;
}

.watch-progress-gray {
  height: 4px;
  width: 100%;
  background: #a0a0a0;
  content: '';
  left: 0;
  bottom: 0;
  position: absolute;
  z-index: -1;
  overflow: hidden;
  background-size: cover;
  transition: .3s;
}

</style>