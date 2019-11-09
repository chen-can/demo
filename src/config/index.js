let baseURL = '' // 这里是一个默认的url，可以没有

if (!window.location.origin) {
  window.location.origin =
    window.location.protocol +
    '//' +
    window.location.hostname +
    (window.location.port ? ':' + window.location.port : '')
} else {
  window.location.origin
}

let env =
  process.env.NODE_ENV === 'development'
    ? 'development'
    : process.env.VUE_APP_TITLE === 'test'
    ? 'test'
    : 'production'

switch (env) {
  case 'development':
    baseURL = 'http://127.0.0.1:3000' // 这里是本地的请求url
    break
  case 'test': // 注意这里的名字要和设置的模式名字对应起来
    baseURL = 'https://cs.internal.zbwlkj.net' // 这里是测试环境中的url
    break
  case 'production':
    baseURL = window.location.origin // 生产环境url
    break
}
export default baseURL
