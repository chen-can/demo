export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
    meta: {
      title: '搜索列表页',
      keepAlive: true // 标记页面是否需要被缓存，若不需要做缓存时，可以不加keepAlive标记
    }
  }
]
