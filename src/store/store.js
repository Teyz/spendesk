import { createStore } from "vuex"

const store = createStore({
  state: {
    isShow: true
  },
  mutations: {
    setShowAction(state) {
      state.isShow = !state.isShow;
      console.log(state.isShow);
    },
    getShowAction(state) {
      console.log(state.isShow);
      return state.isShow;
    }
  }
})

export default store