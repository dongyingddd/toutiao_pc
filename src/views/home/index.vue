<template>
  <div>
    <!-- 外层大容器 -->
      <el-container>
        <!-- 左边容器 -->
        <el-aside style="width:230px;">
          <layout-aside></layout-aside>
        </el-aside>
        <!-- 右侧大容器 -->
        <el-container class="right">
          <!-- 顶部 -->
          <el-header style="padding:0">
            <layout-header></layout-header>
          </el-header>
          <!-- 中部区域 -->
          <el-main style="padding:0">
            <!-- 二级路由容器 -->
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="less" scoped>
  .right{
    height: 100vh;
    overflow: auto;
  }
</style>
