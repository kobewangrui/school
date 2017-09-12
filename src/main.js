// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import frame from 'views/frame'
import Router from './router/index'
import Resource from 'vue-resource'
import Vuerify from 'vuerify'
import store from './store/store'
import $ from 'jquery'
// 引入自定义验证规则
import myRules from './rules'

// 日期格式过滤器
import './assets/filter/formatDate'

Vue.use(VueRouter)
Vue.use(Resource)

// 添加自定义验证规则
Vue.use(Vuerify,myRules)

// 全局化jquery
window.jquery = window.$ = $

Vue.config.productionTip = false
const router = Router(VueRouter,store)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<frame/>',
  components: { frame }
})
