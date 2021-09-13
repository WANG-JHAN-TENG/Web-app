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
  <h3>汪展謄</h3>
</div>

</template>

<script>
export default {
  name: 'Profile',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#head{
  display: flex;
  margin: 10px 6px;
  font-size: 1.5rem;
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
  margin-right: 15px;
  transform: rotate(-90deg);
  cursor: pointer;
  letter-spacing: 1.5px;
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
  color: rgb(187, 187, 187);
}
#intro{
  margin: 15px;
}
#intro h3{
  font-weight: 200;
}
</style>
