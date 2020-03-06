<template>
    <el-card>
        <!-- 放置面包屑组件 -->
        <bread-crumb slot="header">
           <template slot="title">图片管理</template>
        </bread-crumb>
        <!-- 放置标签页 -->
        <!-- v-model绑定的属性就是tal默认激活的页签 -->
        <el-tabs v-model="activeName">
            <el-tab-pane label="全部" name="all">
                全部素材
            </el-tab-pane>
            <el-tab-pane label="收藏" name="collect">
                收藏素材
            </el-tab-pane>
        </el-tabs>
    </el-card>
</template>

<script>
export default {
  data () {
    return {
      activeName: 'all',
      list: []
    }
  }
}
</script>

<style>

</style>
