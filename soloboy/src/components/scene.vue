<template>
   <div class="container"> 
     
       <h2>场景应用体验</h2>
    <span>e-cology将为您在组织运营、个人办公、业务管理等方面提升</span>
    
   <div class="img">
    <img src="../assets/a.png" alt="" @click="fun">

    <img src="../assets/b.png" alt="" @click="fun">
   
    <img src="../assets/c.png" alt="" @click="fun">
  
    </div>
    <el-button type="primary" style="width:200px;margin-top:30px;background:#fff;color:#0c71c0;transition: all 0.3s;" class="btn1">马上体验</el-button>
    <div class="m" v-show="mtk==true">
        <h5>组织运营协同应用场景体验<a href="javascript:;" style="margin-left:800px;" @click="fun">关闭</a></h5>
        <el-tabs v-model="textName2" type="card" >
        <el-tab-pane label="资金管理" name="first">
             <el-tabs :tab-position="tab2" style="height: 390px;">
             <el-tab-pane label="资金管理场景"><img src="../assets/index1.png" alt=""></el-tab-pane>
             <el-tab-pane label="报销管理">
                  <div class="block">
                     <el-carousel trigger="click" height="390px">
                     <el-carousel-item v-for="item in 4" :key="item">
                      <h3 class="small">{{ item }}</h3>
                         </el-carousel-item>
                         </el-carousel>
                    </div>
             </el-tab-pane>
             <el-tab-pane label="预算管理">
                  <div class="block"> 
                     <el-carousel trigger="click" height="390px">
                     <el-carousel-item v-for="item in 4" :key="item">
                      <h3 class="small">{{ item }}</h3>
                         </el-carousel-item>
                         </el-carousel>
                    </div>
             </el-tab-pane>
              <el-tab-pane label="资金管理">
                   <div class="block">
                     <el-carousel trigger="click" height="390px">
                     <el-carousel-item v-for="item in 4" :key="item">
                      <h3 class="small">{{ item }}</h3>
                         </el-carousel-item>
                         </el-carousel>
                    </div>
              </el-tab-pane>
  </el-tabs>
        </el-tab-pane>
        <el-tab-pane label="行政管理" name="second">行政管理</el-tab-pane>
        <el-tab-pane label="合同管理" name="third">合同管理</el-tab-pane>
        <el-tab-pane label="人事管理" name="four">人事管理</el-tab-pane>
        <el-tab-pane label="公文管理" name="fix">公文管理</el-tab-pane>
        <el-tab-pane label="会议管理" name="six">会议管理</el-tab-pane>
        <el-tab-pane label="企业文化" name="seven">企业文化</el-tab-pane>
        <el-tab-pane label="业绩管理" name="eight">业绩管理</el-tab-pane>
        <el-tab-pane label="制度管理" name="nine">制度管理</el-tab-pane>
        <el-tab-pane label="外部资源库" name="ten">外部资源库</el-tab-pane>
  </el-tabs>
    </div>
   </div>
</template>

<script>

export default {
    data(){
        
        return {
            textName2:this.activeName2,
            tab2:this.tapPosition2,
        }
        
    },
    props:{
        activeName2:{default:""},
        tapPosition2:{default:""},
        mtk:{default:""},
        fun:{type:Function}
    },
    methods:{
        
    }
   
  }

</script>
<style>
.container{
    height:700px;
    width:100%;
   margin-left:0px;
}
.btn1:hover{
    background-color: #0c71c0 !important;
    color:#fff !important;
}
.img{
    text-align: center;
}
.img>img{
   margin: 30px;
}
.m{
    background-color: #fff;
    width: 1200px;
    height: 700px;
    position: absolute;
   bottom:200px;
    right:50px;

}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
    
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #174c96;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #ac467c;
  }
  .container{
      height:700px;
  width:100%;
  }
</style>
