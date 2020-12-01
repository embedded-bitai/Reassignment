import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home.vue'
import upload from '../views/upload.vue'
import signUp from '../views/signUp.vue'
import Logout from '../views/Logout.vue'
import login from '../views/Login.vue'
import about from '../views/about.vue'
import member from '../views/member.vue'
import result from '../views/result.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/upload',
    name: 'upload',
    component: upload
  },
  {
    path: '/result',
    name: 'result',
    components: {
      default: result
    },
    props: {
      default: true
    }
  },
  {
    path: '/about',
    name: about,
    component: about
  },
  {
    path: '/member',
    name: member,
    component: member
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: signUp
  },
  {
    path: '/Logout',
    name: 'Logout',
    component: Logout
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
