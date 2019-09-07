<template>
    <div class="container">  
        <h2> 角色、部门应用体验</h2>
    <span> 体验E9为不同角色和部门成员所能带来的协同办公价值</span>
    <div class="sfq">
        <div @click="sfq"> <strong>领导的一天</strong> </div><div style="background-color:#afb118"> <strong> 员工的一天</strong></div> 
    </div>
    <div id="one">
        <h1 style="color:#325eae;">领导的一天</h1>
       <img src="../assets/dpic.png" alt="">
       <br>
          <el-button type="primary" style="width:200px;margin-top:30px;background:#fff;color:#0c71c0;transition: all 0.3s;" class="btn1">马上体验</el-button> <br>
       <h1 style="color:#325eae;">核心指标数据一目了然</h1> 
          <div>
            <div class="dj">  <a href="javascript:;" id="a1" @click="dj1"><strong>管理驾驶舱，提供给决策提供依据 </strong><br> 通过聚合业务、财务、管理数据；<br> 提供给高层领导清晰准确的核心数据展现。</a> <br><br>
              <a href="javascript:;" @click="dj2" id="a2"> <strong> 通过数据累积，形成预测信息</strong> <br>
通过从业务、财务、管理系统中抽取累积数据，<br>
提供业务、财务等方面的预测功能</a><br><br>
<a href="javascript:;" id="a3" @click="dj3">多方位数据整合提供风险预警信息 <br>
通过整合项目相关的费用支出、合同支付以及客户 <br> 风险等，及时预警项目的相关风险</a></div>
<div class="img"><img src="../assets/img1.png" alt="" id="img1"><img src="../assets/img2.png" alt="" id="img2" style="display:none;"><img src="../assets/img3.png" alt="" id="img3"  style="display:none;"></div>
          </div>
    </div>
    
    <div class="sfqx">
         <div style="background-color:#5b88da"><strong>市场部在E9</strong></div><div  style="background-color:#95944f"><strong>销售部在E9</strong></div><div  style="background-color:#51c45c"><strong>行政部在E9</strong></div>
    </div>
     <div class="sfqx">
         <div style="background-color:#51c45c"><strong>技术部在E9</strong></div><div  style="background-color:#595c62"><strong>财务部在E9</strong></div><div  style="background-color:#5b88da"><strong>人事部在E9</strong></div>
    </div>
     <div class="sfqx">
         <div style="background-color:#5b88da"><strong>项目部在E9</strong></div><div  style="background-color:#51c45c"><strong>生产部在E9</strong></div><div  style="background-color:#95944f"><strong>客服部在E9</strong></div>
    </div>
     <el-button type="primary" style="width:200px;margin-top:30px;background:#fff;color:#0c71c0;transition: all 0.3s;" class="btn1">马上体验</el-button> <br>
    
    </div>
</template>

<script>
export default {
    data(){
        return {
            
        }
        
    },
    props:{
        sfq:{type:Function},
        dj1:{type:Function},
        dj2:{type:Function},
         dj3:{type:Function},
    },
    methods:{},

       
}
</script>
<style scoped>
.container{
    height:700px;
    width:100%;
    overflow:auto;
   margin-left:-100px;
}
 #one[data-v-37244d10]{
     margin-left:0px;
 }

 
element.style {
    transform: translateX(0px);
}


#img1,#img2,#img3{
transition: all 0.4s ease !important;
}
#one>div>.dj{
    position: relative;
    top:-200px;
    
}
a{
    color:#000;
    text-decoration: transparent;
}
.dj>a:nth-child(1){
    color:#4472c9;
}
a:hover{
    color:#4472c9;
}
#one>div>.img,#one>div>.dj{
    display: inline-block;
   
}
.btn1:hover{
    background-color: #0c71c0 !important;
    color:#fff !important;
}
#one{
    height: 0px;
    overflow: hidden;
    transition:  all 1s;
}

.sfq{
    margin-top: 20px;
   
}
.sfq>div,.sfqx>div{
      display: inline-block;
  margin: 5px 5px;
  color:#fff;
 
}

.sfq>div:nth-child(1),.sfq>div:nth-child(2){
    width: 326px;
    height: 40px;
    background-color: #325eae;
    text-align: center;
    padding-top: 15px;
  
}

.sfqx>div{
    width: 212px;
    height: 40px;
    text-align: center;
    padding-top: 10px;

}
</style>
