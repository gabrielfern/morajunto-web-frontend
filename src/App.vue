<template>
  <div id="app" class="container">
    <h1>{{ msg }}</h1>
    <button @click="listUsers" class="waves-effect waves-light btn">list users</button>
    <p v-if="showMsgListUsers">open browser dev console</p>
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      showMsgListUsers: false,
      msg: 'MoraJunto app'
    }
  },
  methods: {
    listUsers () {
      fetch('/api/users')
        .then(resp => resp.json())
        .then(data => console.log(data))
      this.showMsgListUsers = true
    }
  }
}
</script>
