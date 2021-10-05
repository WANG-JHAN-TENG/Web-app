<template>
<ul id="posts">
  <li class="post" v-for="(mentionedList,index) in mentionedLists" :key="index" @click="openPhoto(index)">
      <div class="img">
        <img :src=mentionedList.media_url alt="post" width="121">
      </div>
  </li>
</ul>
<div id="footer">
  <div class="icons">
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
</div>
</template>

<script>
export default {
  name: 'Tagged',
  props: {

  },
  computed:{
    mentionedLists(){
      return this.$store.state.mentionedLists
    }
  },
  methods:{
    openPhoto(index){
      this.$store.commit('openPhoto',index);
      this.$store.dispatch('getAPost');
      this.$store.dispatch('getComments');
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
  height: 49.8px;
}
.icons{
  display: flex;
  justify-content: space-around;
  width: 375px;
  position: fixed;
  bottom: 0px;
  background: white;
}
.icon{
  padding: 10px 0;
  cursor: pointer;
}
</style>
