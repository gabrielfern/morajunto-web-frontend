<template>
  <div>
    <h5 style="color: teal;">Anúncio</h5>
    <div class="row">
      <div class="input-field col s3">
        <the-mask :mask="['#####-###']" id="cep" v-model="cep" disabled/>
        <label class="active">CEP</label>
      </div>
      <div class="input-field col s4">
          <input type="text" id="rua" class="fields">
          <label name="dados">Endereço</label>
      </div>
      <div class="input-field col s2">
          <input type="text" id="estado" class="fields">
          <label name="dados">Estado</label>
      </div>
      <div class="input-field col s3  ">
          <input type="text" id="city" class="fields">
          <label name="dados">Cidade</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s3">
        <input type="text" class="fields" id="anunciante" >
        <label  name="dados">Anunciante</label>
      </div>
      <div class="input-field col s4">
          <input type="text" id="email" class="fields">
          <label name="dados">Email</label>
      </div>
      <div class="input-field col s4">
          <the-mask :mask="['(##)####-####']" id="telefone" class="fields"
          v-model="contact"/>
          <label name="dados">Telefone</label>
      </div>
    </div>
     <div class="row">
      <div class="input-field col s3">
        <input type="text" class="fields" id="banheiro" >
        <label  name="dados">Banheiro</label>
      </div>
      <div class="input-field col s4">
          <input type="text" id="preco" class="fields">
          <label name="dados">Preço</label>
      </div>
      <div class="input-field col s4">
          <input type="text" id="quarto" class="fields">
          <label name="dados">Quartos</label>
      </div>
    </div>
    <div>
      <div class="row mapheight" id="maparea" >
        <div id="map" class="map map_all_space"></div>
      </div>
      <div>
        <div class="col">
            <input type="hidden" id="id_latitude" name="latitude">
        </div>
        <div class="col">
          <input type="hidden" id="id_longitude" name="longitude" >
        </div>
        <div class="col">
          <input type="hidden" id="id_radius" name="radius">
        </div>
      </div>
    </div>
    <div class="row">
      <button class="btn waves-effect waves-light red lighten-2 right" @click="deleteAnuncio" v-if="owner">Excluir anúncio</button>
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
      id: '',
      username: '',
      contact: '',
      cep: '',
      owner: false
    }
  },

  methods: {
    processing (data) {
      this.cep = data.cep
      $('#rua').val(data.street)
      $('#estado').val(data.state)
      $('#city').val(data.city)
      $('#anunciante').val(data.advertiser)
      $('#email').val(data.email)
      this.contact = data.phone
      $('#quarto').val(data.rooms)
      $('#preco').val(data.price)
      $('#banheiro').val(data.bathroom)
      $('.fields').prop('disabled', true)
      $('[name=dados]').prop('class', 'active')

      /* eslint-disable no-undef */
      runMaps()
      evenMp()
      getGeo(data.street, data.city, data.state)
    },

    deleteAnuncio () {
      // eslint-disable-next-line
      modalDeleteanuncio.open()
      $('#modal-deleteanuncio-close').focus()
      addEventListener('deleteanuncio', () => {
        ajax.deleteAnuncioById(this.$route.params.id)
          .then(() => {
            this.$router.push({ path: '/anuncios' })
          })
      })
    }
  },

  mounted () {
    fetch('/api/advertisements/' + this.$route.params.id, {
      method: 'GET'
    })
      .then(resp => resp.json())
      .then(data => {
        if (loginControl.logged) {
          if (loginControl.loginData.user.username === data.data.username) {
            this.owner = true
          }
        }
        this.processing(data.data)
      })
    /* eslint-disable no-undef */
  }
}
</script>
