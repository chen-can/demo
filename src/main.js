// 基础
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 界面
import './icons' // icon图标

import 'amfe-flexible' // 用于设置 rem 基准值
import './lib/vant'

// 功能
import './lib/validate' // 验证

// 过滤器
import * as filters from './lib/filters'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 调试
import vConsole from 'vconsole' // 移动端控制台
// new vConsole()

// 兼容
import fastclick from 'fastclick' // 解决移动端点击延迟
fastclick.attach(document.body)

//全局方法
import dayjs from 'dayjs'
Vue.prototype.$dayjs = dayjs

import common from './lib/common'
Vue.mixin(common)

//全局API接口
import * as Api from '@/api'
Vue.prototype.$api = Api

//全局组件
import cmdResultPage from '_c/cmd-result-page/cmd-result-page.vue'
Vue.component('cmd-result-page', cmdResultPage)

// 默认
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
