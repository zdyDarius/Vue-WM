// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TopHeader from './components/TopHeader/TopHeader.vue'
import store from './store'
import {Button} from 'mint-ui'
//注册全局组件
import'../src/mock/mockServer'

Vue.config.productionTip = false

Vue.component(Button.name,Button)
/* eslint-disable no-new */
Vue.component('TopHeader',TopHeader)

new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  store
})
