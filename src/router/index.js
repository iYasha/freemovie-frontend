import {createRouter, createWebHistory} from 'vue-router'
import AllMoviesPage from '../pages/AllMoviesPage.vue'
import AllTVSeriesPage from "@/pages/AllTVSeriesPage.vue";
import {useAuthStore} from "@/stores/auth.js";
import UserProfilePage from "@/pages/UserProfilePage.vue";
import MoviePage from "@/pages/MoviePage.vue";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import HomePage from "@/pages/HomePage.vue";
import TVSeriesPage from "@/pages/TVSeriesPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home-page',
            component: HomePage,
        },
        {
            path: '/profile',
            name: 'profile',
            component: UserProfilePage,
        },
        {
            path: '/tv-shows',
            name: 'tv-shows',
            component: AllTVSeriesPage,
        },
        {
            path: '/tv-show/:id',
            name: 'tv-show',
            component: TVSeriesPage,
        },
        {
            path: '/movies',
            name: 'movies',
            component: AllMoviesPage,
        },
        {
            path: '/movie/:id',
            name: 'movie',
            component: MoviePage,
        },
        {
            path: '/login',
            name: 'login',
            component: LoginPage,
        },
        {
            path: '/register',
            name: 'register',
            component: RegisterPage,
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
