<template>
  <div id="app" class="container">
    <nav>
      <div class="nav-wrapper teal">
        <a href="/#/" class="brand-logo">MoraJunto</a>
        <ul class="right hide-on-med-and-down">
          <li><a href="/#/">Inicio</a></li>
          <li><a href="/#/signup">Cadastrar</a></li>
          <li><a href="/#/login">Login</a></li>
          <li><a href="/#/about">Sobre</a></li>
        </ul>
      </div>
    </nav>
    <hr>
    <router-view/>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      showMsgListUsers: false,
      msg: 'MoraJunto app'
    }
  },
  methods: {
    listUsers () {
      fetch('/api/users')
        .then(resp => resp.json())
        .then(data => console.log(data))
      this.showMsgListUsers = true
    }
  }
}
</script>
