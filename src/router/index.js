/**
 * Created by zdy on 2018/11/17.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import MSide from '../pages/MSide/MSide.vue'
import Order from '../pages/Order/Order.vue'
import Profile from  '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(VueRouter)
export default new VueRouter({
  module:'histroy',
  routes:[
    {
      path:'/mside',
      component:MSide,
      meta:{
        show:true
      }
    },
    {
      path:'/order',
      component:Order,
      meta:{
        show:true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        show:true
      }
    },
    {
      path:'/search',
      component:Search,
      meta:{
        show:true
      }
    },
    {
      path:'/login',
      component:Login
    },
    {
      path: '/',
      redirect: '/mside'
    },
  ]
})
