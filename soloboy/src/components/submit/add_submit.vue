<template>
    <div>
    <div class="container">
       <el-row :gutter="20">
  <el-col :span="24">
      <div class="grid-content bg-purple">
          <h2 class="oa_title">
              <span>申</span>
              <span>请</span>
              <span>单</span>    
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
  <el-col :span="3"><div class="grid-content bg-purple">当前节点</div></el-col>
  <el-col :span="10">
      <div class="grid-content bg-purple">
          <el-input v-model="work" placeholder="请输入当前节点"></el-input>
      </div>
      </el-col>
  <el-col :span="4">
      <div class="grid-content bg-purple">工作流</div></el-col>
  <el-col :span="7">
      <div class="grid-content bg-purple">
             <el-select v-model="now" placeholder="请选择">
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
  <el-col :span="3"><div class="grid-content bg-purple">{{uName}}</div></el-col>
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
             work_options: [{work: '1', label: '出差申请'}, { work: '2',label: '入职申请'}, {work: '3',label: '离职申请'},{work: '4',label: '请假申请'}],
            value:"",
            work:"",
            now:"",
            title:"",
            d1:"",
            uName:"",
            detail:"",
            oa_id:"",
        }
    },
    created(){
      this.loadMore();
      //接收路由传的参数
      var query=this.$route.query;
      this.title=query.oa_title;
      this.d1=query.oa_date;
      this.work=query.oa_work;
      this.now=query.oa_now;
      this.value=query.oa_state;
      this.oa_id=query.oa_id;
      
    },
  
    methods:{ 
      //缓存uname
      loadMore(){
         var n=sessionStorage.getItem("uname");
        this.uName=n;
        this.d1=new Date().toLocaleDateString();
      },
      //人事申请
      add1(){
        var oa_id=this.oa_id;
        var uname=this.uName;
        var work=this.work;
        var title=this.title;
        var d1=this.d1;
        var detail=this.detail;
        var n=this.now;
        var val=this.value;
        if(!title){
           this.$message({message:"请填写标题内容", 
            type:'danger'});
          return;
        }
           if(!n){
             this.$message({message:"必须选择当前节点", 
            type:'warning'});
          return;
        }
        var url="add";
        var obj={oa_title:title,oa_detail:detail,oa_now:n,oa_state:val,oa_date:d1,oa_work:work,uname:uname,oa_id:oa_id}
        this.axios.get(url,{params:obj}).then(result=>{
          console.log(result);
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

