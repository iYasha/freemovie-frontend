<template>
  <div class="rounded-1">
    <router-link :to="'/movie/' + movie.id">
      <div class="movie-card h-full bg-cover bg-center p-3 flex flex-col justify-between rounded-1">

        <div
            class="card-image rounded-1"
            :style="{ backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 60%), url(' + movie.poster_url + ')' }"
        ></div>

        <div class="flex" :class="{ 'justify-between': movie.imdb_rating || movie.release_date, 'justify-end': !movie.imdb_rating && !movie.release_date }">
          <div v-if="movie.imdb_rating"
               class="w-fit text-sm bg-dark color-soft-gray font-medium py-1.5 px-3 rounded-1 flex justify-center items-center">
            <font-awesome-icon class="mr-1 h-4 w-4 color-orange" icon="fa-solid fa-star"/>
            {{ movie.imdb_rating }}
          </div>
          <div v-if="movie.release_date"
              class="w-fit text-sm bg-dark color-soft-gray font-medium py-1.5 px-3 rounded-1 flex justify-center items-center">
            {{ format_date(movie.release_date) }}
          </div>
          <button
              @click.prevent="console.log('add to favorites')"
              class="badge badge-favorite cursor-pointer w-fit text-sm bg-dark color-soft-gray font-medium py-1.5 px-3 rounded-1 flex justify-center items-center">
            <font-awesome-icon class="h-4 w-4" icon="fa-solid fa-plus"/>
          </button>

        </div>

        <div class="mb-3">
<!--          <div class="flex mb-4">-->
<!--            <div v-if="movie.imdb_rating"-->
<!--                 class="w-fit text-sm bg-dark color-soft-gray font-medium py-1.5 px-3 rounded-1 flex justify-center items-center mr-2">-->
<!--              <font-awesome-icon class="mr-1 h-4 w-4 color-orange" icon="fa-solid fa-star"/>-->
<!--              {{ movie.imdb_rating }}-->
<!--            </div>-->
<!--            <div-->
<!--                class="w-fit text-sm bg-dark color-soft-gray font-medium py-1.5 px-3 rounded-1 flex justify-center items-centerd">-->
<!--              {{ format_date(movie.release_date) }}-->
<!--            </div>-->
<!--          </div>-->

          <div class="color-white font-semibold text-lg text-center w-full flex justify-center items-center">{{ movie.title }}</div>
          <div class="card-hidden">

          <div class="color-white mt-2 text-center">{{ movie.short_description }}</div>
          </div>
        </div>

      </div>
    </router-link>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "MovieCard",
  components: {},
  props: {
    movie: Object,
  },
  data() {
    return {}
  },
  methods: {
    format_date(value) {
      if (value) {
        return moment(String(value)).format('YYYY')
      }
    },
  }
}
</script>

<style scoped>

.card-image {
  width: 100%;
  height: 100%;
  content: '';
  left: 0;
  top: 0;
  position: absolute;
  z-index: -1;
  overflow: hidden;
  background-size: contain;
  transition: .3s;
}

.movie-card {
  position: relative;
  z-index: 1;
  transition: .3s;
  overflow: hidden;
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

</style>