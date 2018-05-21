<template>
  <div id="app" class="container">
    <h1>{{ msg }}</h1>
    <hr>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'MoraJunto app'
    }
  }
}
</script>
