<template>
  <div class="container">
    <h1>Bem vindo {{msg}}</h1>
  </div>
</template>

<script>
import loginControl from '../services/login_control'

export default {
  computed: {
    msg () {
      if (loginControl.logged) {
        return loginControl.loginData.user.name
      } else {
        return 'ao MoraJunto'
      }
    }
  }
}
</script>
