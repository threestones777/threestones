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
      path: '*',
      name: '404',
      component: require('@/components/home').default
    },
    {
      path: '/home',
      name: 'home',
      component: require('@/components/home').default
    },
    {
      path: '/photos',
      name: 'photos',
      component: require('@/components/photos').default,
      redirect:"/plant",
      children:[
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
      ]
    },
    {
      path: '/skill',
      name: 'skill',
      component: require('@/components/skill').default,
      redirect:"/mechanical",
      children:[
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
      ]
    },
    {
      path: '/interests',
      name: 'interests',
      component: require('@/components/interests').default,
      redirect:"/epub",
      children:[
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
    },
  ]
})
