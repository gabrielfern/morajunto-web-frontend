<template>
  <div class="row">
    <h5 style="color: teal">Dados do usuário</h5>
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
        <input id="editmode-username" type="text" v-model="user.username">
        <label>Nome de usuário</label>
      </div>
      <div class="input-field col s4">
        <input id="editmode-password" type="password" v-model="user.password">
        <label id="editmode-password-label">Senha</label>
      </div>
      <div class="input-field col s1" v-if="editMode">
        <button class="btn" @click="switchAdvancedEditMode"><i class="material-icons">security</i></button>
      </div>
    </div>
    <div class="row" v-if="editMode">
      <div class="right">
        <button class="btn waves-effect waves-light red lighten-2" @click="getOutEditMode">Cancelar</button>
        <button class="waves-effect waves-light btn" @click="submitEditMode">Confirmar</button>
      </div>
    </div>
    <div class="row" v-if="!editMode">
      <button class="btn right" @click="enterEditMode"><i class="material-icons">edit</i></button>
    </div>
    <div class="row" v-if="!editMode">
      <button class="btn waves-effect waves-light" @click="goToCadastrarAnuncio">Criar anúncio</button>
      <a href="/#/user/anuncios"><button class="waves-effect waves-light btn">Meus Anúncios</button></a>
      <button class="btn waves-effect waves-light red lighten-2 right" @click="deleteUser">Excluir conta</button>
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
      user: loginControl.loginData.user,
      editMode: false,
      advancedEditMode: false
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
    },

    getOutEditMode () {
      this.user = loginControl.loginData.user
      this.editMode = false
      $('label').addClass('active')
      $('input').prop('disabled', true)
    },

    enterEditMode () {
      this.user = Object.assign({}, loginControl.loginData.user)
      this.editMode = true
      $('input').prop('disabled', false)
      $('#editmode-username').prop('disabled', true)
      $('#editmode-password').prop('disabled', true)
    },

    submitEditMode () {
      if (!this.user.password) {
        // eslint-disable-next-line
        modalErroruserupdate.open()
        $('#modal-erroruserupdate-close').focus()
      } else {
        loginControl.loginData.user = this.user
        ajax.updateUser()
        this.getOutEditMode()
      }
    },

    switchAdvancedEditMode () {
      this.advancedEditMode = !this.advancedEditMode
      if (this.advancedEditMode) {
        $('#editmode-password').prop('disabled', false)
        this.user.password = ''
        $('#editmode-password').focus()
      } else {
        $('#editmode-password').prop('disabled', true)
        this.user.password = loginControl.loginData.user.password
        $('#editmode-password-label').addClass('active')
      }
    }
  },

  mounted () {
    $('label').addClass('active')
    $('input').prop('disabled', true)
  }
}
</script>
