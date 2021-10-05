<template>
<div id="login" v-show="toLogIn">
  <button @click="login">LOGIN</button>
  <button @click="logout">LOGOUT</button>
</div>
<div id="head">
  <div class="user">{{basicInfo.username}}</div>
  <div class="space"></div>
  <div class="plus">+</div>
  <div class="list" @click="openLogIn">|||</div>
</div>
<div id="mainBar">
  <div class="userphoto" @click="checkNewStory">
    <img :src=basicInfo.profile_picture_url alt="userPhoto" width="100">
  </div>
  <div class="count">
    <div class="num">{{basicInfo.media_count}}</div>
    <div class="unit">貼文</div>
  </div>
  <div class="count">
    <div class="num">{{basicInfo.followers_count}}</div>
    <div class="unit">粉絲</div>
  </div>
  <div class="count">
    <div class="num">{{basicInfo.follows_count}}</div>
    <div class="unit">追蹤中</div>
  </div>
</div>
<div id="intro">
  <h4>{{basicInfo.name}}</h4>
  <span>演員</span>
  <p>{{basicInfo.biography}}</p>
</div>
<div id="picBar">
  <ul class="pics">
    <li class="pic">
      <div class="lifePic" @click="openStory">
        <div class="img">
          <img src="../assets/story1.jpg" alt="picture" width="58">
        </div>
      </div>
      <div class="title">
        只是一個形象
      </div>
    </li>
  </ul>
</div>
<div id="platforms">
  <div class="posts" :class="{chosen:isChose}" @click="backPosts">
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="25" height="25" viewBox="0 0 25 25"
    preserveAspectRatio="xMinYMin meet">

      <g transform="translate(0.000000,0.000000) scale(0.00488)"
      fill="#A1A1A1" stroke="none">
      <path d="M0 2560 l0 -2560 2560 0 2560 0 0 2560 0 2560 -2560 0 -2560 0 0
      -2560z m1608 1608 l-3 -653 -652 -3 -653 -2 0 655 0 655 655 0 655 0 -2 -652z
      m1602 -3 l0 -655 -650 0 -650 0 0 655 0 655 650 0 650 0 0 -655z m1610 0 l0
      -655 -652 2 -653 3 -3 653 -2 652 655 0 655 0 0 -655z m-3210 -1605 l0 -650
      -655 0 -655 0 0 650 0 650 655 0 655 0 0 -650z m1600 0 l0 -650 -650 0 -650 0
      0 650 0 650 650 0 650 0 0 -650z m1610 0 l0 -650 -655 0 -655 0 0 650 0 650
      655 0 655 0 0 -650z m-3212 -1607 l2 -653 -655 0 -655 0 0 655 0 655 653 -2
      652 -3 3 -652z m1602 2 l0 -655 -650 0 -650 0 0 655 0 655 650 0 650 0 0 -655z
      m1610 0 l0 -655 -655 0 -655 0 0 648 c0 357 3 652 7 655 3 4 298 7 655 7 l648
      0 0 -655z"/>
      </g>
  </svg>
  </div>
  <div class="tagged" :class="{chosen:Chose}" @click="goTagged">
    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
    width="25" height="25" viewBox="0 0 25 25"
    preserveAspectRatio="xMinYMin meet">

      <g transform="translate(0) scale(0.00488)"
      fill="#A1A1A1" stroke="none">
      <path d="M1992 5094 c-110 -55 -200 -246 -219 -462 -6 -71 -7 -74 -42 -96 -20
      -12 -251 -144 -515 -292 -357 -200 -481 -275 -487 -292 -5 -14 -8 -840 -7
      -1969 l3 -1945 24 -19 c23 -18 58 -19 1330 -19 1056 1 1309 3 1323 14 25 19
      38 60 38 122 0 30 1 54 3 54 30 0 907 204 923 215 13 8 26 25 29 38 5 18 -798
      3661 -835 3789 -6 21 -19 42 -29 47 -9 6 -265 84 -567 175 -302 91 -556 170
      -563 174 -9 5 -20 40 -27 83 -42 247 -162 409 -305 409 -14 0 -48 -12 -77 -26z
      m131 -151 c14 -16 37 -53 51 -84 25 -57 58 -170 52 -177 -2 -1 -37 7 -78 19
      l-75 22 -72 -37 c-82 -42 -83 -41 -56 63 30 116 94 221 134 221 10 0 29 -12
      44 -27z m565 -728 l602 -338 0 -635 0 -636 22 -23 c35 -38 89 -29 113 18 13
      24 15 128 15 682 0 638 0 655 -20 680 -11 14 -166 107 -345 207 -179 100 -324
      184 -322 187 7 6 650 -189 663 -201 14 -13 819 -3625 810 -3633 -3 -4 -181
      -45 -396 -93 l-390 -87 -2 984 -3 985 -29 25 c-31 27 -66 25 -98 -4 -17 -15
      -18 -80 -18 -1100 l0 -1083 -1210 0 -1210 0 0 1864 0 1864 446 251 c245 138
      448 251 449 251 2 0 6 -28 10 -62 4 -35 16 -96 27 -137 19 -73 19 -73 -2 -115
      -106 -221 53 -467 295 -454 222 11 362 243 267 443 -29 60 -86 121 -139 148
      -69 36 -153 41 -262 15 -18 -4 -38 87 -42 182 l-3 65 80 46 c43 25 81 45 84
      44 3 -1 276 -154 608 -340z m-544 -145 c13 -13 -42 -70 -66 -70 -11 0 -33 15
      -49 33 l-30 32 28 13 c30 13 101 8 117 -8z m-137 -207 c57 -23 113 -17 176 21
      56 34 57 34 57 12 0 -31 -38 -86 -79 -113 -91 -61 -223 2 -245 115 l-6 34 33
      -28 c17 -15 46 -33 64 -41z"/>
      <path d="M2000 2819 c-249 -21 -442 -160 -530 -381 -46 -117 -28 -156 79 -165
      l60 -6 15 -51 c108 -369 599 -458 833 -151 62 82 86 152 91 267 6 144 -35 252
      -135 351 -109 109 -237 151 -413 136z m221 -179 c59 -30 116 -85 145 -142 43
      -84 71 -78 -356 -78 -209 0 -380 4 -380 8 0 29 109 143 170 179 120 71 315 86
      421 33z m169 -380 c0 -27 -53 -110 -95 -149 -75 -69 -166 -96 -272 -79 -66 10
      -121 39 -177 94 -36 35 -75 103 -76 132 0 9 69 12 310 12 207 0 310 -3 310
      -10z"/>
      <path d="M1572 1754 c-60 -30 -106 -88 -121 -155 -14 -60 -14 -787 -1 -826 6
      -17 22 -35 36 -42 18 -8 191 -11 599 -11 l574 0 28 24 28 24 0 414 c0 399 -1
      415 -21 458 -26 56 -67 97 -119 121 -37 17 -75 19 -496 19 l-455 0 -52 -26z
      m331 -256 l97 -132 0 -248 0 -248 -205 0 -206 0 3 354 3 354 24 26 c22 24 31
      26 105 26 l81 -1 98 -131z m257 127 c0 -9 -74 -105 -81 -105 -4 0 -25 25 -48
      55 l-42 55 86 0 c47 0 85 -2 85 -5z m374 -16 l26 -20 0 -360 0 -359 -205 0
      -205 0 0 243 0 243 102 137 103 137 76 0 c62 0 81 -4 103 -21z"/>
    </g>
    </svg>
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
      toLogIn:false,
    }
  },
  computed:{
    basicInfo(){
      return this.$store.state.basicInfo
    },
    isChose(){
      return this.$store.state.isChose
    },
    Chose(){
      return this.$store.state.Chose
    }
  },
  created(){
    this.$store.dispatch("initAndShow");
  },
  methods:{
    login() {
      alert("Please log in with account:0983423002 password:letstrythis")
      this.toLogIn = false;
      this.$store.dispatch("loginAndShow");
    },
    logout() {
      this.$store.commit("logout");
    },
    checkNewStory(){
      this.$store.commit('checkNewStory');
    },
    openLogIn(){
      if(this.toLogIn == false){
        this.toLogIn = true;
      }else{
        this.toLogIn = false;
      }
    },
    goTagged(){
      this.$store.commit('setShowPosts',false);
      this.$store.state.isChose = false;
      this.$store.state.Chose = true;
      this.$store.dispatch('mentionedList')
    },
    backPosts(){
      this.$store.commit('setShowPosts',true);
      this.$store.state.isChose = true;
      this.$store.state.Chose = false;
    },
    openStory(){
      this.$store.commit('openStory');
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login{
  display: flex;
  justify-content:space-evenly;
}
#login button{
  border: none;
  cursor: pointer;
  background: royalblue;
  color: white;
}
#head{
  display: flex;
  padding: 10px 6px;
  position: sticky;
  top: 0;
  font-size: 1.5rem;
  background: rgb(255, 255, 255);
  z-index: 3;
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
  padding: 3px;
  width: 108px;
  height: 108px;
  border: 1px solid #7c7c7c;
  border-radius: 50%;
  cursor: pointer;
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
#intro span{
  margin: 1px 0;
  font-size: 0.8rem;
  color: #7c7c7c;
}
#intro h4{
  margin: 1px 0;
  font-weight: 600;
}
#intro p{
  margin: 1px 0;
  font-size: 0.8rem;
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
  text-align: center;
}
#picBar .lifePic{
  margin: 7px auto;
  padding: 3px;
  width: 55px;
  height: 55px;
  cursor: pointer;
  border: 1px solid #7c7c7c;
  border-radius: 50%;
}
#picBar .img{
  width: 47px;
  height: 47px;
  overflow: hidden;
  border-radius: 50%;
}
#picBar img{
  position: relative;
  top: -25%;
  left: -20%;
}
#picBar .title{
  margin-top: 8px;
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
#platforms .chosen g{
  fill: #000000;
}
</style>
