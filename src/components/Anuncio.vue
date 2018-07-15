<template>
  <div>
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
      <div class="input-field col s1">
          <input type="text" id="estado" class="fields">
          <label name="dados">Estado</label>
      </div>
      <div class="input-field col s3">
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
    <a href="/#/anuncios"><button class="btn lighten-2">Ok</button></a>
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
      $('#cep').val(data.cep)
      $('#rua').val(data.street)
      $('#estado').val(data.state)
      $('#city').val(data.city)
      $('#anunciante').val(data.advertiser)
      $('#email').val(data.email)
      $('#telefone').val(data.phone)
      $('#quarto').val(data.rooms)
      $('#preco').val(data.price)
      $('#banheiro').val(data.bathroom)
      $('.fields').prop('disabled', true)
      $('[name=dados]').prop('class', 'active')
      /* eslint-disable no-undef */
      setTimeout(function () {
        getGeo(data.street, data.city, data.state)
      }, 2000)
    }
  },
  mounted () {
    fetch('/api/advertisements/' + this.$route.params.id, {
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
