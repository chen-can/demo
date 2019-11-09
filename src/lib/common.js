let common = {
  data() {
    return {
      isLoadedData: false,
      smsBtnData: {
        smsBtnStatus: true,
        smsBtnText: '获取验证码'
      }
    }
  },
  mounted() {
    if (/Android/gi.test(navigator.userAgent)) {
      window.addEventListener(
        'resize',
        () => {
          if (
            document.activeElement.tagName == 'INPUT' ||
            document.activeElement.tagName == 'TEXTAREA'
          ) {
            window.setTimeout(function() {
              document.activeElement.scrollIntoViewIfNeeded()
            }, 0)
          }
        },
        false
      )
    }
  },
  methods: {
    //删除空值的对象
    removeProperty(object) {
      for (let prop in object) {
        if (object[prop] === '' || object[prop] === null) {
          delete object[prop]
        }
      }
    },
    // 从url上获取query参数
    getQueryString(name) {
      let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      let r = window.location.search.substr(1).match(reg)
      if (r != null) return decodeURIComponent(r[2])
      return null
    }
  }
}
export default common
