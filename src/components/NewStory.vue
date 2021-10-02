<template>
  <div class="anime" @click="closeStory">
    <a href="#"><img :src=story alt="#" width="375"></a>
  </div>
</template>

<script>
export default {
  name: 'NewStory',
  props: {
  },
  computed:{
    story(){
      return this.$store.state.story
    }
  },
  methods:{
    closeStory(){
      this.$store.commit('closeNewStory');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.anime{
  z-index: 10;
  position: fixed;
  width: 375px;
  height: 812px;
  background: #000;
}
 
.anime a{
  display: block;
  position: absolute;
  top:5%;
  /* opacity: 0;
  filter: alpha(opacity=0);
  animation: slider 8s linear infinite; */
}

  /* .anime a:nth-child(1) {
    animation-delay: 0s;
  }
  .anime a:nth-child(2) {
    animation-delay: 4s;
  }
 
  .anime a:hover{
  animation-play-state: paused;
  }

  @keyframes slider {
    0.5% {
      opacity: 1;
      filter: alpha(opacity=100);
    }
     49.5% {
    opacity: 1;
    filter: alpha(opacity=100);
    }
    50% {
    opacity: 0;
    filter: alpha(opacity=0);
    }
  } */
</style>
