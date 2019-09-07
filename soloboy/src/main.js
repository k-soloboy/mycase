import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from "vuex"
Vue.use(Vuex)
    //  import mtk from "./common/js/mtk"
Vue.use(ElementUI)
import axios from "./axios"

//  Vue.prototype.$mtk=mtk
// var store = new Vuex.Store({
//         state: { uname: "胡鸿博" }, //存储全局共享数据
//         mutations: {}, //修改全局共享数据方法
//         getters: {
//             get_uname(state) {
//                 return state.uname;
//             }
//         }, //获取全局共享数据方法
//     })
// this.$store.commit("increment");
//App.vue {{$store.getters.get_uname}}
Vue.config.productionTip = false
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')