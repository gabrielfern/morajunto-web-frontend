<template>
  <div class="row">
    <div class="row">
      <div class="input-field col s12">
        <input id="teste">
        <label>CEP</label>
      </div>
    </div>
    <div class="row">
        <div class="input-field col s12">
          <h6>Endereço:</h6>
          <input id="rua" >
        </div>
    </div>
    <div class="row">
        <div class="input-field col s12">
          <h6>Bairro:</h6>
          <input id="bairro" >
        </div>
    </div>
    <div class="row">
        <div class="input-field col s12">
          <h6>Cidade:</h6>
         <input id="cidade" >
        </div>
    </div>
    <a href="#" @click="getCep"><button class="waves-effect waves-light btn">Buscar</button></a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
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
      let cepCode = $('#teste').val()
      $.ajax({
        type: 'GET',
        url: 'https://viacep.com.br/ws/' + cepCode + '/json/',
        success: function (result) {
          console.log(result)
          $('#rua').val(result.logradouro)
          $('#bairro').val(result.bairro)
          $('#cidade').val(result.localidade)
        }
      })
    }
  },
  mounted () {
    $('#rua').inputmask('99999-999')
    $('#rua').prop('disabled', true)
    $('#bairro').prop('disabled', true)
    $('#cidade').prop('disabled', true)
  }
}
</script>
