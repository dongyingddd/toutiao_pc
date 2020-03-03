<template>
  <el-row class="layout-header" type="flex" align="middle">
      <el-col class="left" :span="12">
          <i class="el-icon-s-fold"></i>
          <span>山炮传媒股份有限公司</span>
      </el-col>
      <el-col class="right" :span="12">
          <el-row type="flex" align="middle" justify="end">
              <!-- 头像 -->
              <img :src="userInfo.photo" alt="">
              <!-- 下拉菜单 -->
              <el-dropdown @command="clickMenu">
                  <span>{{userInfo.name}}</span>
                  <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="info">个人信息</el-dropdown-item>
                      <el-dropdown-item command="git">git地址</el-dropdown-item>
                      <el-dropdown-item command="logout">退出</el-dropdown-item>
                  </el-dropdown-menu>
              </el-dropdown>
          </el-row>
      </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    clickMenu (command) {
      if (command === 'info') {
        // 点击了个人信息
      } else if (command === 'git') {
        window.location.href = 'https://github.com/dongyingddd/toutiao_pc'
      } else {
        // 退出系统
        // 1. 删除token
        localStorage.removeItem('user-token')
        // 2. 跳转会登录页
        this.$router.push('/login')
      }
    }
  },
  created () {
    const token = localStorage.getItem('user-token')
    this.$axios({
      url: '/user/profile',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      this.userInfo = result.data.data
    })
  }
}
</script>

<style lang="less" scoped>
    .layout-header {
        height: 60px;
        background-color: rgba(225, 225, 225, 0.5);
        .left {
            i {
                font-size: 20px;
                margin-right: 10px;
            }
        }
        .right {
            img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                margin-right: 10px;
            }
        }
    }
</style>
