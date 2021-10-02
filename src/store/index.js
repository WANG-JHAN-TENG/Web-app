import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    profile:{},
    posts:[],
    pageId:"",
    igUserId:"",
    postId:[],
    showPosts:true,
    checkImg:false,
    checkStory:false,
    photoId:null,
  },
  mutations: {
    login(){
      const vm = this;
      window.FB.getLoginStatus(function(response) {
        if (response.status === "connected") {
          console.log(response);
          vm.state.profile = response.authResponse;
        } else {
          window.FB.login(
            function(res) {
              console.log(res);
              vm.state.profile = res.authResponse;
            },
            { scope: "instagram_basic,pages_read_engagement,pages_show_list" },
          );
        }
      });
    },
    logout(){
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
    openPhoto(state,index){
      state.checkImg = true;
      state.photoId = index;
    },
    closePhoto(state){
      state.checkImg = false;
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
    getPost({state}){
      return new Promise((resolve) =>{
        let id = 0
        let postID = state.postId[id].id
        let token = state.profile.accessToken;
        let url = 'https://graph.facebook.com/v12.0/' + postID + 
        '?fields=caption%2Clike_count%2Cmedia_product_type%2Cmedia_url&access_token=' + token
        axios.get(url).then((response) =>{
          console.log(response)
          resolve()
        })
      })
    },
    showPage({dispatch}){
      return dispatch('getPageId')
      .then(() =>{
        return dispatch('getIGID')
      })
      .then(() =>{
        return dispatch('getPostId')
      })
      .then(() =>{
        return dispatch('getPost')
      })
    }
  },
  modules: {
  }
})
