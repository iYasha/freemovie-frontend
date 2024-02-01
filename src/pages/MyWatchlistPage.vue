<template>
  <default-layout>
    <main class="w-5/6">
      <h1 class="text-5xl font-bold color-white">My Watchlist<span class="color-red">.</span></h1>
      <div class="flex flex-wrap w-100">

        <div class="mt-10 sm:w-full">
          <div class="grid lg:grid-cols-5 sm:grid-cols-4 2xl:grid-cols-9 gap-6">
            <div v-if="loading" v-for="index in results_per_page" :key="index" class="col-span-1 lg:mt-5 sm:mt-0">
              <MovieCard class="h-72" :loading="loading" :movie="skeletonMovie"/>
            </div>
            <div v-else-if="movies.length === 0" class="col-span-4 lg:mt-5 sm:mt-0 color-white text-2xl">
              <h1>Movies not found</h1>
            </div>
            <div v-else v-for="movie in movies" :key="movie.id" class="col-span-1 lg:mt-5 sm:mt-0">
              <MovieCard
                  class="h-72"
                  :loading="loading"
                  :movie-type="movie.movie_type === 'movie' ? 'film' : 'tv-show'"
                  :movie="movie"/>
            </div>
          </div>

          <div class="pagination mt-5 mb-10 color-white flex justify-center items-center">
            <button @click="fetchWatchlist(next_page)" v-if="next_page != null" class="action-button">Show more</button>
          </div>
        </div>

      </div>

    </main>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import MovieCard from "@/components/MovieCard.vue";
import WatchlistService from "@/services/watchlist.service.js";

export default {
  components: {
    DefaultLayout,
    MovieCard,
  },
  data() {
    return {
      loading: false,
      skeletonMovie: {
        id: null,
        poster_url: null,
        imdb_rating: null,
        release_date: null,
        title: '.',
      },
      next_page: 1,
      results_per_page: 25,
      movies: [],
    }
  },
  mounted() {
    this.fetchWatchlist(1);
  },
  methods: {
    fetchWatchlist(page) {
      if (page === 1) {
        this.loading = true;
      }
      WatchlistService.list(page).then(
          response => {
            const response_data = response.data.data;
            this.movies = [...this.movies, ...response_data];
            this.next_page = null;
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