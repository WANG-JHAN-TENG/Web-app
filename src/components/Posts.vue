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

</style>
