import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import getters from './getters'
import user from './module/user'
Vue.use(Vuex)

const store = new Vuex.Store({
  getters,
  modules: {
    user
  },
  plugins: [createPersistedState()]
})
export default store
