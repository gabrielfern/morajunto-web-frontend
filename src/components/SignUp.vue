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
    <a href="#" @click="createUser"><button class="waves-effect waves-light btn">Confirmar</button></a>
    <h4 v-if="failOnSignUp">Falha ao cadastrar</h4>
    <h4 v-if="successOnSignUp">Cadastrado com sucesso</h4>
  </div>
</template>

<script>

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
      fetch('/api/users', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.name,
          email: this.email,
          password: this.password
        })
      })
        .then(resp => {
          if (resp.status < 300) {
            this.showSignUpResult(false)
            this.$router.push('login')
          } else {
            this.showSignUpResult(false)
          }
        })
    },
    showSignUpResult (succeeded) {
      this.failOnSignUp = this.successOnSignUp = false
      if (succeeded) {
        this.failOnSignUp = true
      } else {
        this.failOnSignUp = false
      }
    }
  }
}
</script>
