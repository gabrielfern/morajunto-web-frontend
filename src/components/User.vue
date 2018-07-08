<template>
  <div class="row">
    <div class="input-field col s12">
      <h6>Username:</h6>
      <p class="light"> {{username}}</p>
    </div>
    <div class="input-field col s12">
      <h6>Email:</h6>
      <p class="light"> {{email}}</p>
    </div>
    <div class="input-field col s12">
      <h6>Password:</h6>
      <p class="light"> {{password}}</p>
    </div>
    <div class="input-field col s12">
      <h6>Id:</h6>
      <p class="light"> {{id}}</p>
    </div>
    <a href="#" @click="goToCadastrarAnuncio"><button class="waves-effect waves-light btn">Confirmar</button></a>
  </div>
</template>

<script>

export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      id: ''
    }
  },
  methods: {
    processing (data) {
      console.log(data)
      this.username = data.username
      this.email = data.email
      this.password = data.password
      this.id = data.id
    },
    goToCadastrarAnuncio () {
      this.$router.push({ path: '/criarAnuncio' })
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
