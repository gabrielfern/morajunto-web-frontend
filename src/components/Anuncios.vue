<template>
  <div class="row">
    <div class="row">
    <table id="example" class="mdl-data-table" style="width:100%">
        <thead>
            <tr>
                <th>Cidade</th>
                <th>Estado</th>
                <th>Quartos</th>
                <th>Banheiros</th>
            </tr>
        </thead>
        <tbody>
        <tr v-for="item in object" :key="item.id" >
          <td>
            <a v-bind:href="'#/anuncio/' + item.id" style="display: block; width:100%">{{item.city}}</a>
          </td>
          <td>
             <a v-bind:href="'#/anuncio/' + item.id" style="display: block; width:100%">{{item.state  }}</a>
          </td>
          <td>
             <a v-bind:href="'#/anuncio/' + item.id" style="display: block; width:100%">{{item.rooms  }}</a>
          </td>
          <td>
             <a v-bind:href="'#/anuncio/' + item.id" style="display: block; width:100%">{{item.bathroom  }}</a>
          </td>
        </tr>
        </tbody>
    </table>
    <br>
    <a href="/#/"><button class="btn red lighten-2">Cancelar</button></a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      email: '',
      password: '',
      id: '',
      object: []
    }
  },
  methods: {
    processing (data) {
      this.object = data
      console.log(data)
    }
  },
  mounted () {
    fetch('/api/advertisements', {
      method: 'GET'
    })
      .then(resp => resp.json())
      .then(data => this.processing(data.data))
  }
}
</script>
