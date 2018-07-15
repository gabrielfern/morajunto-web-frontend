<template>
  <div class="row">
    <div class="row">
      <div class="input-field col s6">
        <input type="text" v-model="user.name">
        <label>Nome</label>
      </div>
      <div class="input-field col s2">
       <input type="text" v-model="user.age">
         <label>Idade</label>
       </div>
    </div>
    <div class="row">
      <div class="input-field col s6">
        <input type="text" v-model="user.email">
        <label>Email</label>
      </div>
      <div class="input-field col s4">
        <the-mask :mask="['(##)####-####']" id="contact" v-model="user.contact"/>
        <label>Telefone</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s4">
        <input type="text" v-model="user.username">
        <label>Nome de usuário</label>
      </div>
      <div class="input-field col s4">
        <input type="password" v-model="user.password">
        <label>Senha</label>
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
import ajax from '../services/ajax'
import { TheMask } from 'vue-the-mask'

export default {
  components: { TheMask },

  data () {
    return {
      user: loginControl.loginData.user
    }
  },

  methods: {
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
        ajax.deleteAcc()
          .then(() => {
            loginControl.logged = false
            this.$router.push({ path: '/' })
          })
      })
    }
  },

  mounted () {
    $('label').addClass('active')
    $('input').prop('disabled', 'true')
  }
}
</script>
