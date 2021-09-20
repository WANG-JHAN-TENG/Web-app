<template>
  <div class="anime" @click="closeStory">
    <a href="#"><img src="../assets/story1.jpg" alt="#" width="375"></a>
    <a href="#"><img src="../assets/story2.jpg" alt="#" width="375"></a>
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
  opacity: 0;
  filter: alpha(opacity=0);
  /*動畫全長時間設定*/
  animation: slider 8s linear infinite;
}

/*每個圖片相隔4秒*/
  .anime a:nth-child(1) {
    animation-delay: 0s;
  }
  .anime a:nth-child(2) {
    animation-delay: 4s;
  }
 
/*當滑鼠移動到圖片的區塊時，動畫暫停*/
  .anime a:hover{
  animation-play-state: paused;
  }

/*動畫關鍵影格, slider動畫名字*/
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
  }
</style>
