import { createApp } from 'vue'
import App from './App.vue'
import Routes from '@/routes'
import '@fortawesome/fontawesome-free/css/all.css'
createApp(App)
.use(Routes)
.mount('#app')
