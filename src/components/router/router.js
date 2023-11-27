import { createRouter, createWebHistory } from 'vue-router'
import req from '../req.vue'
import Login from '../Login.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/req',
      name: 'req',
      component: req,
      // meta: {
      //   requiresAuth: true 
      // },
    },     
    {
      path: '/Login',
      name: 'Login',
      component: Login,
      // meta: {
      //   requiresAuth: false
      // },
    }, 
  ]
})
// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth) {
//     try
//     {
//     const token = this.$cookies.get("token");
//     }catch
//     {
//       //  next('/Login');
//    }
    // if (token) {
    //   next('/Login');
    // } else {
    //   next('/');
    // }
//   } 
// });
  export default router