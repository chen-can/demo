import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import zh from 'vee-validate/dist/locale/zh_CN'

// 配置中文
const config = {
  locale: 'zh_CN',
  dictionary: {
    zh_CN: zh
  }
}
Vue.use(VeeValidate, config)

// 覆盖原有提示
const dictionary = {
  zh_CN: {
    messages: {
      required: field => `${field}不能为空`
    },
    attributes: {
      email: '邮箱',
      password: '密码',
      name: '账号',
      phone: '手机'
    }
  }
}

Validator.localize(dictionary)

// 自定义验证规则
Validator.extend('isMobile', {
  getMessage: field => `${field}格式不正确`,
  validate: value => value.length == 11 && /^1[3456789]\d{9}$/.test(value)
})
