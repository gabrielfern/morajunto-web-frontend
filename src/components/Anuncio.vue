<template>
  <div class="row">
    <h5 style="color: teal;">Anúncio</h5>
    <div class="row">
      <div class="input-field col s3">
        <input type="text" class="fields" id="cep" >
        <label  name="dados">CEP</label>
      </div>
      <div class="input-field col s4">
          <input type="text" id="rua" class="fields">
          <label name="dados">Endereço</label>
      </div>
      <div class="input-field col s4">
          <input type="text" id="estado" class="fields">
          <label name="dados">Estado</label>
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
          <input type="text" id="telefone" class="fields">
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
      id: '',
      username: ''
    }
  },
  methods: {
    processing (data) {
      $('#cep').val('ceo')
      $('#rua').val('rua')
      $('#estado').val('estado')
      $('#anunciante').val('anunciante')
      $('#email').val('email')
      $('#telefone').val('telefone')
      $('#quarto').val('quarto')
      $('#preco').val('preco')
      $('#banheiro').val('banheiro')
      // getGeo(result.logradouro, result.localidade, result.uf)
      $('.fields').prop('disabled', true)
      $('[name=dados]').prop('class', 'active')
    }
  },
  mounted () {
    fetch('/api/advertisements/', {
      method: 'GET'
    })
      .then(resp => resp.json())
      .then(data => this.processing(data.data))
    /* eslint-disable no-undef */
    runMaps()
    evenMp()
  }
}
</script>
