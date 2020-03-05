<template>
    <el-card>
        <!-- 放置一个面包屑组件 -->
        <bread-crumb>
            <span slot="title">评论管理</span>
        </bread-crumb>

        <!-- 放置一个表格组件 -->
        <el-table :data="list" >
            <el-table-column prop="title" label="标题" width="500" ></el-table-column>
            <el-table-column prop="comment_status" label="评论状态" :formatter="formatterTool"></el-table-column>
            <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
            <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
            <el-table-column label="操作">
                <el-button size="small" type="text">修改</el-button>
                <el-button size="small" type="text">关闭评论</el-button>
            </el-table-column>
        </el-table>
    </el-card>

</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    getList () {
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment'
        },
        method: 'GET'
      }).then((result) => {
        this.list = result.data.results
        console.log(result.data.results)
      })
    },
    formatterTool (row, column, cellValue, index) {
      // row : 代表当前一行数据
      // column: 代表当前列信息
      // cellValue: 代表当前单元格的值
      // index: 代表当前索引
      // 该函数需要一个返回值用来显示
      // debugger
      return cellValue ? '正常' : '关闭'
    }
  },
  created () {
    this.getList()
  }

}
</script>

<style>

</style>
