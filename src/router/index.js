import Vue from 'vue'
import Router from 'vue-router'
import Links from '../components/Links'
import About from '../components/About'
import SignUp from '../components/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Links',
      component: Links
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
