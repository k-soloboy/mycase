<template>
    <div>
        <el-table
    :data="tableData2" 
    border
    style="width: 100%">
    <div class="hidden">
    <el-table-column
      fixed
      prop="dues_title"
      label="请求标题"
      width="220">
    </el-table-column>
    <el-table-column
      prop="dues_work"
      label="工作流"
      width="180">
    </el-table-column>
    <el-table-column
      prop="dues_now"
      label="当前节点"
      width="120">
    </el-table-column>
    <el-table-column
      prop="dues_date"
      label="接收日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="dues_uname"
      label="创建人"
      width="80">
    </el-table-column>
    <el-table-column
      prop="dues_price"
      label="申请金额"
      width="100">
    </el-table-column>
      <el-table-column
      prop="dues_price"
      label="处理时间"
      width="80">
    </el-table-column>
     <el-table-column
      prop="dues_state"
      label="紧急状况"
      width="80">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button  type="text"  size="small" @click="changeClick2(scope.row)">修改</el-button>
        <el-button @click="handleClick2(scope.row)" type="text" size="small">删除</el-button>
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
                tableData2:{default:[]},
                  changeClick2:{type:Function},
                handleClick2:{type:Function}
            },
}
</script>
