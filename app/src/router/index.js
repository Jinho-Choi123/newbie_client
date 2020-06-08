import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Find from '@/components/Find'
import Want from '@/components/Want'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }, {
      path: '/find',
      name: 'find',
      component: Find
    }, {
      path: '/want',
      name: 'want',
      component: Want
    }
  ]
})
