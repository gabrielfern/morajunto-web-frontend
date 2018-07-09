<template>
  <div class="row">
    <h5 style="color: teal;">Criar anúncio</h5>
    <div class="row">
      <div class="input-field col s2">
        <the-mask :mask="['#####-###']" id="cep" v-model="cep"/>
        <label>CEP</label>
      </div>
    </div>
    <div class="row">
        <div class="input-field col s6">
          <label name="endereco">Endereço:</label>
          <input id="rua" >
        </div>
      <div class="input-field col s6">
          <label name="endereco">Bairro:</label>
          <input id="bairro" >
        </div>
    </div>
    <div class="row">
        <div class="input-field col s6">
          <label name="endereco">Cidade:</label>
         <input id="cidade" >
        </div>
       <div class="input-field col s6">
          <label name="endereco">Estado:</label>
         <input id="estado" >
        </div>
    </div>
    <div class="row">
    <button class="waves-effect waves-light btn" @click="getCep" :disabled="!cep">Buscar</button>
      </div>
    <div class="">
      <div class="row mapheight" id="maparea" >
      <div id="map" class="map map_all_space"></div>
      <button id="map_print" type="hidden" class="no_display"></button>
    </div>
      <div>
      <div class="col">
          <input type="hidden" id="id_latitude" name="latitude">
        </div>
      <div class="col">
          <input type="hidden" id="id_longitude" name="longitude">
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
      rua: '',
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
