<template>
  <div id="app">
      <router-view v-if="isRouterAlive"/>
      
       <!-- 底部导航栏 -->
      <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="home" @click.native="changeState(0)" 
        >
          <tabbaricon :normalImage='require("./assets/tab-icon/home.png")'
            :selectedImage="require('./assets/tab-icon/home1.png')" :focused="currentIndex[0].isSelect">
          </tabbaricon>
          首页
        </mt-tab-item>
        <mt-tab-item id="sort" @click.native="changeState(1)" >
          <tabbaricon :normalImage='require("./assets/tab-icon/fenlei.png")'
            :selectedImage="require('./assets/tab-icon/fenlei1.png')" :focused="currentIndex[1].isSelect">
          </tabbaricon>
          分类
        </mt-tab-item>
        <mt-tab-item id="shopping_cart" @click.native="changeState(2)">
          <tabbaricon :normalImage='require("./assets/tab-icon/gouwuche.png")'
            :selectedImage="require('./assets/tab-icon/gouwuche1.png')" :focused="currentIndex[2].isSelect">
          </tabbaricon>
          购物车
        </mt-tab-item>
        <mt-tab-item id="my" @click.native="changeState(3)">
          <tabbaricon :normalImage='require("./assets/tab-icon/wode.png")'
            :selectedImage="require('./assets/tab-icon/wode1.png')" :focused="currentIndex[3].isSelect">
          </tabbaricon>
          我的
        </mt-tab-item>
      </mt-tabbar>
  </div>
</template>
<script>
//添加provide 刷新当前页面
// 添加inject: ['reload'] 调用this.reload()刷新页面 
export default {
  name:"App",
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isLogin:"",
      isRouterAlive:true,
      active:"home",
      n:1,
       currentIndex: [{
            isSelect: true
          },
          {
            isSelect: false
          },
          {
            isSelect: false
          },
          {
            isSelect: false
          }
        ]
      }
  },
  created(){
    this.loadmore();
  },
  methods:{
    reload(){
      this.isRouterAlive=false;
      this.$nextTick(function(){
        this.isRouterAlive=true;
      })
    },
    loadmore(){
      this.changeState(0); 
      this.isLogin=localStorage.getItem("u");
      console.log(this.isLogin)
      // router.beforeEach((to,from,next)=>{
       
      // })
     
    },
    changeState(n) {
        for (let i = 0; i < this.currentIndex.length; i++) {
          if (n == i) {
            this.currentIndex[i].isSelect = true;
          } else {
            this.currentIndex[i].isSelect = false;
          }
        }
        if(n==3){
          
            if(this.isLogin){
          this.$router.push("/userOrder");
          }
          else{
            this.$router.push("/login");
          }
          
        }
        if(n==2){
         
          // this.$router.beforeEach((to,from,next)=>{
            // if(this.isLogin){
            // next()
          // }else{
          //   if(to.path==="/login"){
          //     next()
          //   }else{
          //     next("/login");
          //   }
          // }
          // })
          if(this.isLogin){
          this.$router.push("/shop");}
          else{
            this.$router.push("/login");
          }
        }
        if(n==1){
         
          this.$router.push("/classfiy");
        }
        if(n==0){
         
          this.$router.push("/home");
        }
      },
  },
  components:{
     tabbaricon: tabbaricon,
  }
}
import tabbaricon from "./common/tabbaricon";

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  .mint-tabbar>.mint-tab-item.is-selected {
    color: #e38045 !important;
    background-color: transparent;
  }
  .mint-tabbar>.mint-tab-item.is-selected {
    color: #e38045 !important;
    background-color: transparent;
  }

  .mint-tab-item-label {
    font-size: 8px !important;

  }

  .mint-tabbar {
    border-top: 1px solid #ccc !important;
    margin-left: 8px !important;


  }

  .mint-tab-item {
    margin: 0 3px !important;
  }
  .mint-tabbar.is-fixed{
    width:375px !important;
  }

</style>
