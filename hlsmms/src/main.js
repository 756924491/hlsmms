import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

//引入公共样式
import './assets/styles/public.css'

//引入 axios 模块
import axios from 'axios'
//把 axios 挂载在 vue 原型上，所有的 vue 实例中都可以使用
Vue.prototype.axios = axios;

//引入 qs 模块，用于处理后台传过来的参数
import qs from 'qs'
//把 qs 挂载在 vue 原型上，所有的 vue 实例中都可以使用
Vue.prototype.qs = qs;

//构造全局守卫
router.beforeEach((to,from,next) => {
  //让ajax携带cookie证书
  axios.defaults.withCredentials=true;
  //发送 axios 获取后端的 cookie，cookie存在就放行 next（）  不存在就跳回登录页面
  axios.get('http://127.0.0.1:9090/users/getcookie')
  .then(result => {
    //根据后端返回的结果做业务逻辑
    if(result.data.isOk || to.path == '/login'){
      next();// 登录成功
    }else{
      next('/login')
    }
  }).catch(err => {
    console.error(err.message)
  })
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
