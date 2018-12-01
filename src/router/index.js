import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
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
    {
      path: '/plant',
      name: 'plant',
      component: require('@/components/photos/plant').default
    },
    {
      path: '/animal',
      name: 'animal',
      component: require('@/components/photos/animal').default
    },
    {
      path: '/travel',
      name: 'travel',
      component: require('@/components/photos/travel').default
    },
    {
      path: '/mechanical',
      name: 'mechanical',
      component: require('@/components/skill/mechanical').default
    },
    {
      path: '/computer',
      name: 'computer',
      component: require('@/components/skill/computer').default
    },
    {
      path: '/web',
      name: 'web',
      component: require('@/components/skill/web').default
    },
    {
      path: '/project',
      name: 'project',
      component: require('@/components/skill/project').default
    },
    {
      path: '/epub',
      name: 'epub',
      component: require('@/components/interests/epub').default
    },
    {
      path: '/movie',
      name: 'movie',
      component: require('@/components/interests/movie').default
    },
    {
      path: '/financial',
      name: 'financial',
      component: require('@/components/interests/financial').default
    },
    {
      path: '/game',
      name: 'game',
      component: require('@/components/interests/game').default
    },
  ]
})
