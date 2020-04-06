import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /* 
      status
        0: To do
        1: Completed
    */
    contentList: [
      { id: 0, status: 0, text: 'Planing Meeting' },
      { id: 1, status: 0, text: '買禮物' },
      { id: 2, status: 1, text: 'Have a good dream' },
    ],
  },
  mutations: {
    SET_CONTENT_LIST (state, payload) {
      state.contentList = payload
    },
  },
  actions: {
  },
  modules: {
  }
})
