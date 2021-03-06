import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Commande from '@/pages/Commande.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/commande',
    name: 'Commande',
    component: Commande
  },
  {
    path: "/:catchAll(.*)",
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
