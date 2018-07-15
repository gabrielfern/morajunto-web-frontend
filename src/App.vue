<template>
  <div id="app" class="container">
    <nav>
      <div class="nav-wrapper teal">
        <a href="/#/" class="brand-logo" style="margin-left:1rem"><i class="material-icons">hotel</i>MoraJunto</a>
        <a href="#" data-target="mobile-first" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li><a href="/#/user" v-if="loginControl.logged">Meus dados</a></li>
          <li><a href="/#/signup" v-if="!loginControl.logged">Cadastrar</a></li>
          <li><a href="/#/login" v-if="!loginControl.logged">Login</a></li>
          <li><a href="/#/about" v-if="!loginControl.logged">Sobre</a></li>
          <li><a href="#" @click="logout" v-if="loginControl.logged">Sair</a></li>
        </ul>
      </div>
    </nav>
    <ul class="sidenav sidenav-close" id="mobile-first">
      <li><a href="/#/user" v-if="loginControl.logged">Meus dados</a></li>
      <li><a href="/#/signup" v-if="!loginControl.logged">Cadastrar</a></li>
      <li><a href="/#/login" v-if="!loginControl.logged">Login</a></li>
      <li><a href="/#/about" v-if="!loginControl.logged">Sobre</a></li>
      <li><a href="#" @click="logout" v-if="loginControl.logged">Sair</a></li>
    </ul>
    <hr>
    <router-view/>
    <hr>
  </div>
</template>

<script>
import loginControl from './services/login_control'
import ajax from './services/ajax'

export default {
  name: 'App',

  data () {
    return {
      msg: 'MoraJunto app',
      loginControl: loginControl
    }
  },

  methods: {
    logout () {
      // eslint-disable-next-line
      modalLogout.open()
      $('#modal-logout-close').focus()
      addEventListener('logout', () => {
        loginControl.logged = false
        localStorage.clear()
        this.$router.push({ path: '/' })
      })
    }
  },

  beforeMount () {
    if (localStorage.getItem('username')) {
      ajax.getUserByUsername(localStorage.getItem('username'))
        .then(resp => {
          if (resp.data) {
            loginControl.loginData.user = resp.data
            loginControl.logged = true
          }
        })
    }
  }
}
</script>
