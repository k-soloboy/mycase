<template>
    <div class="top-title">
        <img src="../assets/tab-icon/fhlogo.png" alt="">
        <div class="click_input" @click="jumpinput">
        <img src="../assets/ht_img/images/search_hk.png" alt="">
        NBA 2K online  
        </div>
        <img src="../assets/tab-icon/sys.png" alt="">
    </div>
</template>
<script>
export default {
    data(){
        return{
           
            
        }
    },
    props:{
        value:{default:""},
        jumpinput:{type:Function}
    }
}
</script>
<style >
.top-title{
   height:30px;
   width:370px;
   display:flex;
   position:fixed;
   top:0;
   left:0;
   z-index:999;
   justify-content:space-between;
   align-items:center;
   font-size:14px;
    padding:5px 2px 5px 2px;
    border-bottom:1px solid #ccc;
    background:white;
}
.click_input{
   border:1px solid red;
   height:100%;
   width:300px;
   line-height:30px;
}
.click_input>img{
    width:20px;
    height:20px;
    position:relative;
    top:5px;
}


</style>
