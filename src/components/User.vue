<template>
  <div class="row">
    <div class="row">
      <div class="input-field col s6">
        <input type="text" class="fields" id="name" >
        <label  name="dados">Nome de Usuario</label>
      </div>
      <div class="input-field col s6">
        <input type="text" class="fields" id="username" >
          <label name="dados" >Username</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s3">
        <input type="text" class="fields" id="contact" >
        <label name="dados">Telefone</label>
      </div>
       <div class="input-field col s2">
        <input type="text" class="fields" id="age">
          <label name="dados">Idade</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s6">
        <input type="text" class="fields" id="email" >
        <label name="dados">Email</label>
      </div>
    </div>
    <div class="col s9"><a href="#" @click="goToCadastrarAnuncio"><button class="waves-effect waves-light btn">Criar anúncio</button></a>
    <a href="#" @click="goToUpdateUser"><button class="btn waves-effect waves-light blue lighten-2">Editar senha</button></a>
      <a href="#" @click="goToAnuncios"><button class="btn waves-effect waves-light blue lighten-2">Anúncios</button></a>
      </div>
    <div class="s12 m4 l2"><a href="#" @click="deleteUser"><button class="btn waves-effect waves-light red lighten-2 right">Excluir conta</button></a>
      </div>
  </div>
</template>

<script>
import loginControl from '../services/login_control'

export default {
  data () {
    return {
      id: '',
      username: ''
    }
  },
  methods: {
    processing (data) {
      this.username = data.username
      this.id = data.id
      var contact = data.contact
      $('#name').val(data.name)
      $('#username').val(this.username)
      contact = '(' + contact.toString().slice(0, 2) + ')' + contact.toString().slice(2, 6) + '-' + contact.toString().slice(5, 11)
      $('#contact').val(contact)
      $('#age').val(data.age)
      $('#email').val(data.email)
      $('.fields').prop('disabled', true)
      $('[name=dados]').prop('class', 'active')
    },
    goToCadastrarAnuncio () {
      this.$router.push({ path: '/criarAnuncio' })
    },
    goToUpdateUser () {
      this.$router.push({ path: '/user/update/' + this.username })
    },
    goToAnuncios () {
      this.$router.push({ path: '/anuncios' })
    },
    deleteUser () {
      // eslint-disable-next-line
      modalDeleteacc.open()
      $('#modal-deleteacc-close').focus()
      addEventListener('deleteacc', () => {
        fetch('/api/users/' + this.id, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(() => {
            loginControl.logged = false
            this.$router.push({ path: '/' })
          })
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
