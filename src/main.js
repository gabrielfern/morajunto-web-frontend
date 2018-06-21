import Vue from 'vue'
import App from './App'
import router from './router'

import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'

/* eslint-disable no-new */
let app = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
console.log(app)
