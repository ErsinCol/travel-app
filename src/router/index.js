import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomePage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue'),
    props: (route) => ({
      slug: route.params.slug
    })
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: 'custom-link-active'
})

export default router
