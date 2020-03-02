<template>
  <div>
    <!-- 外层大容器 -->
      <el-container>
        <!-- 左边容器 -->
        <el-aside width="200px">
          侧边栏导航
        </el-aside>
        <!-- 右侧大容器 -->
        <el-container>
          <!-- 顶部 -->
          <el-header>顶栏容器</el-header>
          <!-- 中部区域 -->
          <el-main>
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

<style>

</style>
