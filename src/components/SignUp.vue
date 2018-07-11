<template>
  <div class="row">
    <div class="row">
      <div class="input-field col s6">
        <input type="text" v-model="name">
        <label>Nome de Usuario</label>
      </div>
      <div class="input-field col s6">
        <input type="text" v-model="username">
          <label>Username</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s3">
        <the-mask :mask="['(##)####-####']" id="contact" v-model="contact"/>
        <label>Telefone</label>
      </div>
      <div class="input-field col s3">
        <the-mask :mask="['###.###.###-##']" id="cpf" v-model="cpf"/>
         <label>CPF</label>
      </div>
       <div class="input-field col s2">
        <input type="text" v-model="age">
          <label>Idade</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6">
        <input type="text" v-model="email">
        <label>Email</label>
      </div>
      <div class="input-field col s6">
        <input type="password" v-model="password">
        <label>Senha</label>
      </div>
    </div>
    <a href="/#/"><button class="btn waves-effect waves-light red lighten-2">Cancelar</button></a>
    <button class="waves-effect waves-light btn" @click="createUser" :disabled="!name || !email || !password">Confirmar</button>
    <a href="/#/login"><button class="waves-effect waves-light btn blue-grey right">Entrar</button></a>
    <div class="card-panel red lighten-2" v-if="failOnSignUp">Falha ao cadastrar</div>
    <div class="card-panel teal lighten-2 white-text" v-if="successOnSignUp">Cadastrado com sucesso</div>
  </div>
</template>

<script>
import ajax from '../services/ajax'
import {TheMask} from 'vue-the-mask'

export default {
  components: {TheMask},
  data () {
    return {
      name: '',
      email: '',
      username: '',
      contact: '',
      cpf: '',
      age: '',
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
        this.password,
        parseInt(this.contact),
        parseInt(this.cpf),
        parseInt(this.age),
        this.username
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
