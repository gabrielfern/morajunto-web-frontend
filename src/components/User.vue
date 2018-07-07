<template>
  <div class="row">
    <div class="row">
      <div class="input-field col s12">
        <h3>{{teste.username}}</h3>
        <a href="#" @click="verifyLogin"><button class="waves-effect waves-light btn">Login</button></a>
        <label>Nome</label>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      asdasd: ''
    }
  },
  methods: {
    verifyLogin () {
      console.log()
    }
  },
  computed: {
    teste: function () {
      return this.$route.params
    }
  }
}
</script>
