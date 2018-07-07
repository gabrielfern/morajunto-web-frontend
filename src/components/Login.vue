<template>
  <div class="row">
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
    <a href="#" @click="loginUser"><button class="waves-effect waves-light btn">Login</button></a>
    <h4 v-if="failLogin"> Login ou senha inválidos</h4>
    <h4 v-if="successLogin">Login com sucesso</h4>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      failLogin: false,
      successLogin: false
    }
  },
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  methods: {
    loginUser () {
      fetch('/api/users', {
        method: 'GET'
      })
        .then(resp => resp.json())
        .then(data => this.verifyLogin(data.data))
    },
    verifyLogin (data) {
      var i
      for (i = 0; i < data.length; i++) {
        if (data[i].email === this.email && data[i].password === this.password) {
          this.successLogin = true
          this.failLogin = false
          this.$router.push({ path: `/user/${data[i].username}` })
        } else {
          this.failLogin = true
          this.successLogin = false
        }
      }
    }
  }
}
</script>
