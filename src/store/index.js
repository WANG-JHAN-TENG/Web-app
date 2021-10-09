import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    profile:{},
    posts:[],
    pageId:"",
    igUserId:"",
    basicInfo:{},
    postId:[],
    story:"",
    mentionedLists:[],
    showPosts:true,
    isChose:true,
    Chose:false,
    checkImg:false,
    aPost:{},
    comments:[],
    commentIndex:"",
    hideReplyButton:true,
    newReply:"",
    comInComs:[],
    newCom:"",
    deleteId:"",
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
      vm.state.basicInfo = {};
      vm.state.posts = [];
      vm.state.mentionedLists = [];
    },
    setShowPosts(state,status){
      state.showPosts = status;
    },
    getPageId(state,response){
      state.pageId = response.data.data[0].id;
    },
    getIGID(state,response){
        state.igUserId = response.data.instagram_business_account.id;
    },
    basicInfo(state,response){
      state.basicInfo = response.data
    },
    getPostId(state,response){
      state.postId = response.data.data;
    },
    getPosts(state,values){
      // state.posts.push(response.data);
      // state.posts.sort(function(a, b){
      //   return a.index - b.index;
      // });
      state.posts = values;
    },
    getStory(state,response){
      state.story = response.data.media_url
    },
    mentionedList(state,response){
      state.mentionedLists = response.data.data
    },
    openPhoto(state,index){
      state.checkImg = true;
      state.photoId = index;
    },
    getAPost(state){
      // state.aPost = response.data;
      let id = state.photoId
      state.aPost = state.posts[id]
    },
    getATaggedPost(state){
      state.aPost = state.mentionedLists[state.photoId]
    },
    getComments(state,response){
      if(state.showPosts == true){
        state.comments = response.data.data
        state.hideReplyButton = true;
      }else{
        state.comments = response.data.mentioned_media.comments.data
        state.hideReplyButton = false;
      }
    },
    ckeckReply(state,{response,i}){
      let obj = state.comments[i]
      let add = {replies : response.data.data}
      state.comments[i] = Object.assign({},obj,add)
      // console.log(state.comments[i])
    },
    checkUsername(state,{response,i}){
      let obj = state.comments[i]
      let add = {username : response.data.username}
      state.comments[i] = Object.assign({},obj,add)
      // console.log(state.comments[i])
    },
    closePhoto(state){
      state.checkImg = false;
      state.aPost = {};
      state.comments = [];
      state.comInComs = [];
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
      return new Promise((resolve) =>{
        if (!window.FB) {
          window.fbAsyncInit = function() {
            window.FB.init({
              appId: "4330660170304385",
              cookie: true,
              xfbml: true,
              version: "v12.0"
            });
            resolve()
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
      })
    },
    checkLoginOrNot({commit}){
      return new Promise((resolve) =>{
        window.FB.getLoginStatus(function(response) {
          if (response.status === "connected") {
            console.log(response);
            commit('login',response)
            resolve()
          }
        });
      })
    },
    login({commit}){
      return new Promise((resolve) =>{
        window.FB.login(
          function(res) {
            console.log(res);
            commit('login',res)
            resolve()
          },
          { scope: "instagram_basic,pages_read_engagement,pages_show_list,instagram_manage_insights,instagram_manage_comments" },
        );
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
    basicInfo({state,commit}){
      return new Promise((resolve) =>{
        let igUserId = state.igUserId;
        let token = state.profile.accessToken;
        let url = 'https://graph.facebook.com/v12.0/' + igUserId + '?fields=followers_count%2Cmedia_count%2Cbiography%2Cfollows_count%2Cname%2Cprofile_picture_url%2Cusername&access_token=' + token
        axios.get(url).then((response) =>{
          console.log(response)
          commit('basicInfo',response)
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
    getPosts({state,commit}){
      return new Promise((resolve) =>{
        // for (let i = 0; i < state.postId.length; i++){
        //   let postID = state.postId[i].id
        //   let token = state.profile.accessToken;
        //   let url = 'https://graph.facebook.com/v12.0/' + postID + 
        //   '?fields=caption%2Clike_count%2Cmedia_product_type%2Cmedia_url&access_token=' + token
        //   axios.get(url).then((response) =>{
        //     // console.log(response)
        //     response.data.index = i;
        //     commit('getPosts',response)
        //   })
        // }
        // console.log(state.posts)
        let axiosArray = [];
        let callAxios = function(index){
            return axios.get(index);
        } 
        for (let i = 0; i < state.postId.length; i++){
          let postID = state.postId[i].id
          let token = state.profile.accessToken;
          let url = 'https://graph.facebook.com/v12.0/' + postID + 
          '?fields=caption%2Clike_count%2Cmedia_product_type%2Cmedia_url&access_token=' + token
            let object = callAxios(url);
            axiosArray.push(object)
        }
        axios.all(axiosArray).then(function(values){
          for(let i = 0; i < values.length; i++){
            let value = values[i].data;
            values[i] = Object.assign({},value)
            commit('getPosts',values)
            resolve()
          }
          console.log(state.posts)
        })
      })
    },
    getStoryID({state}){
      return new Promise((resolve) =>{
        let igUserId = state.igUserId;
        let token = state.profile.accessToken;
        let url = 'https://graph.facebook.com/v12.0/' + igUserId + '/stories?access_token=' + token
        axios.get(url).then((response) =>{
          console.log(response)
          resolve(response)
        })
      })
    },
    getStory({state,commit},response){
      return new Promise((resolve) =>{
        if(response.data.data.length > 0){
          let storyId = response.data.data[0].id
          let token = state.profile.accessToken;
          let url = 'https://graph.facebook.com/v12.0/' + storyId + '?fields=media_url&access_token=' +token
          axios.get(url).then((response) =>{
            console.log(response)
            commit('getStory',response)
            resolve()
          })
        }else{
          console.log('No new story.')
          resolve()
        }
      })
    },
    mentionedList({state,commit}){
      return new Promise((resolve) =>{
        let igUserId = state.igUserId
        let token = state.profile.accessToken;
        let url = 'https://graph.facebook.com/v12.0/' + igUserId + '/tags?fields=caption%2Clike_count%2Cmedia_product_type%2Cmedia_url&access_token=' + token
        axios.get(url).then((response) =>{
          console.log(response)
          commit('mentionedList',response)
          resolve()
        })
      })
    },
    getAPost({state,commit}){
      return new Promise((resolve) =>{
        if(state.showPosts == true){
          // let id = state.photoId
          // let postID = state.postId[id].id
          // let token = state.profile.accessToken;
          // let url = 'https://graph.facebook.com/v12.0/' + postID + 
          // '?fields=caption%2Clike_count%2Cmedia_product_type%2Cmedia_url&access_token=' + token
          // axios.get(url).then((response) =>{
          //   console.log(response)
          //   commit('getAPost',response)
          //   resolve()
          // })
          commit('getAPost')
          resolve()
        }else{
          commit('getATaggedPost')
          resolve()
        }
      })
    },
    getComments({state,commit}){
      return new Promise((resolve) =>{
        if(state.showPosts == true){
          let id = state.photoId
          let postID = state.posts[id].id
          let token = state.profile.accessToken;
          let url = 'https://graph.facebook.com/v12.0/' + postID + '/comments?access_token=' + token
          axios.get(url).then((response) =>{
            console.log(response)
            commit('getComments',response)
            resolve()
          })
        }else{
          let igUserId = state.igUserId 
          let id = state.photoId
          let postID = state.mentionedLists[id].id
          let token = state.profile.accessToken;
          let url = 'https://graph.facebook.com/v12.0/' + igUserId + '?fields=mentioned_media.media_id(' + postID + ')%7Bcaption%2Ccomments%7D&access_token=' +token
          axios.get(url).then((response) =>{
            console.log(response)
            commit('getComments',response)
            resolve()
          })
        }
      })
    },
    ckeckReply({state,commit}){
      return new Promise((resolve) =>{
        if(state.showPosts == false){
          console.log("Can't get reply.")
          resolve()
        }else if(state.comments.length > 0){
          for (let i = 0; i < state.comments.length; i++){
            let commentID = state.comments[i].id;
            let token = state.profile.accessToken;
            let url = 'https://graph.facebook.com/v12.0/' + commentID + '/replies?access_token=' + token
            axios.get(url).then((response) =>{
              // console.log(response)
              commit('ckeckReply',{response,i})
            })
            resolve()
          }
        }else{
          console.log('No new reply.')
          resolve()
        }
      })
    },
    checkUsername({state,commit}){
      return new Promise((resolve) =>{
        if(state.showPosts == false){
          console.log("Can't get username")
          resolve()
        }else{
          for (let i = 0; i < state.comments.length; i++){
            let commentID = state.comments[i].id;
            let token = state.profile.accessToken;
            let url = 'https://graph.facebook.com/v12.0/' + commentID + '?fields=username%2Ctext&access_token=' + token
            axios.get(url).then((response) =>{
              console.log(response)
              commit('checkUsername',{response,i})
            })
            resolve()
          }
        }
      })
    },
    addComment({state}){
      return new Promise((resolve) =>{
        if(state.showPosts == true){
          let id = state.photoId
          let postID = state.postId[id].id
          let reply = state.newCom
          let token = state.profile.accessToken;
          let url = 'https://graph.facebook.com/v12.0/' + postID + '/comments?message=' + reply + '&access_token=' + token
          axios.post(url).then((response) =>{
            console.log('Add '+ response + ' success!')
            resolve()
          })
        }else{
          let id = state.photoId
          let postID = state.mentionedLists[id].id
          let newCom = state.newCom
          let token = state.profile.accessToken;
          let url = 'https://graph.facebook.com/v12.0/' + postID + '/comments?message=' + newCom + '&access_token=' + token
          axios.post(url).then((response) =>{
            console.log('Add '+ response + ' success!')
            resolve()
          })
        }
      })
    },
    addReply({state}){
      return new Promise((resolve) =>{
        let index = state.commentIndex;
        let commentID = state.comments[index].id
        let newReply = state.newReply
        let token = state.profile.accessToken;
        let url = 'https://graph.facebook.com/v12.0/' + commentID + '/replies?message=' + newReply +'&access_token=' + token
        axios.post(url).then((response) =>{
          console.log('Add '+ response + ' success!')
          resolve()
        })
      })
    },
    openSinglePhoto({dispatch}){
      return dispatch('getAPost')
      .then(() =>{
        return dispatch('getComments')
      })
      .then(() =>{
        return dispatch('ckeckReply')
      })
      .then(() =>{
        return dispatch('checkUsername')
      })
    },
    refreshCom({dispatch}){
      return dispatch('addComment')
      .then(() =>{
        return dispatch('getComments')
      })
      .then(() =>{
        return dispatch('ckeckReply')
      })
      .then(() =>{
        return dispatch('checkUsername')
      })
    },
    refreshReply({dispatch}){
      return dispatch('addReply')
      .then(() =>{
        return dispatch('ckeckReply')
      })
    },
    deleteCom({state}){
      return new Promise((resolve) =>{
        let index = state.deleteId;
        let commentId = state.comments[index].id
        let token = state.profile.accessToken;
        let url = "https://graph.facebook.com/v12.0/" + commentId + "?access_token=" + token
        axios.delete(url).then((response) =>{
          console.log(response)
          resolve()
        })
      })
    },
    afterDelete({dispatch}){
      return dispatch('deleteCom')
      .then(() =>{
        return dispatch('getComments')
      })
      .then(() =>{
        return dispatch('ckeckReply')
      })
      .then(() =>{
        return dispatch('checkUsername')
      })
    },
    initAndShow({dispatch}){
      return dispatch('fbInit')
      .then(() =>{
        return dispatch('checkLoginOrNot')
      })
      .then(() =>{
        return dispatch('getPageId')
      })
      .then(() =>{
        return dispatch('getIGID')
      })
      .then(() =>{
        return dispatch('basicInfo')
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
      .then((response) =>{
        return dispatch('getStory',response)
      })
    },
    loginAndShow({dispatch}){
      return dispatch('login')
      .then(() =>{
        return dispatch('getPageId')
      })
      .then(() =>{
        return dispatch('getIGID')
      })
      .then(() =>{
        return dispatch('basicInfo')
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
      .then((response) =>{
        return dispatch('getStory',response)
      })
    },
  },
  modules: {
  }
})
