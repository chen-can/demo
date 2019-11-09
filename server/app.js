// node 后端服务器
const express = require('express')
const bodyParser = require('body-parser') //解析post的请求
const app = express()
const router = require('./routers/router')

const PORT = 3000
// 解决跨域问题，网上成熟的解决方案，我是直接拷贝的
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Method", "*");
//   res.header("Access-Control-Allow-Headers","Content-Type");
//   res.header("Access-Control-Max-Age", "3600");
//   next();
// });

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// 后端api路由
app.use(router)

// 监听端口
app.listen(PORT, () => {
  console.log(`success listen at port: ${PORT}......`)
})
