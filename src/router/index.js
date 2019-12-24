import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/Home'
import Login from '@/page/Login'
import Index from '@/page/Index'
import User from '@/page/user/user'
import Iframe from '@/page/iframe/iframe'
import ArticleManage from '@/page/article/articleManage'

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
        {path: "/articleManage", component: ArticleManage},
        //：path为传递的参数
        {path:"/Iframe/:path", component:Iframe},
        {path:"/user", component:User}
      ]
    },
    {
      path:'/axiosTest',
      name:'AxiosTest',
      component:()=>import('../axios/axiosTest')
    }
  ]
})
