import {createRouter, createWebHistory} from 'vue-router'
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
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/RegisterView.vue')
        },
    ]
})

export default router
