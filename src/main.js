import { createApp } from 'vue'
import './assets/style.css'
import './index.css'
import App from './App.vue'
import router from './router/index.ts'

const app = createApp(App)

app
  .use(router)
  .mount('#app')