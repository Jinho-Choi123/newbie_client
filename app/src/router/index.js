import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main'
import Find from '../components/Find'
import Want from '../components/Want'
import Register from '../components/Register'
import Login from '../components/Login'
import Me from '../components/Me'
import Logout from '../components/Logout'
// import axios from 'axios'

import axios from 'axios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }, {
      path: '/findwant/find',
      name: 'find',
      component: Find,
      beforeEnter: (to, from, next) => {
        axios.get('http://localhost:8080/auth/authenticate', {
          headers: {
            'x-access-token': `${localStorage.getItem('token')}`
          }
        })
          .then((res) => {
            console.log('gogogog')
            next()
          })
          .catch((err) => {
            console.log(err)
            this.$router.push({ name: 'login' })
          })
      }
    }, {
      path: '/findwant/want',
      name: 'want',
      component: Want,
      beforeEnter: (to, from, next) => {
        axios.get('http://localhost:8080/auth/authenticate', {
          headers: {
            'x-access-token': `${localStorage.getItem('token')}`
          }
        })
          .then((res) => {
            console.log('gogogog')
            next()
          })
          .catch((err) => {
            console.log(err)
            this.$router.push({ name: 'login' })
          })
      }
    },
    {
      path: '/auth/register',
      name: 'register',
      component: Register
    },
    {
      path: '/auth/login',
      name: 'login',
      component: Login
    },
    {
      path: '/me',
      name: 'Me',
      component: Me,
      beforeEnter: (to, from, next) => {
        axios.get('http://localhost:8080/auth/authenticate', {
          headers: {
            'x-access-token': `${localStorage.getItem('token')}`
          }
        })
          .then((res) => {
            console.log('gogogog')
            next()
          })
          .catch((err) => {
            console.log(err)
            next({name: 'login'})
          })
      }
    },
    {
      path: '/auth/logout',
      name: 'Logout',
      component: Logout,
      beforeEnter: (to, from, next) => {
        axios.get('http://localhost:8080/auth/authenticate', {
          headers: {
            'x-access-token': `${localStorage.getItem('token')}`
          }
        })
          .then((res) => {
            console.log('gogogog')
            next()
          })
          .catch((err) => {
            console.log(err)
            next({name: 'login'})
          })
      }
    }
  ]
})
