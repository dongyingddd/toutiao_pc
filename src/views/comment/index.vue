<template>
    <el-card>
        <!-- 放置一个面包屑组件 -->
        <bread-crumb>
            <span slot="title">评论管理</span>
        </bread-crumb>

        <!-- 放置一个表格组件 -->
        <el-table :data="list" >
            <el-table-column prop="" label="标题" width="500" ></el-table-column>
            <el-table-column prop="" label="评论状态"></el-table-column>
            <el-table-column prop="" label="总评论数"></el-table-column>
            <el-table-column prop="" label="粉丝评论数"></el-table-column>
            <el-table-column label="操作"></el-table-column>
        </el-table>
    </el-card>

</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  }

}
</script>

<style>

</style>
