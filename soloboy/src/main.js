import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入axios
import axios from "./axios"
// 引入qs模块发送post请求

// 引入element-ui
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
//引入mint-ui
import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
//引入tabbar
import { Tabbar, TabItem } from 'mint-ui';
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
//引入刷卡
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//引入v-touch
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})
VueTouch.config.swipe = {
  threshold: 100 
}
//引入button
import { Button } from 'mint-ui';
Vue.component(Button.name, Button);
//引入表单
import { Field } from 'mint-ui';
Vue.component(Field.name, Field);
//引入多选框
import { Checklist } from 'mint-ui';
Vue.component(Checklist.name, Checklist);
Vue.use(MintUI)
Vue.use(ElementUI)
Vue.config.productionTip = false 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
