import { createRouter, createWebHashHistory } from 'vue-router'
import BasicLayout from '@/components/layout/Basic.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BasicLayout
    },
  ]
})

export default router
