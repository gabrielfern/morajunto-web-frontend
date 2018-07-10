<template>
  <div id="app" class="container">
    <nav>
      <div class="nav-wrapper teal">
        <a href="/#/" class="brand-logo" style="margin-left:1rem"><i class="material-icons">hotel</i>MoraJunto</a>
        <a href="#" data-target="mobile-first" class="sidenav-trigger right"><i class="material-icons">menu</i></a>
        <ul class="right hide-on-med-and-down">
          <li><a href="/#/signup">Cadastrar</a></li>
          <li><a href="/#/login">Login</a></li>
          <li><a href="/#/about">Sobre</a></li>
        </ul>
      </div>
    </nav>
    <ul class="sidenav sidenav-close" id="mobile-first">
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
  }
}
</script>
