<template>
<Profile></Profile>
<Posts></Posts>
<Tagged></Tagged>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Profile from './components/Profile.vue'
import Posts from './components/Posts.vue'
import Tagged from './components/Tagged.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
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
  background: black;
  color: rgb(243, 243, 243);
}
</style>
