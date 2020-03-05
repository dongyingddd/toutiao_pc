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

// 配置响应拦截器
// 统一处理响应数据
axios.interceptors.response.use(function (response) {
  // 成功的时候执行
  // 回调函数的第一个参数是响应体
  // 在拦截器中将响应体数据进行解构,然后返回
  return response.data ? response.data : {} // 有的接口 没有任何的响应数据
}, function () {
  // 失败的时候执行
})

export default axios
