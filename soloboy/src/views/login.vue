<template>
    <div class="container">
        <img src="../assets/ht_img/picture/fhlogo.png" alt="">
    <div class="main_input" v-show="change">
        <mt-field v-model="phone1" placeholder="用户名/邮箱"></mt-field>
        <mt-field v-model="pwd1" placeholder="登录密码"  type="password">
        </mt-field>
        </div>
        <div class="main_input" v-show="!change">
        <mt-field v-model="phone2"  placeholder="手机号/邮箱"></mt-field>
        <mt-field v-model="pwd2" placeholder="请输入密码"  type="password"></mt-field>
        </div>
        <div class="login_button">
            <mt-button size="large" type="danger" @click="login" v-show="change" >{{msg1}}</mt-button>
            <mt-button size="large" type="danger" @click="reg" v-show="!change">{{msg1}}</mt-button>
             <mt-button size="large" type="default" @click="jump_reg" v-show="change" >{{msg2}}</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    inject: ['reload'],
  data() {
    return {
      change: true,
      msg1:"登录",
      msg2:"去注册",
      phone1:"",
      pwd1:'',
       phone2:"",
      pwd2:'',
    };
  },
  methods:{
      login(){
          this.change=true;
          this.msg1="登录";
          this.msg2="去注册"; 
          var url="login";
          var obj={phone:this.phone1,pwd:this.pwd1}
          this.axios.post(url,qs.stringify(obj)).then(result=>{
           var uid=result.data[0].uid;
           localStorage.setItem("u",uid);
           var phone=result.data[0].phone;
           localStorage.setItem("p",phone);
           window.location.reload();
        //    let n=1;
        //    this.$router.push(
        //        {
        //            name:"classfiy",
        //            params:{n:n},
                   
        //        }
        //    );
        
          })
      },
      jump_reg(){
          this.change=false;
          this.msg1="注册"
          this.msg2=""
      },
      reg(){
        var url="reg";
        var obj={phone:this.phone2,pwd:this.pwd2}
        this.axios.post(url,qs.stringify(obj)).then(result=>{
           console.log(result.data)
        //    window.location.reload();
            // this.$router.push("/login")
            this.reload();
        })
      }
  }
};
import qs from "qs"
</script>
<style scoped>
.container{
    width:100%;
    overflow:hidden;
}
.container img:first-child{
    margin-top:30px;
}
.login_button,.main_input{
    margin-top:20px;
    padding:10px 20px;
}
.login_button button:last-child{
    margin-top:20px;
}
</style>


