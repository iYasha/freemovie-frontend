<template>
  <Menu as="div" class="w-full relative">
    <MenuButton class="dropdown-button w-full inline-flex justify-between rounded-1 font-medium bg-gray color-soft-gray">
      {{ selected.value }}
      <ChevronDownIcon
          class="-mr-1 ml-2 h-5 w-5 color-soft-gray hover:text-violet-100"
          aria-hidden="true"
      />
    </MenuButton>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="dropdown-items absolute z-10 w-full origin-top-right rounded-1 bg-white shadow-lg">
        <MenuItem v-for="(item, idx) in options" @click="setSelectedItem(item)" class="block dropdown-item cursor-pointer" :class="{'rounded-bottom-1': idx == options.length - 1 }" v-slot="{ active }">
          <span class="block">{{ item.value }}</span>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/vue";
import { ChevronDownIcon } from '@heroicons/vue/20/solid'


export default {
  name: "Dropdown",
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    ChevronDownIcon,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    }
  },
  mounted() {
  },
  data () {
    return {
      selected: this.items[0],
      options: this.items.slice(1),
    }
  },
  methods: {
    setSelectedItem(selected_item) {
      this.selected = selected_item;
      this.options = this.items.filter(item => item.id !== selected_item.id).sort((a, b) => a.id - b.id);
      this.$emit('selected', selected_item);
    }
  },
}
</script>

<style scoped>

</style>