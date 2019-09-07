<template>
    <div class="container">
        <h2> 功能模块体验</h2>
    <span>e-cology提供协同办公所需的丰富功能组件</span>
   <div class="center">.<div class="left">
       <div @click=" show1"> <p>执行力平台</p> <span>以目标为核心的工作执行体系</span></div>
       <div> <p>知识<br>管理</p></div>
       <div> <p>流程<br>管理</p></div>
       <div><p>门户管理模块</p><span>建立统一聚合与推送的办公平台</span></div>
       <div><p>人力资源木块 </p><span>权重分明与协同运作的人才环境</span></div>
       <div> <p>资产<br><br>管理<br><br>模块</p>  </div>
       <div><p>客户管理模块 </p> <span>把握和赢得客户的管理平台</span></div>
   </div>
   <div class="right">
       <div> <p>项目<br>管理</p></div>
       <div> <p>日程管理模块</p> <span>提供更高效的个人时间管理</span></div>
       <div><p>事项协议模块</p> <span>简体虚拟团队跨阻止协作办公</span></div>
       <div><p>会议<br>管理</p></div>
       <div><p>工作<br>微博</p></div>
       <div><p>通讯管理模块</p><span>提供各种及时的沟通渠道</span></div>
       <div><p>系统知识树</p><span>提供更全面的系统功能介绍</span></div>
       <div><p>微云<br>商店</p></div>
   </div>
   <div class="bb">
       <div><p>系统<br><br>集成<br><br>模块</p></div>
       <div><p>经营<br><br>报表<br><br>管理</p></div>
   </div>
   <transition name="fade">
   <div v-show="show2==true"  class="mtk2">
     <a href="javascript:;" style="margin-left:950px;" @click="show1" >关闭</a>
      <div class="dhl"><el-tabs v-model="textName1" @tab-click="handleClick1" style="width:1000px;">
            <el-tab-pane label="执行力平台" name="first">
                <el-tabs :tab-position="tabPosition" style="height: 480px;" type="card">
                <el-tab-pane label="目标展开"><img src="../assets/01.png" alt=""></el-tab-pane>
                <el-tab-pane label="任务跟踪填写"><img src="../assets/02.png" alt=""></el-tab-pane>
                <el-tab-pane label="下属的任务查询"><img src="../assets/03.png" alt=""></el-tab-pane>
                <el-tab-pane label="计划的提交查询"><img src="../assets/04.png" alt=""></el-tab-pane>
                <el-tab-pane label="报告的提交查询"><img src="../assets/05.png" alt=""></el-tab-pane>
                <el-tab-pane label="绩效考核的打分与查询"><img src="../assets/06.png" alt=""></el-tab-pane>
             </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="门户管理" name="second">
                 <el-tabs :tab-position="tabPosition" style="height: 480px;" type="card">
                <el-tab-pane label="个人工作门户"><img src="../assets/02_01.png" alt=""></el-tab-pane>
                <el-tab-pane label="公司门户"><img src="../assets/02_02.png" alt=""></el-tab-pane>
                <el-tab-pane label="营销门户"><img src="../assets/02_03.png" alt=""></el-tab-pane>
                <el-tab-pane label="产品门户"><img src="../assets/02_04.png" alt=""></el-tab-pane>
                <el-tab-pane label="项目门户"><img src="../assets/02_05.png" alt=""></el-tab-pane>
                <el-tab-pane label="子公司门户"><img src="../assets/02_06.png" alt=""></el-tab-pane>
                <el-tab-pane label="企业文化门户"><img src="../assets/02_07.png" alt=""></el-tab-pane>
                <el-tab-pane label="员工生活门户"><img src="../assets/02_08.png" alt=""></el-tab-pane>
                <el-tab-pane label="报表门户"><img src="../assets/02_09.png" alt=""></el-tab-pane>
             </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="流程管理" name="third">
                 <el-tabs :tab-position="tabPosition" style="height: 480px;" type="card">
                <el-tab-pane label="流程的新建"><img src="../assets/03_01.png" alt=""></el-tab-pane>
                <el-tab-pane label="流程填写并提交"><img src="../assets/03_02.png" alt=""></el-tab-pane>
                <el-tab-pane label="流程的跟踪"><img src="../assets/03_03.png" alt=""></el-tab-pane>
                <el-tab-pane label="流程的审批"><img src="../assets/03_04.png" alt=""></el-tab-pane>
                <el-tab-pane label="流程的归档"><img src="../assets/03_05.png" alt=""></el-tab-pane>
                <el-tab-pane label="流程的查询"><img src="../assets/03_06.png" alt=""></el-tab-pane>
             </el-tabs>
            </el-tab-pane>
            <el-tab-pane label="知识管理" name="fourth"> 
                <el-tabs :tab-position="tabPosition" style="height: 480px;" type="card">
                <el-tab-pane label="文档上传"><img src="../assets/04_01.png" alt=""></el-tab-pane>
                <el-tab-pane label="文档预览"><img src="../assets/04_02.png" alt=""></el-tab-pane>
                <el-tab-pane label="文档共享"><img src="../assets/04_03.png" alt=""></el-tab-pane>
                <el-tab-pane label="文档推送"><img src="../assets/04_04.png" alt=""></el-tab-pane>
                <el-tab-pane label="文档查询"><img src="../assets/04_05.png" alt=""></el-tab-pane>
                <el-tab-pane label="文档修改"><img src="../assets/04_06.png" alt=""></el-tab-pane>
             </el-tabs></el-tab-pane>
            </el-tabs>
        </div> 
   </div>
   </transition>
  </div>

  <el-button type="primary" style="background:#fff;color:#0c71c0;" class="btn1"  >马上体验</el-button>

    </div>
</template>
<script>
export default {
    props:{
        activeName1:{default:""},
        tabPosition:{default:""},
        show:{type:Function},
       show2:{default:""},
        handleClick1:{default:""},
        show1:{type:Function},
    },
    data(){
        return {
             textName1:this.activeName1,
            // activeName: 'second',
            //  tabPosition: 'left',
            //  show:false,
            //  handleClick:''
        }
    },
    methods: {
    
    }
}
</script>
<style scoped>
/* 头 */

.container{
    height:700px;
    width:100%;
   margin-left:0px;
}

.dhl{
    display:inline-block;
    position: absolute;
    left:0px;
    
    
}
div>a{
    position: relative;
    z-index: 10;
}
.mtk2{
    background-color: #fff;
    width: 1000px;
    height: 550px;
    display: inline-block;
    position: relative;
    top:-420px;
    
  
    transition: all 1ss;
    z-index: 12;
}


.btn1{
width:200px;margin-top:50px !important;
transition: all 0.3s !important;
position: relative;

}
div>.btn1:hover{
    background-color: #0c71c0 !important;
    color:#fff !important;
}
.center{
    text-align: center;
    height: 370px;
    position: relative;
}
  
.bb{
 display: inline-block;
 width: 100px;
 margin-top: 20px;
}
.left,.right{
    width: 350px; height: 320px;
    
    margin-top: 20px;
    display: inline-block;
    
}
.left>div,.right>div,.bb>div{
    background-color: #4e8fe0;
    font-size: 13px;
    margin-left: 10px;
    margin-bottom: 10px;
    float: left;
    
}
.left>div:hover,.right>div:hover,.bb>div:hover{
    background-color:  #5cb85c;
}
.left>div>p,.right>div>p,.bb>div>p{
    color:#fff;
    font-size:15px;
    margin: 13px 0px;
   
}
.left>div:nth-child(6)>p,.bb>div>p{
    font-size: 18px;
}
.left>div>span,.right>div>span{
    color:#9FC2EF;
    font-size:13px;
    
}
.left>div:nth-child(1),.left>div:nth-child(4),.left>div:nth-child(5),.left>div:nth-child(7),.right>div:nth-child(2),.right>div:nth-child(3),.right>div:nth-child(6),.right>div:nth-child(7){
    width: 204px;
    height: 70px;
}
.left>div:nth-child(2),.left>div:nth-child(3),.right>div:nth-child(1),.right>div:nth-child(4),.right>div:nth-child(5),.right>div:nth-child(8){
    width: 90px;
    height: 70px;
}
.left>div:nth-child(6),.bb>div{
    width:90px;
    height: 150px;;
}
.left>div:nth-child(7){
    margin-top: -80px;
}

</style>
