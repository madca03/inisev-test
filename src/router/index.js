import Vue from 'vue'
import VueRouter from 'vue-router'
import RootLogin from '@/screens/root-login.vue'
import RootUsers from '@/screens/root-users'
import Routes from '@/references/route-constants'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: Routes.ROUTE_LOGIN
  },
  {
    path: '/login',
    name: Routes.ROUTE_LOGIN,
    component: RootLogin
  },
  {
    path: '/users',
    name: Routes.ROUTE_USERS,
    component: RootUsers
  },
  {
    path: '*',
    redirect: Routes.ROUTE_LOGIN
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
