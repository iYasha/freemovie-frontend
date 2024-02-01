<template>
  <div>
    <h1 class="text-5xl font-bold color-white">Most Popular<span
        class="color-red">.</span></h1>
      <div class="h-72 flex hide-scrollbar overflow-y-scroll position-full-screen mt-10 left-0">
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
  name: "PopularTitles",
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
    this.getPopularTitles();
  },
  methods: {
    getPopularTitles() {
      this.loading = true;

      HomeService.getPopularThisWeek()
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

.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.position-full-screen {
  margin-left: calc(((100% + 10rem - 83.333333%) / 2) * -1);
  margin-right: calc(((100% + 9rem - 83.333333%) / 2) * -1);
}

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
  .position-full-screen {
    margin-left: calc(((100% + 7rem - 83.333333%) / 2) * -1);
    margin-right: calc(((100% + 7rem - 83.333333%) / 2) * -1);
  }
}

@media only screen and (min-width: 1536px) {
  .position-full-screen {
    margin-left: calc(((100% + 10rem - 83.333333%) / 2) * -1);
    margin-right: calc(((100% + 9rem - 83.333333%) / 2) * -1);
  }
}

</style>