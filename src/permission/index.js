/*****
 * 专门处理路由权限的问题
 */
import router from '@/router'

// 注册全局前置守卫
// 回调函数会在路由发生改变之前执行
router.beforeEach(function (to, from, next) {
  // 判断你要去的页面是不是以/home开头
  if (to.path.startsWith('/home')) {
    // 如果去主页
    const token = window.localStorage.getItem('user-token')
    if (token) {
      // 有token 放过
      next()
    } else {
      // 没有token
      next('/login') // 回登录页
    }
  } else {
    // 如果不是去主页 放过
    next()
  }
})
