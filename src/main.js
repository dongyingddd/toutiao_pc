import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './permission'
import ElementUI from 'element-ui' // 引入element-ui
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import '@/styles/index.less' // 引入样式
import Components from '@/components'
import axios from '@/utils/request' // 引入配置公共请求地址和拦截器的axios
Vue.prototype.$axios = axios // 将axios设置给Vue对象的原型属性
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Components)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
