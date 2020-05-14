 /* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path:'/',
      redirect:'/goods'
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import('@/components/goods')
    },
    {
      path:'/seller',
      name:'seller',
      component:()=>import('@/components/seller')
    },
    {
      path:'/ratings',
      name:'ratings',
      component:()=>import('@/components/ratings')
    }
  ]
})
