const express = require('express')
const router = express.Router()
const news = require('./news')

router.get('/api/news/queryAll', (req, res, next) => {
  news.queryAll(req, res, next)
})

router.get('/api/news/query', (req, res, next) => {
  news.queryById(req, res, next)
})

router.post('/api/news/add', (req, res, next) => {
  news.add(req, res, next)
})

router.post('/api/news/update', (req, res, next) => {
  news.update(req, res, next)
})

router.post('/api/news/deleteNews', (req, res, next) => {
  news.deleteNews(req, res, next)
})

module.exports = router
