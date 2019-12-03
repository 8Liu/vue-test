// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)

/**
 * 路由拦截器
 */
router.beforeEach(({meta, path}, from, next) => {
  let { auth = true } = meta
  if (!auth && path !== '/login') {
    return next({path: '/login'})
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
