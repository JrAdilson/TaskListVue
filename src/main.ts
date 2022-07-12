import { createApp } from 'vue'
import App from './App.vue'
import Routes from '@/routes'
import '@fortawesome/fontawesome-free/css/all.css'
import { key, store } from './store'
createApp(App)
.use(Routes)
.use(store, key)
.mount('#app')
