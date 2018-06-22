import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    contentDisplayed: null
  },
  mutations: {
    setContentType (state, contentType) {
      state.contentDisplayed = contentType
    }
  }
})

export default store
