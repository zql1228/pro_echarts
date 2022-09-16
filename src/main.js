import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import appConfig from './config/base';

Vue.config.productionTip = false
Vue.prototype.appConfig=appConfig;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
