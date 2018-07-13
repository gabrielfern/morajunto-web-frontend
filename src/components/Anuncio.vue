<template>
  <div class="row">
    <h5 style="color: teal;">Anúncio</h5>
    <div class="row">
      <div class="input-field col s2">
        <the-mask :mask="['#####-###']" id="cep"/>
        <label>CEP</label>
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

    }
  },
  mounted () {
    fetch('/api/advertisements/' + this.$route.params.id, {
      method: 'GET'
    })
      .then(resp => resp.json())
      .then(data => this.processing(data.data))
  }
}
</script>
