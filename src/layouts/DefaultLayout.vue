<template>
  <header>
    <NavBar/>
  </header>
  <div class="flex justify-center mt-10">
    <slot></slot>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "DefaultLayout",
  components: {NavBar}
}
</script>

<style scoped>

</style>