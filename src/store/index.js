import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    profile:{},
    posts:[],
    pageId:"",
    igUserId:"",
    postId:[],
    storyId:[],
    story:"",
    showPosts:true,
    checkImg:false,
    aPost:{},
    checkStory:false,
    checkNewStory:false,
    photoId:null,
  },
  mutations: {
    login(state,response,res){
      if(response){
        state.profile = response.authResponse;
      }else{
        state.profile = res.authResponse;
      }
    },
    logout(){
      const vm = this;
      window.FB.getLoginStatus(function(response) {
        if (response.status === "connected") {
          window.FB.api("/me/permissions", "DELETE", function(res) {
            window.FB.logout();
            console.log(res)
          });
        } else {
          // do something
        }
      });
      vm.state.profile = {};
      vm.state.posts = [];
    },
    setShowPosts(state,status){
      state.showPosts = status;
    },
    getPosts(state,response){
      state.posts = response.data.data
    },
    getPageId(state,response){
      state.pageId = response.data.data[0].id;
    },
    getIGID(state,response){
        state.igUserId = response.data.instagram_business_account.id;
    },
    getPostId(state,response){
      state.postId = response.data.data;
    },
    getStoryID(state,response){
      state.storyId = response.data.data[0].id
    },
    getStory(state,response){
      state.story = response.data.media_url
    },
    openPhoto(state,index){
      state.checkImg = true;
      state.photoId = index;
    },
    getAPost(state,response){
      state.aPost = response.data;
    },
    closePhoto(state){
      state.checkImg = false;
      state.aPost = {};
    },
    checkNewStory(state){
      state.checkNewStory = true;
    },
    closeNewStory(state){
      state.checkNewStory = false;
    },
    openStory(state){
      state.checkStory = true;
    },
    closeStory(state){
      state.checkStory = false;
    }
  },
  actions: {
    fbInit(){
      if (!window.FB) {
        window.fbAsyncInit = function() {
          window.FB.init({
            appId: "4330660170304385",
            cookie: true,
            xfbml: true,
            version: "v12.0"
          });
        };
  
        (function(d, s, id) {
          var js,
            fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {
            return;
          }
          js = d.createElement(s);
          js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk.js";
          fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");
      }
    },
    login({commit}){
      return new Promise((resolve) =>{
        window.FB.getLoginStatus(function(response) {
          if (response.status === "connected") {
            console.log(response);
            commit('login',response)
            resolve()
          } else {
            window.FB.login(
              function(res) {
                console.log(res);
                commit('login',res)
                resolve()
              },
              { scope: "instagram_basic,pages_read_engagement,pages_show_list,instagram_manage_insights" },
            );
          }
        });
      })
    },
    getPosts({commit}){
      return new Promise((resolve) =>{
        axios.get('https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=IGQVJXVzFfVnE4dGE1dWNoZAWdEakZAOWVZApbHVqY0NmWlQzMWxBWmRsdGtncV9OOGp3Y19ySk43c2twYmVZAS3FCX016N1VLbVF0S05qYk5ha0txc2xiSEVuYnNiN1VENWJQcUw5YkJB')
        .then((response) =>{
          console.log(response)
          commit('getPosts',response)
          resolve()
        })
      })
    },
    getPageId({state,commit}){
      return new Promise((resolve) => {
        let userID = state.profile.userID;
        let token = state.profile.accessToken;
        let url = 'https://graph.facebook.com/v12.0/' + userID + '/accounts?access_token=' + token
        axios.get(url).then((response) =>{
          console.log(response);
          commit('getPageId',response)
          resolve()
        })
      })
    },
    getIGID({state,commit}){
      return new Promise((resolve) => {
        // let pageID = '104550935308122';
        let pageID = state.pageId ;
        let token = state.profile.accessToken;
        let url = 'https://graph.facebook.com/v12.0/' + pageID + '?fields=instagram_business_account&access_token=' + token
        axios.get(url).then((response) =>{
          console.log(response)
          commit('getIGID',response)
          resolve()
        })
      })
    },
    getPostId({state,commit}){
      return new Promise((resolve) =>{
        let igUserId = state.igUserId;
        let token = state.profile.accessToken;
        let url = 'https://graph.facebook.com/v12.0/' + igUserId + '/media?access_token=' + token
        axios.get(url).then((response) =>{
          console.log(response)
          commit('getPostId',response)
          resolve()
        })
      })
    },
    getStoryID({state,commit}){
      return new Promise((resolve) =>{
        let igUserId = state.igUserId;
        let token = state.profile.accessToken;
        let url = 'https://graph.facebook.com/v12.0/' + igUserId + '/stories?access_token=' + token
        axios.get(url).then((response) =>{
          console.log(response)
          commit('getStoryID',response)
          resolve()
        })
      })
    },
    getStory({state,commit}){
      return new Promise((resolve) =>{
        let storyId = state.storyId;
        let token = state.profile.accessToken;
        let url = 'https://graph.facebook.com/v12.0/' + storyId + '?fields=media_url&access_token=' +token
        axios.get(url).then((response) =>{
          console.log(response)
          commit('getStory',response)
          resolve()
        })
      })
    },
    getAPost({state,commit}){
      return new Promise((resolve) =>{
        let id = state.photoId
        let postID = state.postId[id].id
        let token = state.profile.accessToken;
        let url = 'https://graph.facebook.com/v12.0/' + postID + 
        '?fields=caption%2Clike_count%2Cmedia_product_type%2Cmedia_url&access_token=' + token
        axios.get(url).then((response) =>{
          console.log(response)
          commit('getAPost',response)
          resolve()
        })
      })
    },
    showPage({dispatch}){
      return dispatch('login')
      .then(() =>{
        return dispatch('getPageId')
      })
      .then(() =>{
        return dispatch('getIGID')
      })
      .then(() =>{
        return dispatch('getPostId')
      })
      .then(() =>{
        return dispatch('getPosts')
      })
      .then(() =>{
        return dispatch('getStoryID')
      })
      .then(() =>{
        return dispatch('getStory')
      })
    },
  },
  modules: {
  }
})
