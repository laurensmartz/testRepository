import Vue from 'vue'
import router from './router.js'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/css/base.css'

Vue.use(Mint)

new Vue({
  el: '#app',
  router,
})