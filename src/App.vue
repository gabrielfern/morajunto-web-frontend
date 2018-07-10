<template>
  <div id="app" class="container">
    <nav>
      <div class="nav-wrapper teal">
        <a href="/#/" class="brand-logo" style="margin-left:1rem"><i class="material-icons">hotel</i>MoraJunto</a>
        <a href="#" data-target="mobile-first" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li><a href="/#/signup" v-if="!loginControl.logged">Cadastrar</a></li>
          <li><a href="/#/login" v-if="!loginControl.logged">Login</a></li>
          <li><a href="/#/about">Sobre</a></li>
          <li><a href="#" @click="logout" v-if="loginControl.logged">Sair</a></li>
        </ul>
      </div>
    </nav>
    <ul class="sidenav sidenav-close" id="mobile-first">
      <li><a href="/#/signup" v-if="!loginControl.logged">Cadastrar</a></li>
      <li><a href="/#/login" v-if="!loginControl.logged">Login</a></li>
      <li><a href="/#/about">Sobre</a></li>
      <li><a href="#" @click="logout" v-if="loginControl.logged">Sair</a></li>
    </ul>
    <hr>
    <router-view/>
    <hr>
  </div>
</template>

<script>
import loginControl from './services/login_control'
window.loginControl = loginControl

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
      loginControl.logged = false
      this.$router.push({ path: '/' })
    }
  }
}
</script>
