<template>
  <div class="row">
    <div class="input-field col s12">
    <h5 style="color: teal;">Atualizar senha</h5>
      </div>
    <div class="input-field col s12">
        <input type="password" v-model="password">
        <label>Digite a nova senha:</label>
        <a href="#"><button class="btn waves-effect waves-light red lighten-2" @click="cancelar">Cancelar</button></a>
        <a href="#" @click="updateUser"><button class="waves-effect waves-light btn">Atualizar</button></a>
      </div>
  </div>
</template>
<script>
import loginControl from '../services/login_control'

export default {
  data () {
    return {
      id: '',
      password: '',
      username: '',
      email: '',
      name: '',
      contact: '',
      cpf: '',
      age: ''
    }
  },
  methods: {
    processing (data) {
      this.username = data.username
      this.email = data.email
      this.name = data.name
      this.contact = data.contact
      this.cpf = data.cpf
      this.age = data.age
      this.id = data.id
    },
    cancelar () {
      this.$router.push({ path: `/user/${loginControl.loginData.user.username}` })
    },

    updateUser () {
      fetch('/api/users/' + this.id, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          password: this.password,
          username: this.username,
          email: this.email,
          name: this.name,
          contact: this.contact,
          age: this.age,
          cpf: this.cpf
        })
      })
        .then(resp => {
          if (resp.status < 300) {
            console.log(this.id)
            console.log('Mudar para algo')
          } else {
            console.log('Mudar para outra coisa')
          }
        })
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      fetch('/api/users/' + this.$route.params.username, {
        method: 'GET'
      })
        .then(resp => resp.json())
        .then(data => this.processing(data.data))
    })
  }
}
</script>
