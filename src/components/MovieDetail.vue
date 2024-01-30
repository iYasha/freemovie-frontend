<template>
  <layout-without-navbar>
    <div
        class="backdrop rounded-b-3xl"
        :style="{ backgroundImage: 'linear-gradient(0deg, rgba(24,24,24,0.7) 0%, rgba(0,0,0,0) 100%), url(' + backdropUrl + ')' }"
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
      <div class="flex mt-14">
        <div class="w-1/4">
          <div v-if="loading" class="skeleton-block w-half rounded-1 h-96"></div>
          <img v-else :src="posterUrl" alt="poster" class="w-half rounded-1">

          <div class="mt-5 flex justify-between">
            <button @click="watchingTrailer = true;" v-if="trailerUrl" class="action-button font-bold">Watch
              Trailer
            </button>
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
          <div class="text-on-backdrop">
            <div v-if="loading" class="skeleton-block h-7"></div>
            <h3 v-else class="text-xl font-bold color-white">{{ release_year }}</h3>

            <div v-if="loading" class="skeleton-block h-11"></div>
            <h1 v-else-if="title" class="text-5xl font-bold color-white">{{ title }}<span
                class="color-red">.</span></h1>

            <div v-if="loading" class="skeleton-block h-7 mt-1"></div>
            <h2 v-else class="text-xl color-white">{{ tagline }}</h2>

            <div v-if="loading" class="skeleton-block h-16 mt-5"></div>
            <div class="mt-5" v-else>
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
export default {
  name: "MovieDetail",
  components: {
    Rating,
    YoutubePlayer,
    LayoutWithoutNavbar,
  },
  props: {
    liked: false,
    favorite: false,

    watchingTrailer: false,

    backUrl: {
      type: String,
      default: '/',
    },
    backTitle: {
      type: String,
      default: 'Home',
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
  computed: {
    release_year: function () {
      if (this.releaseDate) {
        return moment(String(this.releaseDate)).format('YYYY')
      }
      return '';
    },
  },
  methods: {
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
</style>
