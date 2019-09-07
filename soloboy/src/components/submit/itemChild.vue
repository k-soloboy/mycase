<template>
    <div>
        <el-table
    :data="tableData3" 
    border
    style="width: 100%">
    <div class="hidden">
    <el-table-column
      fixed
      prop="item_title"
      label="请求标题"
      width="220">
    </el-table-column>
    <el-table-column
      prop="item_work"
      label="工作流"
      width="180">
    </el-table-column>
    <el-table-column
      prop="item_date"
      label="接收日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="item_uname"
      label="创建人"
      width="100">
    </el-table-column>
    <el-table-column
      prop="item_price"
      label="启动资金"
      width="120">
    </el-table-column>
     <el-table-column
      prop="item_time"
      label="项目工期"
      width="100">
    </el-table-column>
     <el-table-column
      prop="item_state"
      label="紧急状况"
      width="100">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
       <template slot-scope="scope">
        <el-button  type="text"  size="small" @click="changeClick3(scope.row)">修改</el-button>
        <el-button @click="handleClick3(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
    </div>
  </el-table>

    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
     props:{
                tableData3:{default:[]},
                changeClick3:{type:Function},
                handleClick3:{type:Function}
            },
}
</script>
