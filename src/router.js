import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress/nprogress'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/model',
      name: 'model',
      // route level code-splitting
      // this generates a separate chunk (model.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "model" */ './views/Model.vue')
    }
  ]
})

router.beforeEach((routeTo, routeFrom, next) => {
  if (routeFrom.name != null) {
    NProgress.start()
  }
  next()
})

router.afterEach((routeTo, routeFrom) => {
  NProgress.done()
})

export default router
