import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VWave from 'v-wave'
import "./plugins/styles.css"

Vue.config.productionTip = false
Vue.use(VWave)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
