import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('@/components/home').default
    },
    {
      path: '/home',
      name: 'home',
      component: require('@/components/home').default
    },
    {
      path: '/one',
      name: 'one',
      component: require('@/components/one').default
    },
    {
      path: '/two',
      name: 'two',
      component: require('@/components/two').default
    },
  ]
})
