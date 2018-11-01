// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './public/config/router'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import axios from './public/config/axios/axios'
// import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
// import VueFullPage from 'vue-fullpage.js'

Vue.config.productionTip = false
Vue.use(MuseUI);
Vue.prototype.$axios = axios
// Vue.use(VueFullPage);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
