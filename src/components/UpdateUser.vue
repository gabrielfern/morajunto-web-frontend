<template>
  <div class="row">
    <div class="input-field col s12">
    <h5 style="color: teal;">Atualizar senha</h5>
      </div>
    <div class="input-field col s12">
        <input type="password" v-model="password">
        <label>Digite a nova senha:</label>
        <a href="#" @click="updateUser"><button class="waves-effect waves-light btn">Atualizar</button></a>
      </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    updateUser () {
      fetch('/api/users/' + this.username + '/' + this.password, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(resp => {
          if (resp.status < 300) {
            console.log('Mudar para algo')
          } else {
            console.log('Mudar para outra coisa')
          }
        })
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.username = this.$route.params.username
    })
  }
}
</script>
