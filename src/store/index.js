import { createStore } from 'vuex'

export default createStore({
  state: {
    showPosts:true,
    checkImg:false,
  },
  mutations: {
    goTagged(state){
      state.showPosts = false;
    },
    backPosts(state){
      state.showPosts = true;
    },
    openPhoto(state){
      state.checkImg = true;
    },
    closePhoto(state){
      state.checkImg = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
