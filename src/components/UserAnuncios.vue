<template>
  <div class="row">
    <h5 style="color: teal">Meus Anúncios</h5>
    <table class="highlight">
      <thead>
        <tr>
          <th>Cidade</th>
          <th>Rua</th>
          <th>Anunciante</th>
          <th>Quartos</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        <tr class="anuncio" v-for="anuncio in anuncios" :key="anuncio.city" @click="enterAnuncio(anuncio.id)" v-if="username === anuncio.username">
          <td>{{ anuncio.city }}</td>
          <td>{{ anuncio.street }}</td>
          <td>{{ anuncio.advertiser }}</td>
          <td>{{ anuncio.rooms }}</td>
          <td>{{ anuncio.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
  .anuncio:hover {
    cursor: pointer
  }
</style>

<script>
import ajax from '../services/ajax'
import loginControl from '../services/login_control'

export default {
  data () {
    return {
      anuncios: null,
      username: loginControl.loginData.user.username
    }
  },

  methods: {
    enterAnuncio (id) {
      this.$router.push({ path: '/anuncio/' + id })
    }
  },

  beforeMount () {
    ajax.getAllAnuncios()
      .then(resp => {
        this.anuncios = resp.data
      })
  }
}
</script>
