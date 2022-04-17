import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'

import MQ from 'vue-match-media/src'
import CommonsPlugins from '@/plugins/common-plugins'

Vue.config.productionTip = false

Vue.use(CommonsPlugins)
Vue.use(MQ)

new Vue({
  router,
  store,
  render: h => h(App),
  mq: {
    mobile: '(max-width: 768px)'
  }
}).$mount('#app')
