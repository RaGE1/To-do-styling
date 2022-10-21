import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueRouter from 'vue-router';
import Inbox from './components/inbox.vue';
import Today from './components/today.vue';
import Upcoming from './components/upcoming.vue';
import Filterlabel from './components/filterlabel.vue';
import PageNotFound from './components/pagenotfound.vue';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
export const bus = new Vue();
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes:[
    {path:"/inbox",
    component:Inbox
    },
    {path:"/today",
    component:Today
    },
    {path:"/upcoming",
    component:Upcoming
    },
    {path:"/filterlabel",
    component:Filterlabel
    },
    {
      path: '/:catchAll(.*)*',
      name: "PageNotFound",
      component: PageNotFound,
      props: true,
    },
  ]
})



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
