<template>
  <div >
    <h5 style="color: teal;">Criar anúncio</h5>
    <div class="row">
      <div class="input-field col s2">
        <input id="cep" type="text" maxlength="8">
        <label>CEP</label>
      </div>
      <br>
      <div class="row col s2">
        <button class="waves-effect waves-light btn" @click="getCep" > <i class="material-icons">search</i>
        </button>
      </div>
    </div>
    <div class="row">
        <div class="input-field col s4">
          <input id="rua" >
          <label name="endereco">Endereço</label>
        </div>
      <div class="input-field col s3">
          <input id="bairro" >
        <label name="endereco">Bairro:</label>
      </div>
      <div class="input-field col s2">
         <input id="estado">
        <label name="endereco">Estado</label>
      </div>
      <div class="input-field col s3">
         <input id="cidade">
        <label name="endereco">Cidade</label>
      </div>
    </div>
    <div class="row">
        <div class="input-field col s4">
          <input id="advertiser" type="text" v-model="advertiser" disabled>
          <label class="active">Anunciante</label>
        </div>
      <div class="input-field col s4">
          <input id="email" type="text" v-model="email" disabled>
          <label class="active">Email</label>
      </div>
      <div class="input-field col s4">
        <the-mask :mask="['(##)####-####']" id="phone" v-model="phone" disabled/>
        <label class="active">Telefone</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s2">
         <input id="bathroom" type="text" v-model="bathroom" maxlength="2">
        <label>Qtd Banheiros</label>
      </div>
        <div class="input-field col s2">
          <input id="price" type="text" v-model="price">
          <label>Preço</label>
        </div>
      <div class="input-field col s2">
         <input id="rooms" type="text" v-model="rooms" maxlength="2">
        <label>Qtd Quartos</label>
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
    <a href="#" @click="criarAnuncio"><button class="waves-effect waves-light btn">Criar anúncio</button></a>
  </div>
</template>

<script>
import loginControl from '../services/login_control'
import { TheMask } from 'vue-the-mask'

export default {
  components: { TheMask },
  data () {
    return {
      advertiser: loginControl.loginData.user.name,
      email: loginControl.loginData.user.email,
      rooms: '',
      price: '',
      phone: loginControl.loginData.user.contact,
      bathroom: '',
      failLogin: false,
      successLogin: false
    }
  },
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  methods: {
    getCep () {
      let cepCode = $('#cep').val()
      console.log(cepCode)
      if (cepCode.length === 8) {
        $.ajax({
          type: 'GET',
          url: 'https://viacep.com.br/ws/' + cepCode + '/json/',
          success: function (result) {
            /* eslint-disable no-undef */
            getGeo(result.logradouro, result.localidade, result.uf)
            $('#rua').val(result.logradouro)
            $('#bairro').val(result.bairro)
            $('#cidade').val(result.localidade)
            $('#estado').val(result.uf)
          }
        })
      }
    },
    criarAnuncio () {
      fetch('/api/advertisements', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          advertiser: this.advertiser,
          bathroom: parseInt(this.bathroom),
          cep: $('#cep').val(),
          email: this.email,
          lat: $('#id_latitude').val(),
          state: $('#estado').val(),
          city: $('#cidade').val(),
          street: $('#rua').val(),
          lon: $('#id_longitude').val(),
          phone: this.phone,
          price: parseInt(this.price),
          ray: $('#id_radius').val(),
          rooms: parseInt(this.rooms),
          username: loginControl.loginData.user.username
        })
      })
        .then(resp => {
          this.$router.push({ path: '/user' })
        })
    }
  },
  mounted () {
    /* eslint-disable no-undef */
    runMaps()
    evenMp()
    $('#rua').prop('disabled', true)
    $('#bairro').prop('disabled', true)
    $('#cidade').prop('disabled', true)
    $('#estado').prop('disabled', true)
    $('[name=endereco]').prop('class', 'active')
  }
}
</script>
