import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Login from '@/page/Login'
import Index from '@/page/Index'
import User from '@/page/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      //这里注意
      children: [
        {path: "", component: Index},
        {path:"/user", component:User}
      ]
    }
  ]
})
