/****
 * 封装请求工具request.js
 * 对于axios的二次封装
 * 配置拦截器以及其他
 ****/
import axios from 'axios'
import router from '@/router'
import JSONBig from 'json-bigint' // 引入第三方处理大数字的包

// 配置公共的请求头地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

// 对axios的返回数据进行自定义处理 用json-bigint替代原来的json
// transformResponse中要返回处理结果
axios.defaults.transformResponse = [function (data) {
  // 这里主要处理id超过大数字的时候 转化不正确的问题
  // data是响应回来的字符串
  return data ? JSONBig.parse(data) : {}
}]

// 配置请求拦截器
// 在请求拦截器中对所有的接口进行统一的token的注入
axios.interceptors.request.use(function (config) {
  // 成功了,执行第一个参数
  // config 是就是axios的所有请求信息
  const token = localStorage.getItem('user-token')
  config.headers.Authorization = ` Bearer ${token}`
  return config
}, function (error) {
  // 失败了,执行第二个参数
  // 失败,直接reject reject会直接进入到axios的catch中
  return Promise.reject(error)
})

// 配置响应拦截器
// 统一处理响应数据
axios.interceptors.response.use(function (response) {
  // 成功的时候执行
  // 回调函数的第一个参数是响应体
  // 在拦截器中将响应体数据进行解构,然后返回
  return response.data ? response.data : {} // 有的接口 没有任何的响应数据
}, function (error) {
  // 失败的时候执行
  // 401 钥匙过期/钥匙名不对/拿错钥匙....
  // 应该换一把新钥匙
  if (error.response.status === 401) {
    // 删除钥匙
    localStorage.removeItem('user-token')
    // 跳回登录页,重新登录,拿一把新钥匙
    router.push('/login')
  }
  // 进行错误处理
  // 所有的axios调用依然会进入到catch中
  return Promise.reject(error)
})

export default axios
