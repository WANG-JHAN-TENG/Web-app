<template>
<div id="posts">
  <div class="post">
    <a href="#">
      <img src="https://placeimg.com/121/115/animals" alt="post">
    </a>
  </div>
  <div class="post">
    <a href="#">
      <img src="https://placeimg.com/121/115/animals" alt="post">
    </a>
  </div>
  <div class="post">
    <a href="#">
      <img src="https://placeimg.com/121/115/animals" alt="post">
    </a>
  </div>
  <div class="post">
    <a href="#">
      <img src="https://placeimg.com/121/115/animals" alt="post">
    </a>
  </div>
  <div class="post">
    <a href="#">
      <img src="https://placeimg.com/121/115/animals" alt="post">
    </a>
  </div>
  <div class="post">
    <a href="#">
      <img src="https://placeimg.com/121/115/animals" alt="post">
    </a>
  </div>
  <div class="post">
    <a href="#">
      <img src="https://placeimg.com/121/115/animals" alt="post">
    </a>
  </div>
  <div class="post">
    <a href="#">
      <img src="https://placeimg.com/121/115/animals" alt="post">
    </a>
  </div>
  <div class="post">
    <a href="#">
      <img src="https://placeimg.com/121/115/animals" alt="post">
    </a>
  </div>
  <div class="post">
    <a href="#">
      <img src="https://placeimg.com/121/115/animals" alt="post">
    </a>
  </div>
  <div class="post">
    <a href="#">
      <img src="https://placeimg.com/121/115/animals" alt="post">
    </a>
  </div>
  <div class="post">
    <a href="#">
      <img src="https://placeimg.com/121/115/animals" alt="post">
    </a>
  </div>
</div>
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

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#posts{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
#posts .post{
  padding-bottom: 3px;
  width: 33.3333%;
  height: 118px;
}
#posts a{
display: inline-block;
height: 0;
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
