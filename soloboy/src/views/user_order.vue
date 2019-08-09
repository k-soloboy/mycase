<template>
    <div class="container">
        <div class="top">
            <img src="../assets/ht_img/picture/user.png" alt="">
            <p>手机 {{uname}}</p>
        </div> 
        <div class="title">我的订单</div>
        <div @click="login_out">注销</div>
        <!-- <div class="order">
           <div class="orderId">订单编号：10086</div>
           <div class="orderState">待付款</div>
           <img src="../assets/ht_img/picture/8.jpg" alt="">
           <div></div>
        </div> -->

    </div>
</template>
<script>
export default {
    inject: ['reload'],
    data(){
        return{
            uname:"",
        }
    },
    created(){
        let u=localStorage.getItem("p");
        if(u){
            this.uname=u;
        }

    },
    methods:{
        login_out(){
            console.log(666)
            localStorage.clear();
            window.location.reload();
        }
    }
}
</script>
<style scoped>

</style>

