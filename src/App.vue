<template>
<Story v-show="$store.state.checkStory"></Story>
<SinglePhoto v-if="$store.state.checkImg"></SinglePhoto>
<mainPage v-else>
  <Profile ></Profile>
  <Posts  v-if="$store.state.showPosts"></Posts>
  <Tagged  v-else></Tagged>
</mainPage>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import SinglePhoto from './components/SinglePhoto.vue'
import Story from './components/Story.vue'
import Profile from './components/Profile.vue'
import Posts from './components/Posts.vue'
import Tagged from './components/Tagged.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    SinglePhoto,
    Story,
    Profile,
    Posts,
    Tagged,
  }
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
