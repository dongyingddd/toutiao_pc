<template>
  <div class="login">
      <el-card class="login-card">
        <!-- 放置标题图片 -->
        <div class="title">
          <img src='../../assets/img/logo_index.png' alt="">
        </div>
        <!-- 放置表单 -->
        <el-form ref="loginForm"  :model="loginForm" :rules="loginRules">
          <el-form-item prop="mobile">
            <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input v-model="loginForm.code" placeholder="验证码" style="width:60%"></el-input>
            <el-button plain style="float:right">发送验证码</el-button>
          </el-form-item>
          <el-form-item prop="checked">
            <el-checkbox v-model="loginForm.checked">我已阅读并同意用户协议和隐私条款</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button style="width: 100%" type="primary" @click="login">登录</el-button>
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
        // 手机号的验证规则
        mobile: [
          { required: true, message: '您的手机号不能为空' },
          { pattern: /^1[3-9]\d{9}$/, message: '您的手机号格式不正确' }
        ],
        // 验证码的验证规则
        code: [
          { required: true, message: '验证码不能为空' },
          { pattern: /^\d{6}$/, message: '验证码应该是6位数字' }
        ],
        // 是否同意用户协议的校验
        checked: [
          {
            validator: function (rule, value, callback) {
              value ? callback() : callback(new Error('您必须同意我们的霸王条款'))
            }
          }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.loginForm.validate().then((isOK) => {
        if (isOK) {
          // 校验通过
          this.$axios({
            url: '/authorizations',
            data: this.loginForm,
            method: 'post'
          }).then((result) => {
            // 登录成功
            // 把token存于本地缓存
            window.localStorage.setItem('user-token', result.data.data.token)
            // 编程式导航,跳转主页
            this.$router.push('/home')
          }).catch(() => {
            // 登录失败
            this.$message({
              type: 'error',
              message: '您的手机号或验证码有误!'
            })
          })
        } else {
          // 校验未通过
          console.log('校验未通过')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .login{
    //background-image: url('../../assets/img/login_bg.jpg');
    height:100vh;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    &:before{
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background-image: url('../../assets/img/login_bg.jpg');
      background-size: cover;
      filter: blur(2px)
    }
    .login-card{
      z-index: 2;
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
