<template>
    <div>
         <!-- 底部导航栏 -->
      <mt-tabbar v-model="active" fixed>
        <mt-tab-item id="home" @click.native="changeState(0)" >
          <tabbaricon :normalImage='require("../assets/tab-icon/home.png")'
            :selectedImage="require('../assets/tab-icon/home1.png')" :focused="currentIndex[0].isSelect">
          </tabbaricon>
          首页
        </mt-tab-item>
        <mt-tab-item id="sort" @click.native="changeState(1)" >
          <tabbaricon :normalImage='require("../assets/tab-icon/fenlei.png")'
            :selectedImage="require('../assets/tab-icon/fenlei1.png')" :focused="currentIndex[1].isSelect">
          </tabbaricon>
          分类
        </mt-tab-item>
        <mt-tab-item id="shopping_cart" @click.native="changeState(2)">
          <tabbaricon :normalImage='require("../assets/tab-icon/gouwuche.png")'
            :selectedImage="require('../assets/tab-icon/gouwuche1.png')" :focused="currentIndex[2].isSelect">
          </tabbaricon>
          购物车
        </mt-tab-item>
        <mt-tab-item id="my" @click.native="changeState(3)">
          <tabbaricon :normalImage='require("../assets/tab-icon/wode.png")'
            :selectedImage="require('../assets/tab-icon/wode1.png')" :focused="currentIndex[3].isSelect">
          </tabbaricon>
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style>
    
</style>
