import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : 'vue-tpl'
  next()
})
export default router
