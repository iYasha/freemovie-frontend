import { createRouter, createWebHistory } from 'vue-router'
import AllMoviesView from '../views/AllMoviesView.vue'
import AllTVShowsView from "@/views/AllTVShowsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/tv-shows',
      name: 'tv-shows',
      component: AllTVShowsView,
    },
    {
      path: '/movies',
      name: 'movies',
      component: AllMoviesView,
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: () => import('../views/MovieView.vue')
    }
  ]
})

export default router
