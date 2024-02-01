<template>
  <div>
    <h1 class="text-5xl font-bold color-white">Continue to watch<span
        class="color-red">.</span></h1>
    <div class="flex overflow-y-scroll mt-10">
      <div v-if="loading" v-for="index in results_per_page" :key="index" class="h-72 fixed-width-52" :class="{'mr-6': index !== results_per_page}">
        <MovieCard class="h-72" :loading="loading" :movie="skeleton"/>
      </div>
      <div v-else-if="titles.length === 0" class="col-span-4 mt-5 color-white text-2xl">
        <h1>Movies not found</h1>
      </div>
      <div v-else v-for="(title, idx) in titles" :key="title.id" class="h-72 fixed-width-52" :class="{'mr-6': idx !== titles.length - 1}">
        <MovieCard class="h-72" :loading="loading" :movie-type="title.movie_type === 'movie' ? 'film' : 'tv-series' " :movie="title"/>
      </div>
    </div>
  </div>
</template>

<script>
import HomeService from "@/services/home.service.js";
import MovieCard from "@/components/MovieCard.vue";

export default {
  name: "ContinueToWatch",
  components: {MovieCard},
  data() {
    return {
      titles: [],
      loading: true,
      skeleton: {
        id: null,
        poster_path: null,
        imdb_rating: null,
        release_date: null,
        title: '.',
      },
      results_per_page: 48,
    }
  },
  mounted() {
    this.getListContinueToWatch();
  },
  methods: {
    getListContinueToWatch() {
      this.loading = true;

      HomeService.getContinueToWatch()
          .then((response) => {
            this.titles = response.data.data;
            this.loading = false;
          })
          .catch((e) => {
            console.log(e);
          });
    },
  }
}
</script>

<style scoped>

@media only screen and (min-width: 768px) {
  .fixed-width-52 {
    min-width: 11rem;
    max-width: 11rem;
  }
}

@media only screen and (min-width: 1024px) {
  .fixed-width-52 {
    min-width: 13rem;
    max-width: 13rem;
  }
}

</style>