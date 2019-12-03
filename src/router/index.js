import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import sliderPath from './sliderPath.js'
import login from '@/view/login'
import error from '@/view/error/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {
        name: '登录'
      },
      component: login
    },
    {
      path: '/',
      name: 'home',
      meta: {
        name: '首页',
        auth: false
      },
      component: home,
      children: sliderPath
    },
    {
      path: '/error',
      name: 'error',
      meta: {
        name: 'error'
      },
      component: error
    },
    {
      path: '*',
      redirect: '/error'
    }
  ]
})
