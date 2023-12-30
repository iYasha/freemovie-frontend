import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
library.add(faUser)
library.add(faMagnifyingGlass)


const app = createApp(App)

app.use(createPinia())
app.use(router).component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
