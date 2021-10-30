import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Video',
    name: 'Video',
    component: ()=> import('@/views/Video.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: ()=> import('@/views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
