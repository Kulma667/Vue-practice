import { createRouter, createWebHistory } from 'vue-router'
import req from '../req.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/req',
      name: 'req',
      component: req
    }
  ]
})

  export default router