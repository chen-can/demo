import axios from 'axios'
import qs from 'qs'
// 在config.js文件中统一存放一些公共常量，方便之后维护
import baseURL from '@/config'
import { Toast } from 'vant'
// 创建axios实例----------------------------------------------------------------
const service = axios.create({
  baseURL: process.env.BASE_API, //环境的不同，对应不同的baseURL
  timeout: 5000 // 请求超时时间
})

// 添加请求拦截器，在发送请求之前做些什么------------------------------------------
service.interceptors.request.use(
  config => {
    // 显示loading
    return config
  },
  error => {
    // 请求错误时弹框提示，或做些其他事
    return Promise.reject(error)
  }
)

// 添加响应拦截器----------------------------------------------------------------
service.interceptors.response.use(
  response => {
    Toast.clear()
    if (!response.data.code) {
      //无status状态报错
      Toast('操作失败')
      return Promise.reject('操作失败')
    } else if (response.data.status != 0) {
      //status存在但不为0
      Toast(response.data.msg)
      return Promise.reject(response.data.msg)
    }
    return response.data
  },
  error => {
    // 对响应错误做点什么
    Toast('网络连接异常，请检查网络后刷新')
    return Promise.reject(error)
  }
)

// 封装axios----------------------------------------------------------------------
export const createAPI = (url, method, data, isShowLoading = true) => {
  const config = {}
  if (method === 'get') {
    config.params = data
  } else {
    config.data = qs.stringify(data)
  }

  if (isShowLoading) {
    Toast.loading({
      duration: 0, // 持续展示 toast
      forbidClick: true, // 禁用背景点击
      loadingType: 'spinner',
      message: '加载中'
    })
  }
  return service({
    url,
    method,
    ...config
  })
}
