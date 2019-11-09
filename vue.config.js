const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const IS_PROD_OR_TEST = ['production', 'test'].includes(process.env.NODE_ENV)
//开启 gzip 压缩
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i

const BASE_URL = process.env.NODE_ENV === 'production' ? './' : '/demo' // ？后的第一个斜线指生产环境的根目录下运行

const customTheme = require('./van-custom-theme')
module.exports = {
  publicPath: BASE_URL, // 根域上下文目录
  outputDir: 'dist', // 构建输出目录 docs
  assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
  lintOnSave: true, // 是否开启eslint保存检测，有效值：ture | false | 'error'
  chainWebpack: config => {
    //使用 svg-icon 组件
    config.module
      .rule('svg')
      .exclude.add(resolve('src/icons'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    // 修复HMR
    config.resolve.symlinks(true)
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
      .set('_p', resolve('public'))
  },
  productionSourceMap: false, // 打包时不生成.map文件
  devServer: {
    open: true,
    // host: '0.0.0.0',
    port: 8080,
    disableHostCheck: true // 加这个就没事啦。
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:3000',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/api'
    //     }
    //   }
    // }
  },
  configureWebpack: config => {
    // cdn引用时配置externals
    // config.externals = {
    //   vue: 'Vue',
    //   'vue-router': 'VueRouter',
    //   vuex: 'Vuex',
    //   axios: 'axios'
    // }
    //开启 gzip 压缩
    if (IS_PROD_OR_TEST) {
      const plugins = []
      plugins.push(
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      )
      config.plugins = [...config.plugins, ...plugins]
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: customTheme.theme
      }
    }
  }
}
