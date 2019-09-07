<template>
    <div class="center">
        <img src="../../assets/fw1.jpg" alt="" >
        <div class="header">
          <el-tabs v-model="textName" type="card" @tab-click="handleClick">       
    <el-tab-pane label="全局" name="one">

    </el-tab-pane>
    <el-tab-pane label="场景" name="two">
        <jump-scene
        :activeName2="activeName2"
        :tabPosition2=" tabPosition2"
        :mtk="mtk"
        :fun="fun"
        ></jump-scene>
    </el-tab-pane>
    <el-tab-pane label="功能" name="three"> 
        <jump-role
        :activeName1="activeName1"
        :tabPosition1=" tabPosition1"
        :show2="show2"
        :handleClick1="handleClick1"
        :show1="show1"
        ></jump-role>
    </el-tab-pane>
    <el-tab-pane label="角色" name="four">角色</el-tab-pane>
    <el-tab-pane label="智能化" name="five">智能化</el-tab-pane>
    <el-tab-pane label="平台化" name="six">平台化</el-tab-pane>
    <el-tab-pane label="泛微" name="seven">
        <jump-fanwei
        :sfq="sfq"
        :dj1="dj1"
        :dj2="dj2"
        :dj3="dj3"
        >
        </jump-fanwei>
    </el-tab-pane>
    <el-tab-pane label="移动" name="eight">移动</el-tab-pane>
    <el-tab-pane label="角色" name="nine">角色</el-tab-pane>
    <el-tab-pane label="云端" name="ten">云端</el-tab-pane>
    <el-tab-pane label="集成" name="eleven">集成</el-tab-pane>
  </el-tabs>
  </div>
  <div class="right">
      <el-button @click="show" v-show="loginMsg"> {{userMesg}}</el-button>
        <div v-show="loginoutMsg">{{userMesg}}  
      <el-button @click="control" v-show="Bclass"  type="primary" size="small">注销</el-button >
     </div>
  </div>
</div>
</template>
<script>

export default {
    props:{
        activeName:{default:""},
        handleClick:{type:Function},
        userMesg:{default:""},
        control:{type:Function},
        Bclass:{default:""},
        show:{type:Function},
        loginMsg:{default:""},
        loginoutMsg:{default:""},

    },
    data(){
        return{
            textName:this.activeName,
            //role
             activeName1: 'second',
             tabPosition1: 'left',
             show2:false,
             handleClick1:'',
             //scene
               activeName2: 'first',
             tabPosition2:'left',
             mtk:false,
           
        }
    },
    methods:{
           show1(){
           this.show2=this.show2==true?false:true;
           console.log(this.show2);
       },
        fun(){
            
           this.mtk=this.mtk==true? false:true;
        },
        //泛微dom操作
         sfq(){
           var one=document.getElementById("one");
          if(one.clientHeight==0){
              one.style.cssText="height:1200px;";
          }
          else{
              one.style.cssText="height:0px;"
          }
           
        },
        dj2(){
            var a1=document.getElementById("a1");
            var a2=document.getElementById("a2");
            var a3=document.getElementById("a3");
            var img1=document.getElementById("img1");
            var img2=document.getElementById("img2");
            var img3=document.getElementById("img3");
            a2.style.cssText="color:#4472c9";
            a1.style.cssText="color:#000";
            a3.style.cssText="color:#000";
            img1.style.cssText="display:none;";
            img2.style.cssText="display:block;";
            img3.style.cssText="display:none";
        },
        dj1(){
             var a1=document.getElementById("a1");
            var a2=document.getElementById("a2");
            var a3=document.getElementById("a3");
            var img1=document.getElementById("img1");
            var img2=document.getElementById("img2");
            var img3=document.getElementById("img3");
              a1.style.cssText="color:#4472c9";
            a2.style.cssText="color:#000";
            a3.style.cssText="color:#000";
            img2.style.cssText="display:none";
            img1.style.cssText="display:block";
            img3.style.cssText="display:none";
        },
        dj3(){
             var a1=document.getElementById("a1");
            var a2=document.getElementById("a2");
            var a3=document.getElementById("a3");
            var img1=document.getElementById("img1");
            var img2=document.getElementById("img2");
            var img3=document.getElementById("img3");
            a3.style.cssText="color:#4472c9";
            a2.style.cssText="color:#000";
            a1.style.cssText="color:#000";
            img2.style.cssText="display:none";
            img3.style.cssText="display:block;";
            img1.style.cssText="display:none";
        }
    
    },
    components:{
        "jumpRole":jumpRole,
        "jumpScene":jumpScene,
        "jumpFanwei":jumpFanwei,
    }
}
import jumpFanwei from "../fanwei.vue"
import jumpRole from "../role.vue"
import jumpScene from "../scene.vue"
</script>
<style scoped>
.center{
    display:flex;
    position:relative;
    
    z-index:999;
}
.header{
    position:absolute;
    top:0px;
    left:100px;
}
.center img{
 position:absolute;
 top:0px;
 left:-100px;
 width:200px;
 height:60px;
}
.right{
   position:absolute;
   right:380px;
   top:0;     
}
.el-tabs--card>.el-tabs__header .el-tabs__nav{
 margin-left:200px;
}
.el-header[data-v-826af616]{
    margin-left:200px !important;
}


/* role功能样式 */

</style>
