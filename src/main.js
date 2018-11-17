// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TopHeader from './components/TopHeader/TopHeader.vue'
//注册全局组件
Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.component('TopHeader',TopHeader)
new Vue({
  el: '#app',
 render:h=>h(App),
  
  router
})
