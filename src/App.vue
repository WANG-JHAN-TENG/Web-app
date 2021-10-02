<template>
  <Story v-show="goCheckStory"></Story>
  <NewStory v-if="goCheckNewStory"></NewStory>
  <template v-else>
    <SinglePhoto v-if="goCheckImg"></SinglePhoto>
    <template v-else>
      <Profile ></Profile>
      <Posts  v-if="showPosts"></Posts>
      <Tagged  v-else></Tagged>
    </template>
  </template>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SinglePhoto from './components/SinglePhoto.vue'
import Story from './components/Story.vue'
import Profile from './components/Profile.vue'
import Posts from './components/Posts.vue'
import Tagged from './components/Tagged.vue'
import NewStory from './components/NewStory.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    SinglePhoto,
    Story,
    Profile,
    Posts,
    Tagged,
    NewStory,
  },
  computed:{
    goCheckStory(){
      return this.$store.state.checkStory;
    },
    goCheckNewStory(){
      if(this.$store.state.checkNewStory && this.$store.state.story){
          return this.$store.state.checkNewStory;
      }
    },
    goCheckImg(){
      return this.$store.state.checkImg;
    },
    showPosts(){
      return this.$store.state.showPosts;
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
*{
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
}
body{
  width: 375px;
  margin: 0 auto;
}
</style>
