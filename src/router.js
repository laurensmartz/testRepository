import Vue from 'vue'
import Router from 'vue-router'
// import Index from 

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [{
    path: '/loadmore',
    component: resolve => require(['./views/loadmore.vue'], resolve)
  },{
    path: '/home',
    component: resolve => require(['./views/home/home.vue'], resolve),
    children: [{
      path: 'tab1',
      name: 'tab1',
      component: resolve => require(['./views/home/children/tab1.vue'], resolve),
    }, {
      path: 'tab2',
      name: 'tab2',
      component: resolve => require(['./views/home/children/tab2.vue'], resolve),
    }, {
      path: 'tab3',
      name: 'tab3',
      component: resolve => require(['./views/home/children/tab3.vue'], resolve),      
    }, {
      path: 'tab4',
      name: 'tab4',
      component: resolve => require(['./views/home/children/tab4.vue'], resolve),      
    }]
  }]
})

export default router