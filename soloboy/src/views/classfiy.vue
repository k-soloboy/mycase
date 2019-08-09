<template>
    <div class="container">
         <!-- 顶部 -->
          <div class="top">
            <top-title1 :jumpinput="jumpinput">
            </top-title1>
          </div>
        <div class="header">
            <ul class="first-nav">
            <li v-for="i in pname" :key="i.pid" @click="search(i.pid)" :class="cfheader[i.pid]==true? cfsearch:''">
                {{i.pname}}
            </li>
            </ul>
            <ul class="second-nav">
                <li @click="selectAll" :class="navAll==true? secondNav:''">全部</li>
                <li @click="selectNow" :class="navNow==true? secondNav:''">最新</li>
                <li @click="selectDisc" :class="navDisc==true? secondNav:''">优惠</li>
                <li @click="selectPrice" :class="navPrice==true? secondNav:''">价格</li>
            </ul>
        </div>
        <div class="main">
            <div class="card" v-for="item in list" :key="item.pid" @click="sendtocar(item.pid)">
                <img src="../assets/ht_img/picture/8.jpg" alt="">
                <div class="introduce">
                <div class="titleChina">{{item.titleChina| titlefilter(item.titleChina)}}</div>
                <div class="titleEnglish">{{item.titleEnglish| titlefilter(item.titleEnglish)}}</div>
                <div class="tip">{{item.tip}}</div>
                <div class="redprice">￥{{item.price}}</div>
                <div class="grayprice">￥275</div>
                <div class="disc"><p>-{{item.disc}}</p></div>
                </div>   
            </div>
        </div>
     </div>
</template>
<script>
export default {
    inject: ['reload'],
    data(){
        return{
            cfheader:[true,false,false,false,false,false],
          pname:[
              {pid:0,pname:"游戏"},
               {pid:1,pname:"主机"},
                {pid:2,pname:"周边"},
                 {pid:3,pname:"潮流"},
                  {pid:4,pname:"书城"},
                   {pid:5,pname:"3C"},
                   ],
            cfsearch:"cfsearch",
            secondNav:"secondNav",
            navNow:false,
            navAll:true,
            navPrice:false,
            navDisc:false,
            list:[],
            u:"",
        }
    },
    created(){
        this.loadmore();
           this.u=localStorage.getItem("u");
       console.log(this.u)
    },
    methods:{
        jumpinput() {},
        loadmore(){
             var url="products_all";
        this.axios.get(url).then(result=>{
            this.list=result.data;
        })
        },
        search(pid){
          
           for(let i=0;i<this.cfheader.length;i++){
               if(i==pid){
                   this.cfheader[i]=true;  
                   Vue.set(this.cfheader,i,true)//重新渲染
               }
               else{
                   this.cfheader[i]=false;
               } 
           }
           if(pid==0){
              this.loadmore();
           }
          if(pid==1){
              var url="computer";
              this.axios.get(url).then(result=>{
                   this.list=result.data;
                   
              })
          }
        },
        selectAll(){
            this.navAll=true;
            this.navNow=false;
            this.navPrice=false;
            this.navDisc=false;
        },
        selectNow(){
             this.navAll=false;
            this.navNow=true;
            this.navPrice=false;
            this.navDisc=false;
        },
        selectDisc(){
             this.navAll=false;
            this.navNow=false;
            this.navPrice=false;
            this.navDisc=true;
        },
        selectPrice(){
             this.navAll=false;
            this.navNow=false;
            this.navPrice=true;
            this.navDisc=false;
        },
        sendtocar(n){
            console.log(n)
            this.changeid=n;
            if(this.u){
                
            for(let i=1;i<=this.list.length;i++){
                if(n==i){
                    let title1=this.list[i-1].titleChina;
                    let price1=this.list[i-1].price;
                    let url="insertTocar";
                    let obj={title:title1,price:price1,count:1,uid:this.u};
                    this.axios.get(url,{params:obj}).then(result=>{   
                        // this.reload();
                        // window.location.href=`/#index?m=3`
                        // this.reload();
                        // var m=3;
                        // this.$emit("jump",m);
                        this.$router.push("/shop")

                    })
                }
            }
            }else{
                this.$toast("请登录")
            }
        }
    },
    filters:{
        titlefilter(msg){
            var newmsg="";
            var old="";
            if(msg.length>16){
                 old=msg.slice(0,15);
                newmsg=`${old}...`
            }
            return newmsg
        }
    },
    watch:{
         changeid(){
                    
            
        },
    },
     components:{
       topTitle1: toptitle1,
    }
   
   
}
import Vue from "vue";
 import toptitle1 from "../components/toptitle1";
</script>
<style scoped>
.container{
    margin-top:57px;
    height:600px;
    overflow:auto;
}
    .header{
        margin-bottom:15px;
        height:70px;
    }
    .header ul li{
        float:left;
       margin:2px 18px;
    }
    .cfsearch{
        color:#dc4520;
        border-bottom:2px solid #dc4520;
    }
    .secondNav{
        color:#dc4520;
        box-shadow: 3px 3px 3px 0px #ccc;
        border-radius:5px;
        border:1px solid #dc4520;
    }
    .first-nav {
        height:30px;
        font-size:14px;
    }
    .second-nav{
        height:30px;
        color:#909399;
        font-size:3px;
        margin-right:30px;
        margin-top:8px;
    }
    .sccond-nav li{
        float:left;
        padding:5px;
    }
    /* 商品card */
    .main{
        width:100%; 
        margin-bottom:55px;

       
    }
    .card{
       background-color:white;
        padding-bottom:8px;
         border-bottom:1px solid#d9d9d9;
         margin-top:6px;
         height:80px;
    }
    .card img{
        width:40%;
        height:80px;
        float:left;
        box-shadow: 3px 3px 3px 0px #ccc;
        border-radius:5px;
        margin-left:13px;
        margin-right:15px;
    }
    .introduce{
        height:80px;
        width:50%;
        float:left;
        background:white;
        margin-right:3px; 
        padding:3px;  
        position:relative; 
        text-align:left;
    }
    .titleChina{
        font-size:10px;
        font-weight:600;
    }
    .titleEnglish{
        color:#909399;
        font-size:6px;
        margin-top:4px;
    }
    .tip{
        font-size:6px;
        margin-top:4px;
    }
    .redprice{
        font-size:12px;
        color: #dc4520;
        margin-top:7px;

    }
    .grayprice{
        position:relative;
        left:50px;
        top:-16px;
        font-size:8px;
        text-decoration:line-through;
        color:#909399;
    }
    .disc{
        height:20px;
        width:40px;
        background:green;
        position:relative;
        left:150px;
        top:-30px;
        border-top-left-radius:5px;
        border-bottom-right-radius:5px;
        font-size:10px;
        /* 垂直居中 父元素设置table */
        text-align:center;
        display:table;
        /* line-height:20px; */
        /* vertical-align: middle; */
    }
    .disc>p{
        /* 垂直居中 子元素设置 table-cell 和vertical-align:middle */
        vertical-align: middle;
        display:table-cell;
    }
</style>


