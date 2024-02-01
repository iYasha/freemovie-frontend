<template>
  <default-layout>
    <main class="w-5/6">
      <popular-titles/>
      <continue-to-watch class="mt-10"/>
    </main>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import PopularTitles from "@/components/PopularTitles.vue";
import ContinueToWatch from "@/components/ContinueToWatch.vue";

export default {
  components: {
    ContinueToWatch,
    PopularTitles,
    DefaultLayout,
  },
};
</script>