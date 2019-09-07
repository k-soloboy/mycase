<template>
  <div>
    <el-container style="height: 750px !important; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <div>
          <img src="../../assets/fw1.jpg" width="200px" height="60px" />
        </div>
        <el-menu
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :default-openeds="['1']"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-message" ></i>全部类型</template>
            
            <el-submenu index="1-2">
              <template slot="title">费用相关</template
              >
              <el-menu-item index="1-2-1" @click="dues_('dues_go',1)">出差费用</el-menu-item>
              <el-menu-item index="1-2-2"  @click="dues_('dues_d',3)">费用报销</el-menu-item>
              <el-menu-item index="1-2-3"  @click="dues_('dues_apply',2)">借款申请</el-menu-item>
            </el-submenu>
            <el-submenu index="1-3">
              <template slot="title"
                >人事管理</template
              >
              <el-menu-item index="1-3-1" @click="add_('add_leave',3)">离职申请</el-menu-item>
              <el-menu-item index="1-3-2" @click="add_('add_enter',2)">入职申请</el-menu-item>
              <el-menu-item index="1-3-3" @click="add_('add_go',1)">出差/外出</el-menu-item>
              <el-menu-item index="1-3-4" @click="add_('add_applay',4)">请假</el-menu-item>
            </el-submenu>
            <el-submenu index="1-4">
              <template slot="title"
                >项目管理</template
              >
              <el-menu-item index="1-4-1"  @click="item_('item_start',1)">项目立项</el-menu-item>
              <el-menu-item index="1-4-2" @click="item_('item_change',2)">项目经理变更</el-menu-item>
              <el-menu-item index="1-4-3" @click="item_('item_sure',3)">项目单据快递确认</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <div style="margin-right:300px; display:inline-block">
            <el-row>
              <el-button style="margin-right:200px" type="primary"
                ><router-link :to="`/add`" >人事申请</router-link></el-button
              >
              <el-button type="success" ><router-link :to="`/dues`">费用申请</router-link></el-button>
              <el-button style="margin-left:200px" type="danger"
                ><router-link :to="`/item`">项目申请</router-link></el-button
              >
            </el-row>
          </div>
          
          <img src="../../assets/return1.png" width="25px" height="25px" @click="return_login" alt="">
          <span style="font-size:24px;color:blue">{{ uName }}</span>
        </el-header>
        <el-main>
          <dues-child
          :tableData2=tableData2 
          v-if="open_close==1"
            :handleClick2=handleClick2
          :changeClick2=changeClick2
          >
          </dues-child>
          <item-child
          :tableData3=tableData3
          v-else-if="open_close==2"
          :handleClick3=handleClick3
          :changeClick3=changeClick3
          ></item-child>
          <add-child
          :tableData1=tableData1
          :handleClick1=handleClick1
          :changeClick1=changeClick1
          v-else 
          ></add-child>
  
  <div class="pagination">
    <el-pagination
            background
            prev-text="上一页"
            next-text="下一页"
            :current-page="currentPage"
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :total="total">
    </el-pagination>
    <div style="margin-left: 30px;">当前 {{currentPage}} / 10 条，共 {{total}} 条</div>
</div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import add from "./addChild.vue";
import dues from "./duesChild.vue";
import item from "./itemChild.vue";
export default {
  //注入inject 刷新当前页面
  inject: ["reload"],
  components: {
    addChild: add,
    duesChild: dues,
    itemChild: item
  },
  data() {
    return {
      tableData1: [],
      tableData2: [],
      tableData3: [],
      open_close: 3,
      uName: "",
      list: [],
      pno: 0,
      ps: 12,
      currentPage: 1,
      total: 1000,
     mytype:1,  ////判断点击那个页面的标志
    };
  },
  mounted() {
    this.loadMore();
  },
 
  
  methods: {
    //返回首页
    return_login() {
      this.$router.push("/index");
    },
       //默认人事分页
    loadMore() {
      var n = sessionStorage.getItem("uname");
      this.uName = n;
      // var url1 = "add_list";
      //this.add_oa(url1);
     this.getData1();
      var { open_close} = this.$route.query;  
      console.log(open_close)
      if(open_close==3){
        this.getData1()
      }else if( open_close==1){
        this.getData2()
      }else if(open_close==2){
        this.getData3();
      }
    },  
      //获取页码
    handleCurrentChange: function(currentPage) {
      this.currentPage = currentPage;
      if(this.open_close = 3){
      this.getData1(this.currentPage);
      }else if(this.open_close = 1){
      this.getData2(this.currentPage)
      }else if(this.open_close = 2){
         this.getData3(this.currentPage);
      }
    },

    //人事处理
    //人事页面获取数据
    getData1(pno = 1) {
      var { url="add_list" , n ,open_close} = this.$route.query;
       this.open_close = open_close;
      var obj = { oa_now: n, pageSize: 9, pno };
      this.axios.get(url, { params: obj }).then(result => {
        var list1 = result.data.list;
        var total = result.data.total;
        this.total = total;
        this.add_fenye1(list1);
      });
     
    },
    
     //人事导航
    add_(url, n) {
      window.location.href = `/#/form?url=${url}&n=${n}&open_close=3`;
      this.reload();
    },

    //  人事页面数据分页后显示
    add_fenye1(list1) {
      let data = [];
      
        for (let i = 0; i < list1.length; i++) {
          let obj = {};
          if (list1[i].oa_state == 0) {
            list1[i].oa_state = "正常";
          } else if (list1[i].oa_state == 1) {
            list1[i].oa_state = "重要";
          } else {
            list1[i].oa_state = "紧急";
          }
          if (list1[i].oa_now == 1) {
            list1[i].oa_now = "出差申请";
          } else if (list1[i].oa_now == 2) {
            list1[i].oa_now = "入职申请";
          } else if (list1[i].oa_now == 3) {
            list1[i].oa_now = "离职申请";
          } else if (list1[i].oa_now == 4) {
            list1[i].oa_now = "请假申请";
          }
          obj.oa_id = list1[i].oa_id;
          obj.oa_state = list1[i].oa_state;
          obj.oa_now = list1[i].oa_now;
          obj.oa_work = list1[i].oa_work;
          obj.oa_title = list1[i].oa_title;
          obj.oa_date = list1[i].oa_date;
          obj.oa_uname = list1[i].uname;
          data[i] = obj;
        
      }
      //给数据源赋值
      this.tableData1 = data;
    },
     //删除afire
    handleClick1(row) {
      var oa_now = row.oa_now;
      var oa_id1 = row.oa_id;
      this.$confirm("此操作将永久删除该条记录，是否继续?", "提示", {
        confirmeButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          var obj = { oa_id: oa_id1 };
          this.axios.get("delete_add_id", { params: obj }).then(result => {
            console.log(result.data.code);
            if (result.data.code == 1) {
              console.log(666);
              this.reload();
            }
          });
          this.$message({
            type: "sucess",
            message: "删除成功"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //修改afire
    changeClick1(row) {
      this.$router.push({
        path: "/add",
        query: {
          oa_title: row.oa_title,
          oa_work: row.oa_work,
          oa_now: row.oa_now,
          oa_date: row.oa_date,
          oa_state: row.oa_state,
          oa_id:row.oa_id,
        }
      });
    },

    //费用处理
  //费用页面获取数据
    getData2(pno = 1) {
      var { url="dues_go", n ,open_close} = this.$route.query; this.open_close = open_close;
      var obj={dues_now:n,pageSize:9,pno}
      this.axios.get(url, { params: obj }).then(result => {
        var list1 = result.data.list;
        var total = result.data.total;
        this.total = total;
        this.add_fenye2(list1);
      });
    },

    //费用导航
    dues_(url, n) {
      window.location.href = `/#/form?url=${url}&n=${n}&open_close=1`;
       this.reload();
      
    },
       
    //  费用页面数据分页后显示
    add_fenye2(list1) {
      let data = [];
        for (let i = 0; i < list1.length; i++) {
          let obj = {};
          
          if (list1[i].dues_state == 0) {
            list1[i].dues_state = "正常";
          } else if (list1[i].dues_state == 1) {
            list1[i].dues_state = "重要";
          } else {
            list1[i].dues_state = "紧急";
          }
          if (list1[i].dues_now == 1) {
            list1[i].dues_now = "费用申请";
          } else if (list1[i].dues_now == 2) {
            list1[i].dues_now = "借款申请";
          } else if (list1[i].dues_now == 3) {
            list1[i].dues_now = "报销申请";
          }
          if (list1[i].dues_time == 1) {
            list1[i].dues_time = "1天之内";
          } else if (list1[i].dues_time == 2) {
            list1[i].dues_time = "3天之内";
          } else if (list1[i].dues_now == 0) {
            list1[i].dues_time = "立刻马上";
          } 
         
          obj.dues_id = list1[i].dues_id;
          obj.dues_state = list1[i].dues_state;
          obj.dues_now = list1[i].dues_now;
          obj.dues_time = list1[i].dues_time;
          obj.dues_price = list1[i].dues_price;
          obj.dues_work = list1[i].dues_work;
          obj.dues_title = list1[i].dues_title;
          obj.dues_date = list1[i].dues_date;
          obj.dues_uname = list1[i].uname;
          data[i] = obj;
      }
      //给数据源赋值
      this.tableData2 = data;
    },
     
    //删除dues
    handleClick2(row) {
      var dues_now = row.dues_now;
      var dues_id1 = row.dues_id;
      this.$confirm("此操作将永久删除该条记录，是否继续?", "提示", {
        confirmeButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          var obj = { dues_id: dues_id1 };
          this.axios.get("delete_dues_id", { params: obj }).then(result => {
            console.log(result.data.code);
            if (result.data.code == 1) {
              console.log(666);
              this.reload();
            }
          });
          this.$message({
            type: "sucess",
            message: "删除成功"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    //修改dues
    changeClick2(row) {
      this.$router.push({
        path: "/dues",
        query: {
          dues_title: row.dues_title,
          dues_work: row.dues_work,
          dues_now: row.dues_now,
          dues_date: row.dues_date,
          dues_state: row.dues_state,
          dues_price: row.dues_price,
          dues_time: row.dues_time,
          dues_id:row.dues_id,
        }
      });
    },

//项目处理
//项目页面数据处理
  getData3(pno = 1) {
     
      var { url="item_start", n,open_close } = this.$route.query;
       this.open_close = open_close;
      var obj={item_work:n,pageSize:9,pno}
      this.axios.get(url, { params: obj }).then(result => {
        var list1 = result.data.list;
        var total = result.data.total;
        this.total = total;
        this.add_fenye3(list1);
      });
    },

  //项目导航
    item_(url, n) {
      window.location.href = `/#/form?url=${url}&n=${n}&open_close=2`;
      this.reload(); 
    },

    //删除item
    handleClick3(row) {
      var item_work = row.item_work;
      var item_id1 = row.item_id;
      this.$confirm("此操作将永久删除该条记录，是否继续?", "提示", {
        confirmeButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          var obj = { item_id: item_id1 };
          this.axios.get("delete_item_id", { params: obj }).then(result => {
            console.log(result.data.code);
            if (result.data.code == 1) {
              console.log(666);
              this.reload();
            }
          });
          this.$message({
            type: "sucess",
            message: "删除成功"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    //修改item
    changeClick3(row) {
      this.$router.push({
        path: "/item",
        query: {
          item_title: row.item_title,
          item_work: row.item_work,
          item_date: row.item_date,
          item_state: row.item_state,
          item_price: row.item_price,
          item_time: row.item_time,
          item_id: row.item_id,
        }
      });
    }, 

    //  项目页面数据分页后显示
    add_fenye3(list1) {
      let data = [];
        for (let i = 0; i < list1.length; i++) {
          let obj = {};
          if (list1[i].item_state == 0) {
            list1[i].item_state = "正常";
          } else if (list1[i].item_state == 1) {
            list1[i].item_state = "重要";
          } else {
            list1[i].item_state = "紧急";
          }
          if (list1[i].item_work == 1) {
            list1[i].item_work = "项目立项申请";
          } else if (list1[i].item_work == 2) {
            list1[i].item_work = "项目经理变更流程";
          } else if (list1[i].item_work == 3) {
            list1[i].item_work = "项目单据快递确认流程";
          }
          if (list1[i].item_time == 1) {
            list1[i].item_time = "1月之内";
          } else if (list1[i].item_time == 2) {
            list1[i].item_time = "半年之内";
          } else if (list1[i].dues_now == 0) {
            list1[i].item_time = "一年之内";
          }
          obj.item_id = list1[i].item_id;
          obj.item_state = list1[i].item_state;
          obj.item_time = list1[i].item_time;
          obj.item_price = list1[i].item_price;
          obj.item_work = list1[i].item_work;
          obj.item_title = list1[i].item_title;
          obj.item_date = list1[i].item_date;
          obj.item_uname = list1[i].uname;
          data[i] = obj;
        
      }
      //给数据源赋值
      this.tableData3 = data;
    },
    
  
  },
   watch:{
   
  },
};
</script>
<style scoped>
a {
  text-decoration: none;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  width: 220px !important;
}
.head-button button {
  margin: 0 100px;
}
.el-main {
  position: relative;
}
.has-gutter tr th {
  background: red !important;
}
.el-submenu_title {
  font-size: 20px !important;
  color: red !important;
}
.hidden {
  display: none !important;
}

.pagination {
  position: fixed;
  top: 700px;
  left: 600px;
}
</style>
