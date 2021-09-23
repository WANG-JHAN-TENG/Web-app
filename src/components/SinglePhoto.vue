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
  <div  v-html="getPost[index].imgL"></div>
</div>
<div id="action">
  <div class="like">
    <img src="../assets/heart.png" alt="like" width="20" height="20">
  </div>
  <div class="comment">
    <img src="../assets/comment.png" alt="comment" width="20" height="20" @click="openComment">
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
  hsuwanttting和
  <span>其他17人</span>
  都說讚
</div>
<div id="title">
  {{getPost[index].title}}
</div>
<div id="comments">
  <div class="addCom">
    <input type="text" v-show="addNewCom" v-model="newCom" @keyup.enter="createCom" 
    @keyup.esc="closeComment" placeholder="留言......" ref="autoFocus">
  </div>
  <ul class="comList">
    <li v-for="(com,index) in coms" :key="index" data-id="com.id">
      <div
        v-show="editModeId !== com.id"
        class="content"
        @dblclick="enterEditMode(com ,$event)"
      >
        {{com.content}}
      </div>
      <input
        v-show="editModeId === com.id"
        v-model="com.content"
        @keyup.enter="updateCom"
        @keyup.esc="cancelUpdateCom(com)"
      />
      <div class="delete" v-show="editModeId === com.id" @click="deleteCom(com,index)">x</div>
    </li>
  </ul>
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
        newCom:'',
        editModeId:null,
        beforeUpdate:"",
        coms:[
            {
                id:1,
                content:'I am the first comment!',
            },
        ],
      };
  },
  computed:{
    getPost(){
      return this.$store.state.posts;
    },
    index(){
      return this.$store.state.photoId;
    }
  },
  methods: {
    closePhoto(){
      this.$store.commit('closePhoto');
    },
    openComment(){
      this.addNewCom = true;
      this.$nextTick(()=> {
       this.$refs.autoFocus.focus();
      });
    },
    closeComment(){
      this.addNewCom = false;
    },
    createCom(){
        let newCom = {
            id: this.coms.length +1,
            content:this.newCom,
        };
        this.coms.push(newCom);

        this.newCom = '';
        this.addNewCom = false;
    },
    enterEditMode(com,e){
        let input = e.target.nextElementSibling;
        this.editModeId = com.id;
        this.beforeUpdate = com.content;
        this.$nextTick(()=>{
            input.focus();
        });
    },
    updateCom(){
        this.leaveEditMode()
    },
    cancelUpdateCom(com){
        com.content = this.beforeUpdate;
        this.leaveEditMode()
    },
    leaveEditMode(){
        this.editModeId = null;
    },
    deleteCom(com,index){
        let result = confirm(`Delete comment: "${com.content}"?`);
        if  (result){
            this.coms.splice(index,1);
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
#userInfo .userPhoto img{
  border: 1px solid #ccc;
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
#comments li{
  display: flex;
}
#comments .content{
  flex: 1;
  font-size: 0.8rem;
}
#comments .delete{
  margin-left: 7px;
  color: black;
  cursor: pointer;
}
</style>
