<template>
    <div>
    <div class="container">
       <el-row :gutter="20">
  <el-col :span="24">
      <div class="grid-content bg-purple">
          <h2 class="oa_title">
          项目申请单
        </h2>
      </div>
      </el-col>
  
</el-row>
<el-row :gutter="20">
  <el-col :span="4">
      <div class="grid-content bg-purple">请求标题</div>
      </el-col>
  <el-col :span="20">     
<div class="grid-content bg-purple">
    <el-input v-model="title" placeholder="请输入请求标题"></el-input>
    </div>
    </el-col>
 
</el-row>
<el-row :gutter="20">
  <el-col :span="3"><div class="grid-content bg-purple">启动资金</div></el-col>
  <el-col :span="4">
      <div class="grid-content bg-purple">
          <el-input v-model="price" placeholder="金额:￥"></el-input>
      </div>
      </el-col>
     <el-col :span="3"><div class="grid-content bg-purple">项目工期</div></el-col>
  <el-col :span="4">
      <div class="grid-content bg-purple">
          <el-select v-model="item_time" placeholder="请选择">
            <el-option
      v-for="item in time_options"
      :key="item.item_time"
      :label="item.label"
      :value="item.item_time" >
    </el-option>
          </el-select>
      </div>
      </el-col>   
  <el-col :span="3">
      <div class="grid-content bg-purple">工作流</div></el-col>
  <el-col :span="7">
      <div class="grid-content bg-purple">
             <el-select v-model="work" placeholder="请选择">
    <el-option
      v-for="item in work_options"
      :key="item.work"
      :label="item.label"
      :value="item.work" >
    </el-option>
  </el-select>
          </div></el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="3"><div class="grid-content bg-purple">申请日期</div></el-col>
  <el-col :span="7">
    <div class="grid-content bg-purple">
      <el-date-picker
      v-model="d1"
      type="datetime"
      placeholder="选择日期">
    </el-date-picker>
      </div>
      </el-col>
  <el-col :span="3"><div class="grid-content bg-purple">紧急状况</div></el-col>
  <el-col :span="5"><div class="grid-content bg-purple">
      <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value" >
    </el-option>
  </el-select>
      </div></el-col>
   <el-col :span="3"><div class="grid-content bg-purple">创建人</div></el-col>
  <el-col :span="3"><div class="grid-content bg-purple" >{{uName}}</div></el-col>
</el-row>

<el-input
  type="textarea"
  :rows="10"
  placeholder="请进行详细描述"
  v-model="detail"
   maxlength="500"
  show-word-limit
  class="input_style">
</el-input>
<el-button @click="add1" type="primary" style="margin-top:20px;">提交申请</el-button>
</div>
</div>
</template>
<script>
export default {
    data(){
        return{
             options: [{value: '0', label: '正常'}, { value: '1',label: '重要'}, {value: '2',label: '紧急'}],
             work_options: [{work: '1', label: '项目立项申请'}, { work: '2',label: '项目经理变更流程'}, {work: '3',label: '项目单据快递确认流程'},],
              time_options: [{item_time: '1', label: '1月之内'}, {item_time: '2',label: '半年之内'}, {item_time: '3',label: '1年之内'},],
            value:"",
            work:"",
            title:"",
            d1:"",
            uName:"",
            detail:"",
            item_time:"",
            price:"",
            item_id:"",

        }
    },
    created(){ 
      this.loadMore();
      //接收路由传的参数
      var query=this.$route.query;
      console.log(query)
      this.title=query.item_title;
      this.d1=query.item_date;
      this.work=query.item_work;
      this.price=query.item_price;
      this.item_time=query.item_time;
      this.value=query.item_state;
      this.item_id=query.item_id;
    },
  
    methods:{ 
      loadMore(){
       var n=sessionStorage.getItem("uname");
        this.uName=n;
        this.d1=new Date().toLocaleDateString();
    
      },
      add1(){
        var item_id=this.item_id;
        var time=this.item_time;
        var price=this.price;
        var work=this.work;
        var title=this.title;
        var d1=this.d1;
        var detail=this.detail;
        var val=this.value;
        var uname=this.uName;
        if(!title){
           this.$message({message:"请填写标题内容", 
            type:'danger'});
          return;
        }
           if(!work){
             this.$message({message:"必须选择当前工作流", 
            type:'warning'});
          return;
        }
        var url="add_item";
        var obj={item_title:title,item_detail:detail,item_state:val,item_date:d1,item_work:work,item_time:time,item_price:price,uname:uname,item_id:item_id}
        this.axios.get(url,{params:obj}).then(result=>{
          
         this.$router.push("/form");
        })
      },
     
    }
}
</script>
<style scoped>
  .el-row {
    margin-bottom: 20px;
    
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
    line-height:40px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .container{
      height:1000px;
      width:800px;
      position:absolute;
      top:0;
      left:0;
      right:0;
      bottom:0;
      margin:10px  auto;
  }
  .oa_title span{
      margin:0px 40px;
  }
  .input_style{
    background:#ddd;
    margin-top:20px; 
   font-size:2em;
border:1px solid #c8cccf;
color:#6a6f77;
  }
</style>

