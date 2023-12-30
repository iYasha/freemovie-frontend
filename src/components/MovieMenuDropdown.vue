<template>
  <div class="w-full">
    <button @click="stateOpen = !stateOpen" class="w-full inline-flex justify-between text-xl font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
      {{ title }}
      <ChevronDownIcon
          class="-mr-2 h-7 w-7 text-violet-200 hover:text-violet-100"
          aria-hidden="true"
      />
    </button>
      <div v-if="stateOpen" class="mt-3 w-100 origin-top-right">
        <slot></slot>
      </div>
  </div>
</template>

<script>
import { ChevronDownIcon } from '@heroicons/vue/20/solid'


export default {
  name: "MovieMenuDropdown",
  components: {
    ChevronDownIcon,
  },
  props: {
    title: String,
    openByDefault: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      stateOpen: this.openByDefault,
    }
  },
}
</script>

<style scoped>
</style>