<template>
<div id="head">
  <div class="user">jhanteng</div>
  <div class="space"></div>
  <div class="plus">+</div>
  <div class="list">|||</div>
</div>
<div id="mainBar">
  <div class="userphoto">
    <img src="https://placeimg.com/100/100/people" alt="userPhoto">
  </div>
  <div class="count">
    <div class="num">121</div>
    <div class="unit">貼文</div>
  </div>
  <div class="count">
    <div class="num">213</div>
    <div class="unit">粉絲</div>
  </div>
  <div class="count">
    <div class="num">246</div>
    <div class="unit">追蹤中</div>
  </div>
</div>
<div id="intro">
  <h4>汪展謄</h4>
</div>
<div id="picBar">
  <ul class="pics">
    <li class="pic">
      <div class="lifePic" @click="openStory">
        <a href="#">
          <img src="https://placeimg.com/50/50/nature" alt="picture">
        </a>
      </div>
      <div class="title">
        療癒
      </div>
    </li>
    <li class="pic">
      <div class="lifePic">
        <a href="#">
          <img src="https://placeimg.com/50/50/nature" alt="picture">
        </a>
      </div>
      <div class="title">
        逮丸的食物
      </div>
    </li>
    <li class="pic">
      <div class="lifePic">
        <a href="#">
          <img src="https://placeimg.com/50/50/nature" alt="picture">
        </a>
      </div>
      <div class="title">
        邊緣人日常
      </div>
    </li>
    <li class="pic">
      <div class="lifePic">
        <a href="#">
          <img src="https://placeimg.com/50/50/nature" alt="picture">
        </a>
      </div>
      <div class="title">
        出遊出油
      </div>
    </li>
    <li class="pic">
      <div class="lifePic">
        <a href="#">
          <img src="https://placeimg.com/50/50/nature" alt="picture">
        </a>
      </div>
      <div class="title">
        玩玩具
      </div>
    </li>
  </ul>
</div>
<div id="platforms">
  <div class="posts" :class="{chosen:isChose}" @click="backPosts">
    <img src="../assets/grid.png" alt="grid" width="20" height="20">
  </div>
  <div class="tagged" :class="{chosen:Chose}" @click="goTagged">
    <img src="../assets/tag.png" alt="tagged" width="20" height="20">
  </div>
</div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
  },
  data(){
    return{
      isChose:true,
      Chose:false,
    }
  },
  methods:{
    goTagged(){
      this.$store.commit('goTagged');
      this.isChose = false;
      this.Chose = true;
    },
    backPosts(){
      this.$store.commit('backPosts');
      this.isChose = true;
      this.Chose = false;
    },
    openStory(){
      this.$store.commit('openStory');
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#head{
  display: flex;
  padding: 10px 6px;
  position: sticky;
  top: 0;
  font-size: 1.5rem;
  background: rgb(255, 255, 255);
}
#head .user{
  margin-left: 10px;
  font-weight: 1000;
  cursor: pointer;
}
#head .space{
  flex: 1 0;
}
#head .plus,.list{
  transform: rotate(-90deg);
  cursor: pointer;
  letter-spacing: 1.5px;
}
#head .plus{
  margin-right: 25px;
}
#head .list{
  margin-right: 10px;
  font-size: 1rem;
}
#mainBar{
  margin: 15px;
  display: flex;
  align-items: center;
}
#mainBar .userphoto{
  margin-right: 30px;
}
#mainBar .userphoto img{
  border: none;
  border-radius: 50%;
}
#mainBar .count{
  margin: 0 15px;
  text-align: center;
}
#mainBar .unit{
  font-size: 0.75rem;
  font-weight: 500;
  color: rgb(51, 51, 51);
}
#intro{
  margin: 15px;
}
#intro h4{
  font-weight: 200;
}
#picBar .pics{
  display: flex;
  padding: 0;
  list-style-type: none;
  text-align: center;
  font-size: 0.75rem;
}
#picBar .pic{
  width: 20%;
}
#picBar img{
  padding: 3px;
  border: 1px solid #7c7c7c;
  border-radius: 50%;
}
#platforms{
  display: flex;
  position: sticky;
  top: 55.2px;
  padding-top: 5px;
  background: white;
}
#platforms .posts,.tagged{
  width: 50%;
  text-align: center;
  cursor: pointer;
}
#platforms .chosen{
  border-bottom: 1px solid black;
}
</style>
