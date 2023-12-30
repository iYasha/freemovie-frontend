<script setup>
import {RouterLink, RouterView} from 'vue-router'
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <header>
    <NavBar/>
  </header>
  <div class="flex justify-center mt-10">
  <RouterView/>
  </div>
</template>

<style scoped>

</style>
