import { createRouter, createWebHistory } from 'vue-router'
import PokemonPosts from '@/views/PokemonPosts.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PokemonPosts
  },
  {
    path: '/:id',
    component: () => import('@/views/PokemonInfoPage.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

