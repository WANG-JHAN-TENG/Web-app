import { createStore } from 'vuex'

export default createStore({
  state: {
    showTagged:false,
  },
  mutations: {
    goTagged(state){
      state.showTagged = true;
    },
    backPosts(state){
      state.showTagged = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
