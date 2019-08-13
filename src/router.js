import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import User from './components/User.vue'
import UserProps from './components/UserProps.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    { 
      path: '/user/:id', 
      component: User 
    },
    { 
      path: '/user/prop/:id', 
      component: UserProps,
      props: true 
    },
    { 
      path: '/user/props/:id', 
      component: UserProps,
      props: true 
    }
  ]
})
