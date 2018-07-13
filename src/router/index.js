import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/About'
import SignUp from '../components/SignUp'
import Login from '../components/Login'
import User from '../components/User'
import Anuncios from '../components/Anuncios'
import UpdateUser from '../components/UpdateUser'
import CriarAnuncio from '../components/CriarAnuncio'
import Anuncio from '../components/Anuncio'
import Home from '../components/Home'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
    },
    {
      path: '/criarAnuncio',
      name: 'criarAnuncio',
      component: CriarAnuncio
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/anuncios',
      name: 'anuncios',
      component: Anuncios
    },
    {
      path: '/user/update/:username',
      name: 'update',
      component: UpdateUser
    },
    {
      path: '/anuncio/:id',
      name: 'anuncio',
      component: Anuncio
    },
    {
      path: '/user/:username',
      name: 'user',
      component: User
    }
  ]
})
