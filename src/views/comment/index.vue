<template>
  <el-card >
        <!-- 放置一个面包屑组件 -->
        <bread-crumb slot="header">
            <span slot="title">评论管理</span>
        </bread-crumb>

        <!-- 放置一个表格组件 -->
        <el-table :data="list" >
            <el-table-column prop="title" label="标题" width="500" ></el-table-column>
            <el-table-column prop="comment_status" label="评论状态" :formatter="formatterTool"></el-table-column>
            <el-table-column prop="total_comment_count" label="总评论数"></el-table-column>
            <el-table-column prop="fans_comment_count" label="粉丝评论数"></el-table-column>
            <el-table-column label="操作">
                <!-- 自定义列的作用域插槽 -->
                <!-- el-table-column组件 在插槽中传出了 row $index store column  -->
                <!-- 作用域插槽->子组件中的数据通过插槽传出 slot-scope接收 row(行数据) $index(索引)-->
               <template slot-scope="obj">
                    <el-button size="small" type="text">修改</el-button>
                    <el-button size="small" type="text" @click='openOrClose(obj.row)'>{{obj.row.comment_status? '关闭':'打开'}}评论</el-button>
               </template>
            </el-table-column>
        </el-table>
        <el-row type="flex" style="height: 80px;" justify="center" align="center">
           <el-pagination background  layout="prev, pager, next"
           :total="page.total"
           :current-page="page.currentPage"
           :page-size="page.pageSize"
           @current-change="changePage">
           </el-pagination>
        </el-row>
    </el-card>

</template>

<script>
export default {
  data () {
    return {
      // 封装分页数据
      page: {
        // 总条数
        total: 0,
        // 当前页
        currentPage: 1,
        // 每页显示条数
        pageSize: 10
      },
      list: []
    }
  },
  methods: {
    // 加载评论数据
    getList () {
      this.$axios({
        url: '/articles',
        params: {
          response_type: 'comment',
          page: this.page.currentPage, // 当前页码
          per_page: this.page.pageSize // 每页显示条数
        },
        method: 'GET'
      }).then((result) => {
        this.list = result.data.results
        this.page.total = result.data.total_count
      })
    },
    // 过滤评论状态
    formatterTool (row, column, cellValue, index) {
      // row : 代表当前一行数据
      // column: 代表当前列信息
      // cellValue: 代表当前单元格的值
      // index: 代表当前索引
      // 该函数需要一个返回值用来显示
      // debugger
      return cellValue ? '正常' : '关闭'
    },
    // 打开或关闭评论
    openOrClose (row) {
      const mess = row.comment_status ? '关闭' : '打开'
      console.log('参数', JSON.stringify(row.id))
      this.$confirm(`您确定${mess}评论吗?`, '提示')
        .then(() => {
          this.$axios({
            url: '/comments/status',
            // query参数
            params: {
              article_id: row.id.toString() // 要求参数的文章id 将BigNumber类型转化为字符串
            },
            // body参数
            data: {
              allow_comment: !row.comment_status // 是打开还是关闭,此状态和文章评论状态相反
            },
            method: 'put'
          }).then(() => {
            // 成功了,提示个消息
            this.$message.success(`${mess}评论成功!`)
            // 然后重新拉取数据
            this.getList()
          }).catch((res) => {
            console.log('错误', res)
            // 失败了会进入到catch
            this.$message.error(`${mess}评论失败!`)
          })
        })
    },
    // 当前页码改变时触发的一个函数
    changePage (newPage) {
      this.page.currentPage = newPage
      this.getList()
    }
  },
  created () {
    this.getList()
  }

}
</script>

<style lang="less" scoped>

</style>
