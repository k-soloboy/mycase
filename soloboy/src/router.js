import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import index from './views/index'
import login from './views/login'
import shop from './views/shoppingcar.vue'
import home from './views/home.vue'
import classfiy from './views/classfiy.vue'
import userOrder from './views/user_order.vue'
Vue.use(Router)
export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
    // {path:"/index",component:index},
    {path:"/",name:"index",component:index},
    {path:"/login",component:login},
    {path:"/home",component:home},
    {path:"/shop",component:shop},
    {path:"/classfiy",name:'classfiy',component:classfiy},
    {path:"/userOrder",component:userOrder},
   
    
    
  ]
})
