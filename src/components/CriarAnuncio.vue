<template>
  <div class="row">
    <h5 style="color: teal;">Criar anúncio</h5>
    <div class="row">
      <div class="input-field col s2">
        <the-mask :mask="['#####-###']" id="cep" v-model="cep"/>
        <label>CEP</label>
      </div>
      <br>
      <div class="row col s2">
        <button class="waves-effect waves-light btn" @click="getCep" :disabled="!cep"> <i class="material-icons">search</i>
        </button>
      </div>
    </div>
    <div class="row">
        <div class="input-field col s4">
          <input id="rua" v-model="street">
          <label name="endereco">Endereço</label>
        </div>
      <div class="input-field col s3">
          <input id="bairro" v-model="neighborhood" >
        <label name="endereco">Bairro:</label>
      </div>
      <div class="input-field col s1">
         <input id="estado" v-model="state" >
        <label name="endereco">Estado</label>
      </div>
      <div class="input-field col s4">
         <input id="cidade" v-model="city" >
        <label name="endereco">Cidade</label>
      </div>
    </div>
    <div class="row">
        <div class="input-field col s4">
          <input id="advertiser" type="text" v-model="advertiser">
          <label>Anunciante</label>
        </div>
      <div class="input-field col s4">
          <input id="email" type="text" v-model="email">
          <label>Email</label>
      </div>
      <div class="input-field col s4">
         <input id="phone" type="text" v-model="phone">
        <label>Telefone</label>
      </div>
    </div>
    <div class="row">
      <div class="input-field col s2">
         <input id="bathroom" type="text" v-model="bathroom">
        <label>Banheiro</label>
      </div>
        <div class="input-field col s2">
          <input id="price" type="text" v-model="price">
          <label>Preço</label>
        </div>
      <div class="input-field col s2">
         <input id="rooms" type="text" v-model="rooms">
        <label>Quartos</label>
      </div>
    </div>
    <div>
      <div class="row mapheight" id="maparea" >
        <div id="map" class="map map_all_space"></div>
        <button id="map_print" type="hidden" class="no_display"></button>
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
  </div>
</template>
<script>
import {TheMask} from 'vue-the-mask'
export default {
  components: {TheMask},
  data () {
    return {
      cep: '',
      street: '',
      advertiser: '',
      email: '',
      rooms: '',
      price: '',
      city: '',
      state: '',
      neighborhood: '',
      phone: '',
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
      if (cepCode.length === 9) {
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
      fetch('/api/advertisement/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          advertiser: this.advertiser,
          bathroom: this.advertiser,
          cep: this.cep,
          email: this.email,
          lat: $('#id_latitude').val(),
          lon: $('#id_longitude').val(),
          phone: this.phone,
          price: this.price,
          ray: $('#id_radius').val(),
          rooms: this.rooms
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
