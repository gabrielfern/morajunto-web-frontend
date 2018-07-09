<template>
  <div id="app" class="container">
    <nav>
      <div class="nav-wrapper teal">
        <a href="/#/" class="brand-logo"><i class="material-icons">hotel</i>MoraJunto</a>
        <a href="#" data-activates="mobile-first" class="button-collapse right"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li><a href="/#/signup">Cadastrar</a></li>
          <li><a href="/#/login">Login</a></li>
          <li><a href="/#/about">Sobre</a></li>
        </ul>
      </div>
    </nav>
    <ul class="side-nav" id="mobile-first">
      <li><a href="/#/signup">Cadastrar</a></li>
      <li><a href="/#/login">Login</a></li>
      <li><a href="/#/about">Sobre</a></li>
    </ul>
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
      msg: 'MoraJunto app'
    }
  },
  methods: {
    listUsers () {
      fetch('/api/users')
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
  },
  mounted () {
    $('.button-collapse').sideNav({ closeOnClick: true })
  }
}
</script>
