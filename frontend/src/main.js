import Vue from 'vue'
import App from './App.vue'




import './assets/tailwind.css'
import router from './router';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

export const bus = new Vue();

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
