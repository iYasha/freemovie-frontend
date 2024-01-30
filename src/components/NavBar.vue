<script setup>
import {Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {useAuthStore} from "@/stores/auth.js";

const authStore = useAuthStore();

</script>

<template>
  <Menu as="nav" class="w-100 pt-5">
    <div class="flex justify-between items-center">
      <div class="w-10 h-10">
        <img src="/logo@2x.png" alt="">
      </div>
      <div class="menu">
        <ul class="flex">
          <li class="mr-4"><a href="#" class="link font-medium">Home</a></li>
          <li class="mr-4"><router-link active-class="color-red" to="/tv-shows" class="link font-medium">TV Shows</router-link></li>
          <li><router-link active-class="color-red" to="/movies" class="link font-medium">Movies</router-link></li>
        </ul>
      </div>
      <div class="account-menu color-white">
        <MenuButton
            class="color-white link inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold">
          Account
          <font-awesome-icon class="mr-1 h-5 w-5" icon="fa-solid fa-user"/>
        </MenuButton>
      </div>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems
          class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <router-link :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']" to="/profile">My profile</router-link>
          </MenuItem>
          <MenuItem @click="authStore.logout()" v-slot="{ active }">
            <button
                    :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block w-full px-4 py-2 text-left text-sm']">
              Logout
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
