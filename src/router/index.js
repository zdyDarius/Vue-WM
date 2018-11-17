/**
 * Created by zdy on 2018/11/17.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import MSide from '../pages/MSide/MSide.vue'
import Order from '../pages/Order/Order.vue'
import Profile from  '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'

Vue.use(VueRouter)
export default new VueRouter({
  module:'histroy',
  routes:[
    {
      path:'/mside',
      component:MSide
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/search',
      component:Search
    },
    {
      path: '/',
      redirect: '/mside'
    },
  ]
})
