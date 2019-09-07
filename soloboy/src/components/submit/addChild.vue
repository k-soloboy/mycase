<template>
    <div>
    <el-table
    :data="tableData1" 
    border
    style="width: 100%">
    <div class="hidden">
    <el-table-column
      fixed
      prop="oa_title"
      label="请求标题"
      width="230">
    </el-table-column>
    <el-table-column
      prop="oa_work"
      label="工作流"
      width="190">
    </el-table-column>
    <el-table-column
      prop="oa_now"
      label="当前节点"
      width="120">
    </el-table-column>
    <el-table-column
      prop="oa_date"
      label="接收日期"
      width="200">
    </el-table-column>
    <el-table-column
      prop="oa_uname"
      label="创建人"
      width="130">
    </el-table-column>
     <el-table-column
      prop="oa_state"
      label="紧急状况"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button  type="text"  size="small" @click="changeClick1(scope.row)">修改</el-button>
        <el-button @click="handleClick1(scope.row)" type="text" size="small">删除</el-button>
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
    } ,
    props:{
                tableData1:{default:[]},
                changeClick1:{type:Function},
                handleClick1:{type:Function}
            }
}
</script>
