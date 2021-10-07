<template>
<div id="head">
  <div class="undo" @click="closePhoto">&#60;</div>
  <div class="whoPost">
    ORANGECATXXL
    <h4>貼文</h4>
  </div>
</div>
<div id="userInfo">
  <div class="userPhoto">
    <img src="../assets/userphoto.jpg" alt="userPhoto" width="30">
  </div>
  <div class="user">
    oragnecatxxl
  </div>
  <div class="edit">
    ...
  </div>
</div>
<div class="pic">
  <div>
    <img :src=aPost.media_url alt="photograph" width="375">
  </div>
</div>
<div id="action">
  <div class="like">
    <img src="../assets/heart.png" alt="like" width="20" height="20">
  </div>
  <div class="comment">
    <img src="../assets/comment.png" alt="comment" width="20" height="20" @click="openReply">
  </div>
  <div class="share">
    <img src="../assets/share.png" alt="share" width="20" height="20">
  </div>
  <div class="collect">
    <img src="../assets/bookmark.png" alt="collect" width="20" height="20">
  </div>
</div>
<div id="whoLikes">
  <div class="miniImg">
    <img src="https://placeimg.com/20/20/people" alt="">
  </div>
  <div class="miniImg2">
    <img src="https://placeimg.com/20/20/people" alt="">
  </div>
  <div class="miniImg3">
    <img src="https://placeimg.com/20/20/people" alt="">
  </div>
  {{aPost.like_count}}
  <span>人</span>
  都說讚
</div>
<div id="title">
  {{aPost.caption}}
</div>
<div id="comments">
  <div class="replyPost">
    <input type="text" v-show="addNewReply" v-model="newReply" @keyup.enter="replyPost" 
    @keyup.esc="closeReply" placeholder="留言......" ref="replyFocus">
  </div>
  <ul class="comList">
    <li v-for="(comment,index) in comments" :key="comment.id">
      <div class="delete" @click="deleteCom(index)">X</div>
      <div class="content">
        {{comment.text}}
        <p @click="replyCom(index)">回覆</p>
          <div class="comInCom" v-for="n in comment.replies" :key="n.id">
            {{n.text}}
          </div>
      </div>
    </li>
  </ul>
  <div class="addCom">
    <input type="text" v-show="addNewCom" v-model="newCom" @keyup.enter="createCom" 
    @keyup.esc="closeComment" placeholder="回覆留言......" ref="autoFocus">
  </div>
</div>
</template>

<script>
export default {
  name: 'SinglePhoto',
  props: {
  },
  data() {
      return {
        addNewCom:false,
        newCom:"",
        addNewReply:false,
        newReply:"",
      };
  },
  computed:{
    aPost(){
      return this.$store.state.aPost;
    },
    comments(){
      return this.$store.state.comments;
    },
    comInComs(){
      return this.$store.state.comInComs;
    },
    commentIndex(){
      return this.$store.state.commentIndex;
    },
  },
  methods: {
    closePhoto(){
      this.$store.commit('closePhoto');
    },
    openReply(){
      this.addNewReply = true;
      this.$nextTick(()=> {
       this.$refs.replyFocus.focus();
      });
    },
    closeReply(){
      this.addNewReply = false;
    },
    replyPost(){
      this.$store.state.reply = this.newReply;
      this.$store.dispatch('refreshReply')
      this.newReply = "";
      this.addNewReply = false;
    },
    replyCom(index){
      this.$store.state.commentIndex = index;
      this.addNewCom = true;
      this.$nextTick(()=> {
       this.$refs.autoFocus.focus();
      });
    },
    closeComment(){
      this.addNewCom = false;
    },
    createCom(){
      this.$store.state.addCom = this.newCom;
      this.$store.dispatch('refreshCom')
      this.newCom = "";
      this.addNewCom = false;
    },
    deleteCom(index){
      this.$store.state.deleteId = index;
      let message = this.$store.state.comments[index].text
      let result = confirm("Delete comment " + message + " ?");
      if  (result){
          this.$store.dispatch('afterDelete')
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#head{
  display: flex;
  justify-content: center;
}
#head .undo{
  flex: 0 0 25%;
  font-size: 2rem;
  padding-left: 10px;
  cursor: pointer;
}
#head .whoPost{
  display: flex;
  flex-direction: column;
  flex: 0 0 75%;
  text-align: center;
  padding-right: 100px;
  padding-top: 5px;
  font-size: 0.7rem;
  font-weight: 400;
  color: grey;
}
#head .whoPost h4{
  margin: 0;
  font-size: 1rem;
  color: black;
}
#userInfo{
  display: flex;
  padding: 0 10px;
  margin-bottom: 7px;
}
#userInfo .userPhoto{
  padding: 1px;
  width: 34px;
  height: 34px;
  border: 1px solid #ccc;
  border-radius: 50%;
}
#userInfo .userPhoto img{
  /* border: 1px solid #ccc; */
  border-radius: 50%;
}
#userInfo .user{
  padding-left: 10px;
  flex: 1 0;
}
#userInfo .edit{
  cursor: pointer;
  letter-spacing: 2px;
}
#action{
  display: flex;
  padding: 10px;
}
#action .like{
  margin-right: 20px;
  cursor: pointer;
}
#action .comment{
  margin-right: 20px;
  cursor: pointer;
}
#action .share{
  flex: 1 0;
  cursor: pointer;
}
#action .collect{
  cursor: pointer;
}
#whoLikes{
  display: flex;
  padding: 0 10px;
  position: relative;
  font-weight: 200;
  font-size: 0.8rem;
  letter-spacing: 1px;
}
#whoLikes span{
  font-weight: 800;
}
#whoLikes img{
  border: 2px solid white;
  border-radius: 50%;
}
#whoLikes .miniImg{
  z-index: 3;
}
#whoLikes .miniImg2{
  position: relative;
  left:-7px;
  z-index: 2;
}
#whoLikes .miniImg3{
  position: relative;
  left:-14px;
  z-index: 1;
}
#title{
  padding: 0 10px;
  font-size: 0.8rem;
}
#comments .comList{
  margin: 5px 0;
  padding-left: 10px;
  list-style-type: none;
}
#comments .delete{
  margin-left: 7px;
  position: absolute;
  right: 1px;
  top: 1px;
  font-size: 0.6rem;
  color: black;
  cursor: pointer;
}
#comments li{
  position: relative;
  display: flex;
  margin-top: 10px;
}
#comments .replyPost input{
  width: 375px;
}
#comments .comInCom{
  margin-left: 10px;
  font-size: 0.6rem;
}
#comments .content{
  flex: 1;
  font-size: 0.8rem;
}
#comments .content p{
  margin: 0;
  margin-left: 25px;
  font-size: 0.5rem;
  color: rgb(138, 138, 138);
  cursor: pointer;
}
#comments .addCom{
  height: 25.4px;
}
#comments .addCom input{
  position: fixed;
  bottom: 0;
  width: 375px;
}
</style>
