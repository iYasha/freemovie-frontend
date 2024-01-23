<template>
  <div class="flex flex-wrap w-100">

    <div class="w-1/4 pr-6 relative mt-10">
      <div class="bg-gray rounded-1 sticky top-10 p-5">
        <MovieMenuDropdown title="Genres" :open-by-default="true">
          <div v-for="item in genres.slice(0, 10)">
            <label class="block text-lg transition mt-1"
                   :class=" {'color-white': item.isEnabled, 'color-soft-gray': item.isEnabled === false} ">
              <input v-model="item.isEnabled" @change="filtersUpdated" :id="item.id" type="checkbox"
                     class="mr-1 checked-red">
              {{ item.value }}
            </label>
          </div>
        </MovieMenuDropdown>
        <div class="breaker mt-5"></div>
        <MovieMenuDropdown title="Rating" :open-by-default="true" class="mt-5">
          <div class="flex justify-between color-soft-gray">
            <span class="block font-medium">IMDb</span>
            <span class="block">{{ imdb_rating }}</span>
          </div>
          <input class="w-full" type="range" @change="filtersUpdated" v-model="imdb_rating" id="imdb_rating"
                 name="volume" min="0" max="10" step="0.1"/>
        </MovieMenuDropdown>
        <MovieMenuDropdown title="Release year" :open-by-default="true" class="mt-5">
          <div class="flex justify-between color-soft-gray">
            <div class="w-1/2 block mr-1">
              <span class="block font-medium">From</span>
              <input type="number" @change="filtersUpdated" v-model="year_from" class="w-full">
            </div>
            <div class="w-1/2 block ml-1">
              <span class="block font-medium">To</span>
              <input type="number" @change="filtersUpdated" v-model="year_to" class="w-full">
            </div>
          </div>
        </MovieMenuDropdown>
      </div>
    </div>

    <div class="w-3/4 mt-10">
      <div class="flex justify-between items-center">
        <div class="w-2/5">
          <div class="input flex justify-between items-center">
            <input type="text" @change="filtersUpdated" placeholder="Search" v-model="search">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass"
                               :class="{ 'color-white': search.length > 0, 'color-soft-gray': search.length == 0 }"/>
          </div>
        </div>
        <div class="w-1/4">
          <Dropdown @selected="setSortBy" :items="sorting_options"/>
        </div>
      </div>
      <div class="grid grid-cols-4 2xl:grid-cols-7 gap-6">
        <div v-if="loadingMovie" v-for="index in results_per_page" :key="index" class="col-span-1 mt-5">
          <MovieCard class="h-72" :loading="loadingMovie" :movie="skeletonMovie"/>
        </div>
        <div v-else-if="movies.length === 0" class="col-span-4 mt-5 color-white text-2xl">
          <h1>Movies not found</h1>
        </div>
        <div v-else v-for="movie in movies" :key="movie.id" class="col-span-1 mt-5">
          <MovieCard class="h-72" :loading="loadingMovie" :movie="movie"/>
        </div>
      </div>

      <div class="pagination mt-5 mb-10 color-white flex justify-center items-center">
        <button @click="getNextPage" v-if="movies_info.next != null" class="action-button">Show more</button>
      </div>
    </div>

  </div>

</template>
<script>
import axios from 'axios';
import MovieMenuDropdown from './MovieMenuDropdown.vue';
import Dropdown from "@/components/Dropdown.vue";
import MovieCard from "@/components/MovieCard.vue";
import {useAuthStore} from "@/stores/auth.js";
import GenreService from "@/services/genre.service";
import MovieService from "@/services/movie.service.js";

export default {
  components: {
    MovieCard,
    Dropdown,
    MovieMenuDropdown,
  },
  props: {
    movieType: {
      type: String,
      default: 'film',
    },
  },
  data() {
    return {
      loadingMovie: false,
      skeletonMovie: {
        id: null,
        poster_url: null,
        imdb_rating: null,
        release_date: null,
        title: '.',
      },
      sorting_fields: {
        0: '',
        1: '-release_date',
        2: 'release_date',
        3: '-imdb_rating',
      },
      current_sorting: 0,
      sorting_options: [
        {
          id: 0,
          value: 'Default',
        },
        {
          id: 1,
          value: 'From newest',
        },
        {
          id: 2,
          value: 'From oldest',
        },
        {
          id: 3,
          value: 'By rating',
        },
      ],
      genres: [],
      imdb_rating: 0.0,
      year_from: null,
      year_to: null,
      search: '',
      movies: [],
      movies_info: {
        total_count: 0,
        page_count: 0,
        next: 0,
      },
      results_per_page: 25,
    };
  },
  mounted() {
    this.fetchMovies(1);
    this.fetchGenres();
  },
  methods: {
    async setSortBy(item) {
      this.current_sorting = item.id;
      this.movies = [];
      await this.fetchMovies(1);
    },
    async filtersUpdated() {
      this.movies = [];
      await this.fetchMovies(1);
    },
    async fetchGenres() {
      GenreService.getAll().then(
          response => {
            response.data.data.forEach((item) => {
              this.genres.push({
                id: item.id,
                value: item.title,
                isEnabled: false,
              });
            });
          },
          error => {
            console.log(error);
          }
      );
    },
    async getNextPage() {
      await this.fetchMovies(this.movies_info.next);
    },
    async fetchMovies(page) {
      if (page === 1) {
        this.loadingMovie = true;
      }
      const ganre_ids = this.genres.filter((item) => item.isEnabled === true).map((item) => item.id).join(',');
      const params = {
        page: page,
        page_size: this.results_per_page,
        movie_type: this.movieType,
      };
      const sorting_fields = this.sorting_fields[this.current_sorting]
      if (sorting_fields.length > 0) {
        params.order_by = sorting_fields;
      }
      if (ganre_ids.length > 0) {
        params.genre__id__in = ganre_ids;
      }
      if (this.imdb_rating > 0) {
        params.imdb_rating__gte = this.imdb_rating;
      }
      if (this.year_from > 0) {
        params.release_date__gte = this.year_from + '-01-01';
      }
      if (this.year_to > 0) {
        params.release_date__lte = this.year_to + '-12-31';
      }
      if (this.search.length > 0) {
        params.search = this.search;
      }
      MovieService.get(params).then(
          response => {
            const response_data = response.data.data;
            this.movies = [...this.movies, ...response_data.results];
            this.movies_info.total_count = response_data.total_count;
            this.movies_info.page_count = response_data.page_count;
            this.movies_info.next = response_data.next;
            this.loadingMovie = false;
          },
          error => {
            console.log(error);
          }
      );
    },
  },
};
</script>