import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser, faMagnifyingGlass, faStar, faPlus, faHeart as faHeartSolid, faBookmark as faBookmarkSolid, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faHeart, faBookmark } from '@fortawesome/free-regular-svg-icons'
import setupInterceptors from "@/services/setupInterceptors.js";
library.add(faUser)
library.add(faMagnifyingGlass)
library.add(faStar)
library.add(faPlus)
library.add(faHeart)
library.add(faHeartSolid)
library.add(faBookmark)
library.add(faBookmarkSolid)
library.add(faTriangleExclamation)

// TODO: Interesting for future purpose
// import axios from 'axios';
// axios.defaults.baseURL = process.env.VUE_APP_API_URL
// axios.interceptors.request.use(function (config) {
//     config.headers['X-Binarybox-Api-Key'] = process.env.VUE_APP_API_KEY;
//     return config;
// });

const app = createApp(App)

app.use(createPinia())
app.use(router).component('font-awesome-icon', FontAwesomeIcon)
setupInterceptors()

app.mount('#app')
