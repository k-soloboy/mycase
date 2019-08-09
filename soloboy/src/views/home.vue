<template>
  <div class="container">
    <!-- 顶部 -->
          <div class="top">
            <top-title1 :jumpinput="jumpinput">
            </top-title1>
          </div>
    <!-- 轮播 -->
    <div class="page-swipe">
      <mt-swipe style="height:50px;" :auto="4000" :show-indicators="false">
        <mt-swipe-item class="slide1">
        </mt-swipe-item>
        <mt-swipe-item class="slide2">
        </mt-swipe-item>
        <mt-swipe-item class="slide3">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 图片 -->
    <div class="f2">
      <img src="../assets/ht_img/picture/8.jpg" alt="">
      <img src="../assets/ht_img/picture/5.jpg" alt="">
      <img src="../assets/ht_img/picture/6.jpg" alt="">
    </div>
    <div class="f3">
      <div class="f3_title">
        <h3>凤凰推荐</h3>
        <div>更多 ></div>
      </div>
      <v-touch v-on:swipeleft="leftChange" height="500px" v-on:swiperight="rightChange">
        <div class="f3-card touchchange" id="f3_huadong">
          <div class="card" v-for="item in list" :key="item.pid">
            <img src="../assets/ht_img/picture/8.jpg" y alt="">
            <h4>{{item.title}}</h4>
            <div class="f3_price1">￥{{item.price1.toFixed(2)}}</div>
            <div class="f3_price2">￥{{item.price2.toFixed(2)}}</div>
            <img src="../assets/ht_img/picture/steam.png">
          </div>
        </div>
      </v-touch>
    </div>
    <div class="f4">
      <div class="f4_title">
        <div class="f4_title1" :class="ctopen==0? ct:''" @click="ct1">
          最新上市
        </div>
        <div class="f4_title2" :class="ctopen==1? ct:''" @click="ct2">
          即将上市
        </div>
        <p>更多 ></p>
      </div>

      <div class="f4_container" v-show="moban1">
        <div class="f4_card">
          <img src="../assets/ht_img/picture/10.jpg" width="90px" alt="">
          <div class="cardtitle1">米拉多</div>
          <div class="cardtitle2">Mirador</div>
          <div class="carddate">2019/07/27</div>
        </div>
        <div class="f4_card">
          <img src="../assets/ht_img/picture/10.jpg" width="90px" alt="">
          <div class="cardtitle1">米拉多</div>
          <div class="cardtitle2">Mirador</div>
          <div class="carddate">2019/07/27</div>
        </div>
        <div class="f4_card">
          <img src="../assets/ht_img/picture/10.jpg" width="90px" alt="">
          <div class="cardtitle1">米拉多</div>
          <div class="cardtitle2">Mirador</div>
          <div class="carddate">2019/07/27</div>
        </div>
        <div class="f4_card">
          <img src="../assets/ht_img/picture/10.jpg" width="90px" alt="">
          <div class="cardtitle1">米拉多</div>
          <div class="cardtitle2">Mirador</div>
          <div class="carddate">2019/07/27</div>
        </div>
        <div class="f4_card">
          <img src="../assets/ht_img/picture/10.jpg" width="90px" alt="">
          <div class="cardtitle1">米拉多</div>
          <div class="cardtitle2">Mirador</div>
          <div class="carddate">2019/07/27</div>
        </div>
        <div class="f4_card">
          <img src="../assets/ht_img/picture/10.jpg" width="90px" alt="">
          <div class="cardtitle1">米拉多</div>
          <div class="cardtitle2">Mirador</div>
          <div class="carddate">2019/07/27</div>
        </div>
      </div>
      <div class="f4_container" v-show="moban2">
        <div class="f4_card">
          <img src="../assets/ht_img/picture/12.jpg" width="90px" alt="">
          <div class="cardtitle1">米拉多</div>
          <div class="cardtitle2">Mirador</div>
          <div class="carddate">2019/07/27</div>
        </div>
        <div class="f4_card">
          <img src="../assets/ht_img/picture/12.jpg" width="90px" alt="">
          <div class="cardtitle1">米拉多</div>
          <div class="cardtitle2">Mirador</div>
          <div class="carddate">2019/07/27</div>
        </div>
        <div class="f4_card">
          <img src="../assets/ht_img/picture/12.jpg" width="90px" alt="">
          <div class="cardtitle1">米拉多</div>
          <div class="cardtitle2">Mirador</div>
          <div class="carddate">2019/07/27</div>
        </div>
        <div class="f4_card">
          <img src="../assets/ht_img/picture/12.jpg" width="90px" alt="">
          <div class="cardtitle1">米拉多</div>
          <div class="cardtitle2">Mirador</div>
          <div class="carddate">2019/07/27</div>
        </div>
        <div class="f4_card">
          <img src="../assets/ht_img/picture/12.jpg" width="90px" alt="">
          <div class="cardtitle1">米拉多</div>
          <div class="cardtitle2">Mirador</div>
          <div class="carddate">2019/07/27</div>
        </div>
        <div class="f4_card">
          <img src="../assets/ht_img/picture/12.jpg" width="90px" alt="">
          <div class="cardtitle1">米拉多</div>
          <div class="cardtitle2">Mirador</div>
          <div class="carddate">2019/07/27</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        moban1: true,
        moban2: false,
        price1: "",
        price2: "",
        title: "",
        pic: "",
        list: [{
          pid:0,
            title: "绝地求生大逃杀",
            pic: "../assets/ht_img/picture/8.jpg",
            price1: 49,
            price2: 98,
          },
          {
            pid:1,
            title: "掠食",
            pic: "../assets/ht_img/picture/3.jpg",
            price1: 21,
            price2: 120,
          },
          {
            pid:2,
            title: "三国",
            pic: "../assets/ht_img/picture/8.jpg",
            price1: 30,
            price2: 40,
          },
          {
            pid:3,
            title: "黑暗画片",
            pic: "../assets/ht_img/picture/3.jpg",
            price1: 100,
            price2: 118,
          },
          {
            pid:4,
            title: "灵魂之火",
            pic: "../assets/ht_img/picture/8.jpg",
            price1: 51,
            price2: 58,
          }
        ],
        s: 0,
        touchchange: "",
        ct: "ct",
        ctopen: 0,
      };
    },
    methods: {
       jumpinput() {},
      ct1() {
        this.ctopen = 0;
        this.moban1 = true;
        this.moban2 = false;
      },
      ct2() {
        this.ctopen = 1;
        this.moban1 = false;
        this.moban2 = true;
      },
      rightChange() {
        let c = document.querySelector(".f3-card");
        console.log(c);
        let s = this.s - 100;
        c.style.transform = "translateX(-" + s + "px)";
        this.s = s;
      },
      leftChange() {
        let c = document.querySelector(".f3-card");
        console.log(c);
        if (this.s != 1000) {
          let s = this.s + 100;
          c.style.transform = "translateX(-" + s + "px)";
          this.s = s;
        }
        setTimeout(() => {
          if (this.s == 1000) {
            c.style.transform = "translateX(-950px)";
          }
        }, 1500)
      },
    },
    components:{
       topTitle1: toptitle1,
    }
  }
   import toptitle1 from "../components/toptitle1";
</script>
<style scoped>
.container{
  margin-top:50px;
  height:934px;
  overflow: auto;
}
  .page-swipe {
    width: 100%;
    height: 50px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }


  .slide1 {
    background: url("../assets/ht_img/picture/1.jpg") no-repeat;
    background-size: 100%;
    color: #fff;
    position: relative;
  }

  .slide2 {
    background: url("../assets/ht_img/picture/2.jpg") no-repeat;
    background-size: 100%;
    color: #000;
    position: relative;
  }

  .slide3 {
    background: url("../assets/ht_img/picture/4.jpg") no-repeat;
    background-size: 100%;
    position: relative;
  }

  .f2 {
    width: 100%;
    height: 120px;
    margin-top: 8px;

  }

  .f2 img:first-child {
    width: 45%;
    height: 120px;
    float: left;
    padding: 8px;
    border-radius: 10px;
    margin-right: 3px;
    margin-left: 5px;
  }

  .f2 img:not(:first-child) {
    width: 45%;
    height: 46%;
    float: left;
    padding: 4px;
    border-radius: 10px;
    margin-top: 4px;
  }

  .f3 {
    height: 280px;
    width: 100%;
    margin-top: 25px;
  }

  .f3_title {
    position: relative;
    margin-left: 12px;
    height: 30px;
    border-bottom: 1px solid #ccc;
  }

  .f3_title>h3 {
    position: absolute;
    left: 0;
    top: 0;
    padding-bottom: 5px;
    border-bottom: 2px solid #ce5e19;
  }

  .f3_title>div {
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 12px;
    font-size: 12px;
  }

  .f3-card {
    /* display:flex;
    justify-content: space-around;
    align-content: center; */
    width: 2000px;
    height: 200px;
    padding: 20px;
    transform: translateX(0px);
    transition: .3s;
  }

  .card {
    height: 100%;
    width: 250px;
    float: left;
    border-radius: 6px;
    margin-right: 13px;
    position: relative;
    box-shadow: 3px 3px 3px 0px #ccc;
  }

  .card img:first-child {
    border-radius: 8px 8px 0 0;
    height: 100px;
    width: 100%;
    position:relative;
    left:0px;
  }

  .card img:last-child {
    height: 20px;
    width: 20px;
    position: relative;
    left: 90px;
    top: -10px;
  }

  .card h4 {
    font-family: "微软雅黑";
    position: relative;
    top: 10px;
    left: 0px;
  }

  .f3_price1 {
    font-size: 24px;
    position: relative;
    left: -80px;
    top: 30px;
    color: #dc4520;
  }

  .f3_price2 {
    font-size: 12px;
    text-decoration: line-through;
    position: relative;
    left: 0px;
    top: 5px;
    color: #909399;
  }

  /* f4 */
  .f4 {
    width: 100%;
    position: relative;
  }

  .f4_title {
    height: 30px;
    border-bottom: 1px solid #ccc;

  }

  .f4_title1 {
    position: absolute;
    left: 25px;
    top: 0px;
    font-size: 12px;
  }

  .f4_title2 {
    position: absolute;
    left: 100px;
    top: 0px;
    font-size: 12px;
  }

  .ct {
    font-weight: 600;
    font-size: 16px !important;
    border-bottom: 3px solid #dc4520;
  }

  .f4 p {
    font-size: 12px;
    position: absolute;
    right: 12px;
    top: 0px;
  }

  .f4moban {
    padding: 0px;
    margin: 10px;
    width: 370px;
    height: 400px;
    margin-bottom: 50px;
    margin-top: 20px;
  }

  .f4_container {
    padding: 0px;
    margin: 10px;
    width: 370px;
    height: 400px;
    margin-bottom: 50px;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .f4_card {
    padding: 3px;
    width: 90px;
    text-align: left;
  }

  .f4_card img {
    border-radius: 5px;
    width: 90px;

  }

  .cardtitle1 {
    font-size: 14px;
    font-weight: 600;
  }

  .cardtitle2 {
    font-size: 6px;
    color: silver;
    margin-top: 3px;
  }

  .carddate {
    font-size: 4px;
    color: slategray;
  }
</style>