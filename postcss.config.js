module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
    },
    'postcss-pxtorem': {
      rootValue: 75, // 换算的基数
      selectorBlackList: ['van'], // 忽略转换正则匹配项
      propList: ['*']
    }
  }
}
