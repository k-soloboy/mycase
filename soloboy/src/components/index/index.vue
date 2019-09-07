<template>
  <div>
      <el-header><top-head
      :activeName="active" :handleClick="handleClick" 
      :userMesg="userMesg"
      :control="control"
      :Bclass="Bclass"
      :show="show"
      :loginMsg="loginMsg"
      :loginoutMsg="loginoutMsg"
      ></top-head>
      </el-header>
      <div class="container" v-show="active=='one'? true:false">
       <el-container >
      <el-main>
        <div class="f1">
          <img class="head-title" src="../../assets/picture/t1.png" width="750px" height="188px">
          <img src="../../assets/picture/img_logo.png" width="360px" height="360px" class="head-right-img" alt="">
          <el-button @click="show" class="login-button"  type="primary">
            马上体验
          </el-button>
        </div>
      </el-main>
    </el-container>
    <el-container>
      <el-main>
        <div class="f2">
          <div class="f2_leftText">
            <h3>智能化：</h3>
            <p>OA通过智能语音来交互,消除软件界面</p>
            <p>让组织每位成员拥有一位7*24小时的智能办公助理</p>
            <h3>平台化：</h3>
            <p>OA平台与其它异构系统集成构建统一工作平台</p>
            <p>7大引擎满足组织灵活变化需求，实现按需应变</p>
            <h3>全程电子化：</h3>
            <p>电子印章，电子签名，电子合同，电子存证</p>
            <p>彻底告别纸张办公，让组织的整个运营流程完全电子化</p>
          </div>
          <el-button @click="show" class="f2_button"  type="warning">
            马上体验
          </el-button>
        <img src="../../assets/picture/sh1.png"  class="f2_img" width="685px" height="485px" alt="">
       </div>
        </el-main>
    </el-container>
    <el-container>
      <el-main>
        <div class="f3">
          <div class="left-text">
            <h5>what is e-cology</h5>
            <h2>泛微E9带来全新用户体验</h2>
            <p>泛微e-cology 依托全新的设计理念，全新的管理思想</p>
            <p>为中大型组织组建全新的高校协同办公环境</p>
            <p>智能语音办公，简化软件操作界面</p>
            <p>身份认证，电子签名，电子签章，数据存证让合同全程电子化</p>
            <p>后端7大引擎，满足组织集成化，个性应用需求</p>
            <el-button @click="show" class="f3_button"  type="Success">
            马上体验
          </el-button>
          </div>
          <img src="../../assets/picture/imac.png" width="580px" height="480px" class="f3_img" alt="">
        </div>
        </el-main>
    </el-container>
    <el-container>
        <el-main>
          <div class="f4"></div>
        </el-main>
    </el-container>
      <el-container>
          <el-main> 
            <div class="f5"></div>
            </el-main>
    </el-container>
    <el-container>
        <el-main>
           <div class="f6"></div>
        </el-main> 
    </el-container>
    <el-container>
        <el-main class="f7">Main</el-main>
    </el-container>
    </div>
    <div class=" hidden" id="mapp">
      <div class="mask" @click="m"></div>
      <div class="content">
        <div class="model-container">
          <h1 class="model-title">
            <div class="reg_content" @click="reg">注册</div>
            <div class="login_content" @click="login">登录</div>
          </h1>
          <div class="model-content" id="contain1">
            用户：<input v-model="uname" type="text" /><br />
            密码：<input type="password" v-model="upwd" /><br />
            手机：<input v-model="phone" type="text" /><br />
            公司：<input type="text" v-model="u_company" /><br />
            邮箱：<input type="email" v-model="u_email" /><br />
            <button id="reg" @click="go_reg">注册</button>
          </div>
          <div class="model-content hidden" id="contain2">
            用户名：<input type="text" v-model="go_uname" /><br />
            密码：&nbsp;&nbsp;&nbsp;&nbsp;<input type="password" v-model="go_upwd" /><br />
            <button id="login" @click="go_login">登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname: "",
      upwd: "",
      phone: "",
      u_company: "",
      u_email: "",
      go_upwd: "",
      go_uname: "",
      active: 'one',
      mtkopen:true,
      userMesg:"注册/登录",
      Bclass:false,
      loginMsg:true,
      loginoutMsg:false
    };
  },
  
 created(){
    //用户状态
   this.loadmore() 
  },
  methods: {
    //用户状态
    loadmore(){
       var n = sessionStorage.getItem("uname");
      if(n){
        var str=`欢迎 ${n}`;
        this.userMesg=str;
        this.Bclass=true;
        this.mtkopen=false;
        this.loginMsg=false;
     this.loginoutMsg=true;
      }
    },
    control(){
      this.loginMsg=true;
       this.loginoutMsg=false;
     this.Bclass=false;
     this.userMesg="注册/登录";
     sessionStorage.removeItem("uname");
     this.mtkopen=true;
    },
    //全局组件topHead
     handleClick(tab, event) {
        console.log(tab, event);
        this.active=tab.name;
      },
    //注册
    go_reg() {
      var una = this.uname;
      var up = this.upwd;
      var ph = this.phone;
      var cpy = this.u_company;
      var em = this.u_email;
      var una_reg = /^[\u4e00-\u9fa5]{2,6}|\w{3,8}$/;
      var up_reg = /^\w{3,8}$/;
      var ph_reg = /^[1][3,8,0]\d{9}$/;
      var em_reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      if (!una_reg.test(una)) {
        this.$message({ message: "用户名3-6位", type: "warning" });
        return;
      }
      if (!up_reg.test(up)) {
        this.$message({ message: "密码3-12位", type: "warning" });
        return;
      }
      if (!ph_reg.test(ph)) {
        this.$message({ message: "手机号码格式不正确", type: "warning" });
        return;
      }
      if (!em_reg.test(em)) {
        this.$message({ message: "邮箱格式不正确", type: "warning" });
        return;
      }
      var url1 = "user_name";
      var obj1 = { uname: una };
      this.axios.get(url1, { params: obj1 }).then(result => {
        if (result.data.code == -1) {
          this.$message({ message: result.data.msg, type: "warning" });

          console.log(666);
        }
        if (result.data.code == 1) {
          var u = result.data.u;
          console.log(result);
          sessionStorage.setItem("uname", u);
          var url = "reg";
          var obj = {
            uname: una,
            upwd: up,
            phone: ph,
            company: cpy,
            email: em
          };
          this.axios.get(url, { params: obj }).then(result1 => {
            console.log(u);
            if (result1.data.code == 1) {
              this.$router.push("/form");
            }
          });
        }
      });
    },
    // 登陆
    go_login() {
      var una = this.go_uname;
      var up = this.go_upwd;
      var up_reg = /^\w{3,8}$/;
      var una_reg = /^[\u4e00-\u9fa5]{2,6}|\w{3,8}$/;
      if (!una_reg.test(una)) {
        this.$message({ message: "用户名格式不正确", type: "warning" });
        return;
      }
      if (!up_reg.test(up)) {
        this.$message({ message: "密码格式不正确", type: "warning" });
        return;
      }
      var url = "login";
      var obj = { uname: una, upwd: up };
      this.axios.get(url, { params: obj }).then(result => {
        var u = result.data.u;
        console.log(u);
        if (result.data.code == 1) {
           sessionStorage.setItem("uname", u);
          this.$router.push("/form");
          console.log(result);
        } else {
          this.$message({ message: "手机号或密码错误", type: "warning" });
        }
      });
    },
    //模态框hidden
    show() {
      mapp.classList.remove("hidden");
    },
    reg() {
      contain1.classList.remove("hidden");
      contain2.classList.add("hidden");
    },
    login() {
      contain2.classList.remove("hidden");
      contain1.classList.add("hidden");
    },
    m() {
      mapp.classList.add("hidden");
    }  
  },
  components: {
    "topHead":topHead,
  }
};
import topHead from "./head.vue"

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  /* color:white; */
  list-style:none;
}
.mask {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
}
.content {
  position: fixed;
  z-index: 5000;
  width: 80%;
  max-width: 300px;
  min-height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  text-align: center;
}
.hidden {
  display: none;
}

.mask-layer {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
}
.model-container {
  width: 380px;
  height: 400px;
  background: #d3dce6;
  border-radius: 10px;
  box-shadow: 0px 0px 12px 4px #666;
  text-align: center;
  font-size: 18px;
  color: #5f2626;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.model-container .model-title {
  font-size: 24px;
}
.model-container .controls {
  position: absolute;
  bottom: 19px;
  width: 100%;
  padding: 12px;
}
.model-container a {
  display: inline-block;
  width: 49%;
  text-align: center;
  cursor: pointer;
}

.model-title {
  text-align: center;
  line-height: 80px;
}
.model-title div:hover {
  background: blue;
  color: white;
}
.hidden {
  display: none;
  background: blue;
}
.reg_content,
.login_content {
  width: 190px;
  height: 80px;
  float: left;
  border-radius: 5px;
}
#contain1 input {
  margin: 4px 2px;
  padding: 8px;
  border-radius: 5px;
  font-size: 18px;
  margin-left: -10px;
}
#contain1 button {
  width: 100px;
  height: 60px;
  margin-top: 10px;
  border-radius: 10px;
  background: #2eb2bf;
  font-size: 24px;
  color: #5f2626;
}
#contain1 button:hover {
  background: #51bf2d;
}
#contain2 button:hover {
  background: #de5b6d;
}

#contain2 input {
  margin: 20px 2px;
  padding: 10px;
  border-radius: 5px;
  margin-left: -10px;
  font-size: 18px;
}
#contain2 button {
  width: 100px;
  height: 60px;
  margin-top: 15px;
  border-radius: 10px;
  margin-top: 10px;
  background: #2eb2bf;
  font-size: 24px;
  color: #523b98;
}

.el-main[data-v-826af616] {
  height: 700px !important;
  padding:0px !important;
}

.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 58px;
}



.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-header[data-v-826af616]
{
    background-color:white !important;
    width:1450px !important;
    position:fixed;
    z-index:999;
    top:0px;left:200px;
}
.el-tabs--card>.el-tabs__header .el-tabs__nav{
  border:0px !important;
}
.container{
  margin-top:60px;
}
/*1楼*/
.f1{
  height:700px;
  width:100%;
  background:url("../../assets/images/bg_1.jpg");
  position:relative; 
}
.head-title {
position:absolute;
top:250px;
left:300px;
}

.head-right-img{
  position:absolute;
  top:40px;
  right:60px;
}
.login-button{
  position:absolute;
  top:500px;
  left:550px;
  width:250px;
  height:60px;
}
/**/
.f2{
  height:700px;
  width:100%;
  position:relative;
  background:white;
 
 
}
.f2_leftText{
  position:absolute;
  left:150px;
  top:70px;
  padding:10px;
  text-align:left;
  margin-left:80px;
  margin-bottom:80px;
   color:red !important;
}
.f2_leftText h3 ,.f2_leftText p{
  height:20px;
  margin:20px;
   color:black !important;
}

.f2_img{
 position:absolute;
 right:30px;
 top:180px;;

}
.f2_button{
  position:absolute;
  top:550px;
  left:300px;
   width:180px;
  height:40px;
}
/**/
.f3{
  height:700px;
  width:100%;
 background:url("../../assets/images/bg_3.jpg");
 position:relative;
 
}
.f3 .left-text{
  width:450px;
  height:300px;
  position:absolute;
  left:200px;
  top:150px;
  text-align:left;
  
}
.left-text h2{
  height:20px;
  font-size:40px;
  color:white;
  margin-bottom:50px;
}
.left-text h5{
  height:20px;
   margin-bottom:40px;
   font-size:25px;
    color:white;
}
.left-text p{
   height:10px;
   font-size:14px;
   margin:8px 0px;
   padding:3px 0px;
}
.f3_button{
   position:absolute;
  top:350px;
  left:50px;
   width:180px;
  height:40px;
}
.f3_img{
  position:absolute;
  right:140px;
  top:150px;
}
/**/
.f4{
  height:700px;
  width:100%;
 background:red;
  

}
/**/
.f5{
   height:700px;
  width:100%;
 background:url("../../assets/images/bg_5.jpg");
 
}
/**/
.f6{
    height:700px;
  width:100%;
background:url("../../assets/images/bg_6.jpg");
}
/**/
.f7{
  height:700px;
  width:100%;
 background:url("../../assets/images/bg_7.jpg");
}


</style>
