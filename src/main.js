// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './public/config/router'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import axios from './public/config/axios/axios'
import 'fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'

Vue.config.productionTip = false
Vue.use(MuseUI);
Vue.prototype.$axios = axios
/* eslint-disable no-new */
Vue.use(VueFullPage);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
