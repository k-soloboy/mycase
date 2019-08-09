<template>
    <div class="container">
        <div class="head">
            购物车
            <div class="edit" @click="edit">编辑</div>
            <div @click="clearcar" class="clear">清空购物车</div>
        </div>
        <div class="goodsInfo">
            <div class="goodsCard" v-for="item in list" :key="item.rid" >
                <input type="checkbox" class="selectButton" @click="checkbox(item.rid) " v-model="checkedAll" :value="item.rid">
                <img src="../assets/ht_img/picture/8.jpg" alt="">
                <div class="goodsIntroduce" v-show="show">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="price">
                       {{item.price}}
                    </div>
                    <div class="allButton">
                        <div class="leftbutton" @click="reduce(item.rid)">-</div>
                        <div class="count">{{item.count}}</div>
                        <div class="rightbutton" @click="add(item.rid)">+</div>
                    </div>
                </div>
                <div class="goodstip" v-show="!show">
                    <div class="allButton1">
                        <div class="leftbutton1" @click="reduce(item.rid)">-</div>
                        <div class="count1" >
                            <p>{{item.count}}</p>
                        </div>
                        <div class="rightbutton1" @click="add(item.rid)">+</div>
                    </div>
                    <div class="delete" @click="dec(item.rid)">
                        删除
                    </div>
                </div>
            </div>

        </div>
        <div class="buttomCar">
            <div class="allSelected">
                 <input type="checkbox" id="quan" class="selectAll" @click="allselected($event)">
                 <p>全选</p>
                 <div class="deleteAll">下单</div>
                 <div class="totalPrice">{{total|price}}</div>
                 
            </div>
            
        </div>
    </div>
</template>
<script>
    export default {
        inject: ['reload'],
        data() {
            return {
                value: "",
                show: true,
                count: 1,
                list:[],
                checkedAll:[], 
                selected:false, 
                 u:"", 
            }
        },
        created(){
            
        this.u=localStorage.getItem("u");
        this.loadmore();
           
        },
        methods: {
            loadmore(){
            var url="products_car";
             var obj={uid:this.u}
            this.axios.get(url,{params:obj}).then(result=>{
            this.list=result.data;
            console.log(this.list);
        })
            },
            edit() {
                this.show = !this.show;
            },
            reduce(id){
                for(var i in this.list){
                     if(this.list[i].count!=1){
                          if(this.list[i].rid==id){
                    this.list[i].count--; 
                
                } 
                    }       
              
               
                }  
            },
            add(id){
                for(var i in this.list){
                if(this.list[i].rid==id){
                    this.list[i].count++;
                }
                }
            },

            //设置是否选中
        checkbox(item){
             if(this.checkedAll.indexOf(item)=="-1"){
                     
                        this.checkedAll.push(item);
                        console.log(this.checkedAll)
                      
             }else{
                 var i=this.checkedAll.indexOf(item);
                this.checkedAll.splice(i,1);
                  

             }
        },
        //全选按钮
         allselected(e){
            // this.checkedAll=flag;
            // this.list.forEach((item,index)=>{
            //     if(typeof item.checked =="undefined"){
            //         this.$set(item,"checked",this.checkedAll)
            //     }else{
            //         item.checked=!this.checkedAll;
            //     }
            //     this.checked=item.checked; 
            //     console.log(this.checked)
            // })
            if(e.target.checked){
                this.list.forEach((el,i)=>{
                    if(this.checkedAll.indexOf(el.rid)=="-1"){
                        this.checkedAll.push(el.rid);
                    }
                })
                console.log(this.checkedAll)
            }else{
                this.checkedAll=[];
            }
           
        },
        //删除单个商品
        dec(id){
            var rid=id;
            var url="deleteA";
            var obj={rid:rid};
            this.$messagebox.confirm("您确定删除商品吗？").then(action=>{
            this.axios.get(url,{params:obj}).then(result=>{
             console.log(666)
             this.reload();
                 
            })
            }).catch(err=>{
                return;
            })
          
        },
        clearcar(){
        
            var uid=this.u;
            var url="clearcar";
            var obj={uid:uid}
            this.axios.get(url,{params:obj}).then(result=>{
                console.log(666)
                this.reload();
            })
        }
        
        
        },
        watch:{
            checkedAll:{
                handler(){
                    //数组有变化触发
                    if(this.checkedAll.length==this.list.length){
                        document.querySelector("#quan").checked=true
                    }else{
                        document.querySelector("#quan").checked=false
                    }
                },
                deep:true //深度监视
            }
        },
       
        
        filters:{
            price(arg){
                return arg.toFixed(2)+"元";
            }
        },
        computed:{
            total(){
               var result=0;
             for(var i in this.list){
                    
                  if(this.checkedAll[i]){
                      //用checkall 保存的值去找对应的rid
                    var s=this.checkedAll[i];
                    for(var n in this.list){
                        if(s==this.list[n].rid){
                             result+=this.list[n].price*this.list[n].count;
                        }
                    }
                   
                    }
              }
             return result;
            }
        }
    }
</script>
<style scoped>
    .container {
        position: relative;
        height:600px;
    overflow:auto;
    }

    .head {
        height: 20px;
        border-bottom: 1px solid #ccc;
        padding: 5px;
        font-weight: 600;
    }

    .edit {
        position: relative;
        left: 160px;
        top: -22px;
        font-size: 14px;
        color: #909399 !important;
    }

    /* 显示商品 */
    .goodsInfo {
        width: 100%;

    }

    .goodsCard {
        margin-top: 10px;
        width: 100%;
        text-align: left;
        position: relative;
        margin-left: 15px;
    }

    .goodsCard>img {
        width: 30%;
        height: 53px;
        margin-left: 30px;
    }

    .goodsIntroduce {
        position: absolute;
        left: 150px;
        top: 0px;
    }

    .allButton {
        height: 20px;
    }

    .leftbutton {
        position: absolute;
        left: 120px;
        top: 30px;
        border: 1px solid #222;
        height: 20px;
        width: 20px;
        text-align: center;
    }

    .rightbutton {
        position: absolute;
        left: 180px;
        top: 30px;
        border: 1px solid #222;
        height: 20px;
        width: 20px;
        text-align: center;
    }

    .count {
        position: absolute;
        left: 140px;
        top: 30px;
        font-size: 10px;
        width: 40px;
        height: 20px;
        border-bottom: 1px solid #222;
        border-top: 1px solid #222;
        text-align: center;
        line-height: 20px;
    }

    .goodstip {
        height: 75px;
        width: 50%;
        position: absolute;
        top: 0px;
        left: 180px;
    }

    .allButton1 {
        display: table;
        text-align: center;
    }

    .leftbutton1 {
        position: absolute;
        left: 0px;
        top: 15px;
        border: 1px solid #222;
        height: 25px;
        width: 30px;
        justify-content: center;
        display: flex;
        align-items: center;
    }

    .rightbutton1 {
        position: absolute;
        left: 70px;
        top: 15px;
        border: 1px solid #222;
        height: 25px;
        width: 30px;
        justify-content: center;
        display: flex;
        align-items: center;
    }

    .count1 {
        position: absolute;
        left: 20px;
        top: 15px;
        font-size: 10px;
        width: 80px;
        height: 25px;
        border-bottom: 1px solid #222;
        border-top: 1px solid #222;
        line-height: 25px;

    }

    .count1>p {
        margin-right: 18px;
    }

    .delete {
        width: 60px;
        height: 100%;
        position: absolute;
        background: red;
        right: 0px;
        top: 0px;
        text-align: center;
        line-height: 53px;
        color: #dcdfe6;
       padding-right:5px;

    }

    .price {
        position: relative;
        top: 10px;
        left: 0px;
        color: #dc4520;
    }

    .title {
        font-size: 10px;
    }

    .selectButton {
        width: 15px;
        height: 15px;
        position: absolute;
        top: 20px;
        left: 0px;
        
    }
    /* 底部购物车 */
.buttomCar{
    height:40px;
    width:368px;
    position:fixed;
    bottom:58px;
    left:0px;
    border-top:1px solid #ccc;
    
}
.allSelected{
    position:relative;
  
}
.selectAll{
    width:15px;
    height:15px;
     float:left;
     margin-top:13px;
    margin-left:13px;
    margin-right:30px;
}
.allSelected p{
    color:#909399;
     float:left;
     line-height:40px;
     
}
.totalPrice{
    color:#bf224c;
     float:right;
     line-height:40px;
}
.deleteAll{
    height:40px;
    width:80px;
    background:#bf224c;
    color:seashell;
     float:right;
     line-height:40px;
     margin-left:15px;
}
.clear{
    position:absolute;
    top:5px;
    left:10px;
    color:red;
}
</style>