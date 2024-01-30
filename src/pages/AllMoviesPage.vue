<template>
  <default-layout>
    <main class="w-5/6">
      <h1 class="text-5xl font-bold color-white">Movies<span class="color-red">.</span></h1>
      <MovieList movie-type="film"/>
    </main>
  </default-layout>
</template>

<script>
import MovieList from "@/components/MovieList.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

export default {
  components: {
    DefaultLayout,
    MovieList,
  },
};
</script>