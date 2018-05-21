import Vue from 'vue'
import Router from 'vue-router'
import Links from '../components/Links'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Links',
      component: Links
    }
  ]
})
