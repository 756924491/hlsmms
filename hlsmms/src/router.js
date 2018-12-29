import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
//引入登录模块
import Login from './views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    //添加登录路由
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    //配置路由
    {
      path:'/systemMsg',
      component:() => import(/* webpackChunkName: "about" */ './views/System')
    },
    {
      path:'/userlist',
      component:() => import(/* webpackChunkName: "about" */ './views/UsersList')
    },
    {
      path:'/useradd',
      component:() => import(/* webpackChunkName: "about" */ './views/UsersAdd')
    },
    {
      path:'/pwdedit',
      component:() => import(/* webpackChunkName: "about" */ './views/UsersPwdEdit.vue')
    }
    //{
      //path: '/about',
      //name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    //}
  ]
})
