<template>
  <default-layout>
    <main class="w-5/6">
      <div class="flex flex-col items-center">
        <div class="h-40 w-40 bg-gray rounded-1"></div>
        <h1 class="text-5xl font-bold color-white capitalize text-center mt-5">{{ authStore.profile.name }}<span
            class="color-red">.</span></h1>

      </div>
    </main>
  </default-layout>
</template>

<script>
import MovieList from "@/components/MovieList.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import {useAuthStore} from "@/stores/auth.js";

export default {
  components: {
    DefaultLayout,
  },
  data() {
    return {
      authStore: useAuthStore(),
    }
  }
};
</script>