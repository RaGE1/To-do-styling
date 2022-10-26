import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress';

import Inbox from './components/Inbox.vue';
import Today from './components/Today.vue';
import Upcoming from './components/Upcoming.vue';
import Filterlabel from './components/FilterLabel.vue';
import PageNotFound from './components/pagenotfound.vue';


Vue.use(VueRouter);
// import Nprogress from 'nprogress'
import '../node_modules/nprogress/nprogress.css'

const routes = [
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
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  router.beforeResolve((to, from, next) => {
    // If this isn't an initial page load.
    if (to.name) {
        // Start the route progress bar.
        NProgress.start()
    }
    next()
  })
  
  router.afterEach(() => {
    // Complete the animation of the route progress bar.
    NProgress.done()
  })
  
  export default router