<template>
  <layout-without-navbar>
    <div
        class="backdrop"
        :style="{ backgroundImage: 'linear-gradient(0deg, rgba(24,24,24,1) 0%, rgba(0,0,0,0) 100%), url(' + backdropUrl + ')' }"
    ></div>
    <main class="w-5/6 z-10">
      <youtube-player
          v-bind:is-playing="watchingTrailer"
          @update:is-playing="watchingTrailer = $event"
          :video-id="trailerUrl"
      ></youtube-player>
      <router-link :to="backUrl" class="w-fit link mt-6 color-white flex items-center">
        <font-awesome-icon class="h-5 w-5 mr-3" icon="fa-solid fa-arrow-left"/>
        <span class="text-lg font-medium">{{ backTitle }}</span>
      </router-link>
      <div class="flex mt-10 2xl:mt-28">
        <div class="w-1/4 lg:block sm:hidden">
          <div v-if="loading" class="skeleton-block w-half rounded-1 h-96"></div>
          <img v-else :src="posterUrl" alt="poster" class="w-half rounded-1">

          <div class="mt-5 flex justify-between 2xl:justify-start">
            <button @click="watchingTrailer = true;" v-if="trailerUrl" class="action-button font-bold 2xl:mr-5">Watch
              Trailer
            </button>
            <button @click="toggleWatchlist()" class="badge-icon bg-gray color-soft-gray action-button 2xl:mr-5">
              <font-awesome-icon v-if="in_watchlist" class="h-4 w-4 color-red" icon="fa-solid fa-bookmark"/>
              <font-awesome-icon v-else class="h-4 w-4" icon="fa-regular fa-bookmark"/>
            </button>
            <button @click="liked = !liked" class="badge-icon bg-gray color-soft-gray action-button">
              <font-awesome-icon v-if="liked" class="h-4 w-4 color-red" icon="fa-solid fa-heart"/>
              <font-awesome-icon v-else class="h-4 w-4" icon="fa-regular fa-heart"/>
            </button>
          </div>
        </div>
        <div class="lg:w-3/5 lg:ml-10 sm:w-full sm:ml-0">
          <div class="text-on-backdrop">
            <div v-if="loading" class="skeleton-block h-7"></div>
            <h3 v-else class="text-xl font-bold color-white">{{ release_year }}</h3>

            <div v-if="loading" class="skeleton-block h-11"></div>
            <h1 v-else-if="title" class="text-5xl font-bold color-white">{{ title }}<span
                class="color-red">.</span></h1>

            <div v-if="loading" class="skeleton-block h-7 mt-1"></div>
            <h2 v-else class="text-xl color-white">{{ tagline }}</h2>

            <div v-if="loading" class="skeleton-block h-16 mt-5"></div>
            <div class="mt-5" v-else-if="rating">
              <h3 class="text-xl font-medium color-white mb-1">IMDb</h3>
              <rating :value="rating"/>
            </div>
          </div>

          <slot name="attributes"></slot>

        </div>
      </div>
      <div class="mt-10 mb-10">
        <slot name="player"></slot>
      </div>
    </main>
  </layout-without-navbar>
</template>

<script>
import LayoutWithoutNavbar from "@/layouts/LayoutWithoutNavbar.vue";
import moment from "moment";
import YoutubePlayer from "@/components/YoutubePlayer.vue";
import Rating from "@/components/Rating.vue";
import WatchlistService from "@/services/watchlist.service.js";
export default {
  name: "MovieDetail",
  components: {
    Rating,
    YoutubePlayer,
    LayoutWithoutNavbar,
  },
  props: {
    liked: false,
    isInWatchlist: false,

    watchingTrailer: false,

    backUrl: {
      type: String,
      default: '/',
    },
    backTitle: {
      type: String,
      default: 'Home',
    },

    contentId: {
      type: Number,
      default: null,
    },
    contentType: {
      type: String,
      default: 'film',
    },

    title: String,
    rating: {
      type: Number,
      default: null
    },
    tagline: {
      type: String,
      default: null
    },
    releaseDate: String,
    backdropUrl: {
      type: String,
      default: null
    },
    trailerUrl: {
      type: String,
      default: null
    },
    posterUrl: {
      type: String,
      default: null
    },
    loading: Boolean,
  },
  data() {
    return {
      old_watchlist_state: false,
      _in_watchlist: null,
    }
  },
  computed: {
    in_watchlist: function () {
      if (this._in_watchlist === null) {
        return this.isInWatchlist
      }
      return this._in_watchlist
    },
    release_year: function () {
      if (this.releaseDate) {
        return moment(String(this.releaseDate)).format('YYYY')
      }
      return '';
    },
  },
  methods: {
    toggleWatchlist() {
      WatchlistService.toggle(this.contentId, this.contentType, !this.in_watchlist).then((response) => {
        if (response.data.custom_code !== 0) {
          this._in_watchlist = this.old_watchlist_state
        }
      }).catch((e) => {
        this._in_watchlist = this.old_watchlist_state
      })
      this.old_watchlist_state = this.in_watchlist
      this._in_watchlist = !this.in_watchlist
    },
  }
}
</script>

<style scoped>
.backdrop {
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20rem;
  z-index: 1;
}

.text-on-backdrop {
  height: 13rem;
}


@media only screen and (min-width: 1536px) {
  .backdrop {
    height: 25rem;
  }
}

</style>
