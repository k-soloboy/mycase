import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import index from "./components/index/index"
import head from "./components/index/head"
import scroll from "./components/index/scroll"
import form from "./components/submit/list_submit"
import add from "./components/submit/add_submit"
import dues from "./components/submit/dues_submit"
import item from "./components/submit/item_submit"
import scene from "./components/scene"
import function1 from "./components/function1"
import role from "./components/role"
import intelligentized from "./components/intelligentized"
import pth from "./components/pth"
import dzqz from "./components/dzqz"
import move from "./components/move"
import yunduan from "./components/yunduan"
import jichen from "./components/jichen"
import fanwei from "./components/fanwei"
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
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        // },
        { path: "/index", component: index },
        { path: "/head", component: head },
        { path: "/scroll", component: scroll },
        { path: "/form", component: form },
        { path: "/add", component: add },
        { path: "/dues", component: dues },
        { path: "/item", component: item },
        { path: "/scene", component: scene },
        { path: "/function1", component: function1 },
        { path: "/role", component: role },
        { path: "/itg", component: intelligentized },
        { path: "/pth", component: pth },
        { path: "/dzqz", component: dzqz },
        { path: "/yunduan", component: yunduan },
        { path: "/jichen", component: jichen },
        { path: "/fanwei", component: fanwei },
        { path: "/move", component: move },
    ]
})