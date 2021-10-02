<template>
<ul id="posts">
  <li class="post" v-for="(post,index) in posts" :key="index" @click="openPhoto(index)">
      <div class="img">
        <img :src=post.media_url alt="post" width="121">
      </div>
  </li>
</ul>
<div id="footer">
  <div class="icon">
    <img src="../assets/home.png" alt="homepage" width="25" height="25">
  </div>
  <div class="icon">
    <img src="../assets/search.png" alt="search" width="25" height="25">
  </div>
  <div class="icon">
    <img src="../assets/plus-sign.png" alt="plus-sign" width="25" height="25">
  </div>
  <div class="icon">
    <img src="../assets/shopping-bag.png" alt="shopping-bag" width="25" height="25">
  </div>
  <div class="icon">
    <img src="../assets/profile-user.png" alt="profile-user" width="25" height="25">
  </div>
</div>
</template>

<script>
export default {
  name: 'Posts',
  props: {

  },
  data(){
    return{

    };
  },
  computed:{
    posts(){
      return this.$store.state.posts;
    }
  },
  methods:{
    openPhoto(index){
      this.$store.commit('openPhoto',index);
      this.$store.dispatch('getAPost');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#posts{
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
#posts .post{
  margin-bottom: 3px;
  width: 33.3333%;
  height: 115px;
  cursor: pointer;
  overflow-y: hidden;
}
#posts .post .imgH{
  position: relative;
  top: -35px;
}
#posts a{
display: inline-block;
}
#footer{
  display: flex;
  justify-content: space-around;
  align-content: center;
  position: sticky;
  bottom: 0px;
  background: white;
}
.icon{
  padding: 10px 0;
  cursor: pointer;
}
</style>
