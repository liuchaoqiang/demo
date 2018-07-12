import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
const _import = require('./_import')
Vue.use(Router)
export const RoutersMap = [
  {
    path: '/',
    name: 'HelloWorld',
    component: _import('HelloWorld'),
    meta: {
      title: '首页'
    }
  }
]
export default new Router({
  // mode: 'history',
  routes: RoutersMap
})
