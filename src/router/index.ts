import { createRouter, createWebHistory } from 'vue-router'

import Index from '../views/Index.vue'
import CV from '../views/Cv.vue'

const routerHistory = createWebHistory()
const routes = [
  { path: '/', component: Index },
  { path: '/cv', component: CV },
]

const router = createRouter({
  history: routerHistory,
  routes
})

export default router
