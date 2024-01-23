import {createRouter, createWebHistory} from 'vue-router'
import AllMoviesView from '../views/AllMoviesView.vue'
import AllTVShowsView from "@/views/AllTVShowsView.vue";
import {useAuthStore} from "@/stores/auth.js";

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

router.beforeEach(async (to) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const auth = useAuthStore();

    if (authRequired && !auth.accessToken) {
        auth.returnUrl = to.fullPath;
        return '/login';
    }
});

export default router
