import { createAPI } from '@/lib/request'

export const queryAll = data => createAPI('/api/news/queryAll', 'get', data)
export const query = data => createAPI('/api/news/query', 'get', data)
export const add = data => createAPI('/api/news/add', 'post', data)
export const update = data => createAPI('/api/news/update', 'post', data)
export const deleteNews = data =>
  createAPI('/api/news/deleteNews', 'post', data)
