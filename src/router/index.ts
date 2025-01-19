import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/login',
      name:'login',
      component: () => import('@views/login/index.vue'),
    },
    {
      path:'/register',
      name:'register',
      component:() => import('@views/register/index.vue'),
    },

  ],
  meta: {
    isLogin:false, // 开启登陆验证 设置为false就不进行登录验证==》就算没登录也能进主页面
  },
})

export default router
