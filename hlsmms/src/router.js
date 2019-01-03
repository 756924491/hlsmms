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

    //分类管理板块
    {
      path:'/sortlist',
      name:'sortlist',
      component:() => import(/* webpackChunkName: "SortList" */ './views/SortList.vue')
    },
    {
      path:'/sortadd',
      name:'sortadd',
      component:() => import(/* webpackChunkName: "SortAdd" */ './views/SortAdd.vue')
    },
    
    //商品管理
    {
      path:'/goodslist',
      name:'goodslist',
      component:() => import(/* webpackChunkName: "GoodsList" */ './views/GoodsList.vue')
    },
    {
      path:'/goodsadd',
      name:'goodsadd',
      component:() => import(/* webpackChunkName: "GoodsAdd" */ './views/GoodsAdd.vue')
    },

    //账号管理板块
    {
      path:'/userlist',
      name: 'userlist',
      component:() => import(/* webpackChunkName: "UsersList" */ './views/UsersList')
    },
    {
      path:'/useradd',
      name: 'useradd',
      component:() => import(/* webpackChunkName: "UsersAdd" */ './views/UsersAdd')
    },
    {
      path:'/pwdedit',
      name: 'pwdedit',
      component:() => import(/* webpackChunkName: "UsersPwdEdit" */ './views/UsersPwdEdit')
    },

    //系统管理板块
    {
      path:'/systemmsg',
      name:'systemmsg',
      component:() => import(/* webpackChunkName: "System" */ './views/SystemMsg')
    },

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
