// 注册我们自己开发的所有组件

import LayoutAside from './home/layout-aside'
import LayoutHeader from './home/layout-header'

export default {
  install: function (Vue) {
    Vue.component('layout-aside', LayoutAside)
    Vue.component('layout-header', LayoutHeader)
  }
}
