// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
require('es6-promise').polyfill()
router.beforeEach(function (to, from, next) {
  window.document.title = to.meta.title
  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()// 继续下一个操作
  }
})
router.afterEach(function (to) {
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
