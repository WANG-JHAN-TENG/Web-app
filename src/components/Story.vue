<template>
  <div class="anime" @click="closeStory">
    <a href="#"><img src="https://placeimg.com/375/667/arch" alt="#"></a>
    <a href="#"><img src="https://placeimg.com/375/667/animals" alt="#"></a>
    <a href="#"><img src="https://placeimg.com/375/667/nature" alt="#"></a>
    <a href="#"><img src="https://placeimg.com/375/667/people" alt="#"></a>
    <a href="#"><img src="https://placeimg.com/375/667/tech" alt="#"></a>
  </div>
</template>

<script>
export default {
  name: 'Story',
  props: {
  },
  methods:{
    closeStory(){
      this.$store.commit('closeStory');
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
  filter: alpha(opacity=0); */
  /*動畫全長時間設定*/
  -webkit-animation: slider 20s linear infinite;
  animation: slider 20s linear infinite;
}
 
/*動畫關鍵影格, slider動畫名字*/
  @-webkit-keyframes slider {
    0% {
      opacity: 1;
      filter: alpha(opacity=100);
    }
     19.5% {
    opacity: 1;
    filter: alpha(opacity=100);
    }
    20% {
    opacity: 0;
    filter: alpha(opacity=0);
    }
  }
  @keyframes slider {
    0% {
      opacity: 1;
      filter: alpha(opacity=100);
    }
     19.5% {
    opacity: 1;
    filter: alpha(opacity=100);
    }
    20% {
    opacity: 0;
    filter: alpha(opacity=0);
    }
    100% {
    opacity: 0;
    filter: alpha(opacity=0);
    }
  }
 
/*每個圖片相隔4秒*/
  .anime a:nth-child(1) {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
 
  .anime a:nth-child(2) {
    -webkit-animation-delay: 4s;
    animation-delay: 4s;
  }
 
  .anime a:nth-child(3) {
    -webkit-animation-delay: 8s;
    animation-delay: 8s;
  }
 
  .anime a:nth-child(4) {
    -webkit-animation-delay: 12s;
    animation-delay: 12s;
  }
 
  .anime a:nth-child(5) {
    -webkit-animation-delay: 16s;
    animation-delay: 16s;
  }
 
/*當滑鼠移動到圖片的區塊時，動畫暫停*/
  .anime a:hover{
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
  }
</style>
