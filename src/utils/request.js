/****
 * 封装请求工具request.js
 * 对于axios的二次封装
 * 配置拦截器以及其他
 ****/
import axios from 'axios'

// 配置公共的请求头地址
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

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

export default axios
