import Vue from 'vue'
import App from './App'
import router from './router'
import ajax from './services/ajax'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// para usar service ajax no console do browser
window.ajax = ajax
