<template>
  <div class="row">
    <div class="row">
      <div class="input-field col s12">
        <input type="email" v-model="username">
        <label>Nome de Usuario</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input type="password" v-model="password">
        <label>Senha</label>
      </div>
    </div>
    <a href="/#/"><button class="btn waves-effect waves-light red lighten-2">Cancelar</button></a>
    <button class="waves-effect waves-light btn" @click="loginUser" :disabled="!username || !password">Entrar</button>
    <a href="/#/signup"><button class="waves-effect waves-light btn blue-grey right">Cadastrar</button></a>
    <div class="card-panel red lighten-2" v-if="failLogin"> Login ou senha inválidos</div>
  </div>
</template>

<script>
import ajax from '../services/ajax'

export default {
  data () {
    return {
      username: '',
      password: '',
      failLogin: false
    }
  },

  methods: {
    loginUser () {
      ajax.login(this.username, this.password)
        .then(this.handleLogin)
    },

    handleLogin (success) {
      if (success) {
        this.$router.push({ path: '/' })
      } else {
        this.failLogin = true
      }
    }
  }
}
</script>
