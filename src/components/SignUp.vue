<template>
  <div class="row">
    <div class="row">
      <div class="input-field col s12">
        <input type="text" v-model="name">
        <label>Nome</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input type="email" v-model="email">
        <label>Email</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s12">
        <input type="password" v-model="password">
        <label>Senha</label>
      </div>
    </div>
    <a href="/#/"><button class="btn waves-effect waves-light red lighten-2">Cancelar</button></a>
    <button class="waves-effect waves-light btn" @click="createUser" :disabled="!name || !email || !password">Confirmar</button>
    <a href="/#/login"><button class="waves-effect waves-light btn blue-grey right">Entrar</button></a>
    <h4 v-if="failOnSignUp">Falha ao cadastrar</h4>
    <h4 v-if="successOnSignUp">Cadastrado com sucesso</h4>
  </div>
</template>

<script>
import ajax from '../services/ajax'

export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      failOnSignUp: false,
      successOnSignUp: false
    }
  },
  methods: {
    createUser () {
      ajax.createUser(
        this.name,
        this.email,
        this.password
      )
        .then(resp => {
          if (resp.status < 300) {
            this.showSignUpResult(true)
          } else {
            this.showSignUpResult(false)
          }
        })
    },
    showSignUpResult (succeeded) {
      this.failOnSignUp = this.successOnSignUp = false
      if (succeeded) {
        this.successOnSignUp = true
      } else {
        this.failOnSignUp = false
      }
    }
  }
}
</script>
