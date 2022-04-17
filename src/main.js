import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'

import CommonsPlugins from '@/plugins/common-plugins'

Vue.config.productionTip = false

Vue.use(CommonsPlugins)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
