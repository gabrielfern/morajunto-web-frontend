import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import User from '../components/User'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/user/:username',
      name: 'user',
      component: User
    }
  ]
})
