import Vue from 'vue'
import App from './App.vue'
import ExpandTextarea from '../packages/index'

Vue.config.productionTip = false

Vue.use(ExpandTextarea)

new Vue({
  render: h => h(App),
}).$mount('#app')
