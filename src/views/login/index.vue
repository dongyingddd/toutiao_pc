<template>
  <div class="login">
      <el-card class="login-card">
        <!-- 放置标题图片 -->
        <div class="title">
          <img src='../../assets/img/logo_index.png' alt="">
        </div>
        <!-- 放置表单 -->
        <el-form :model="loginForm" :rules="loginRules">
          <el-form-item prop="mobile">
            <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input v-model="loginForm.code" placeholder="验证码" style="width:60%"></el-input>
            <el-button plain style="float:right">发送验证码</el-button>
          </el-form-item>
          <el-form-item prop="checked">
            <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button style="width: 100%" type="primary">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 登录表单数据
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        checked: false // 是否同意用户协议
      },
      loginRules: {

      }
    }
  }
}
</script>

<style lang="less" scoped>
  .login{
    background-image: url('../../assets/img/login_bg.jpg');
    height:100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-card{
      width: 440px;
      height: 350px;
      .title{
        text-align: center;
        margin-bottom: 30px;
        img {
          height:45px;
        }
      }
    }
  }
</style>
