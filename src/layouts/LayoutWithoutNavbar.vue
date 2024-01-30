<template>
  <div class="flex justify-center">
    <slot></slot>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "LayoutWithoutNavbar",
  components: {NavBar}
}
</script>

<style scoped>

</style>