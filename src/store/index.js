import { createStore } from 'vuex'

export default createStore({
  state: {
    showPosts:true,
    checkImg:false,
    checkStory:false,
    posts:[
      {
        id:1,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/242179615_603088697553184_6896596576710229276_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=K8wehuyqVqIAX-bD1sz&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=e3b1cba2c0394bdeb6e2bcf8787df35c&oe=614D4E64" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/242179615_603088697553184_6896596576710229276_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=K8wehuyqVqIAX-bD1sz&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=e3b1cba2c0394bdeb6e2bcf8787df35c&oe=614D4E64" alt="post" width="375">',
        title:'您的監視器已上線，按此開始設定'
      },
      {
        id:2,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/242185295_4682890765108897_5673108617227313169_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=L-z005jE2h0AX_VzVN7&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=b64cb9ab1f208742bd59f8b2b4c233d0&oe=614C6CC4" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/242185295_4682890765108897_5673108617227313169_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=L-z005jE2h0AX_VzVN7&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=b64cb9ab1f208742bd59f8b2b4c233d0&oe=614C6CC4" alt="post" width="375">',
        title:'這次是擰抹布'
      },
      {
        id:3,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/242032365_352148673279229_8364525340802553306_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=JXTKIzGgS7wAX_ixarm&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=0505f4c7629b5df060ce37e684b245fe&oe=614CF0FB" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/242032365_352148673279229_8364525340802553306_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=JXTKIzGgS7wAX_ixarm&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=0505f4c7629b5df060ce37e684b245fe&oe=614CF0FB" alt="post" width="375">',
        title:'緣投某？'
      },
      {
        id:4,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/242013247_1049900759156443_587480083645292731_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=zJrtdrv5cx8AX_BJ9Il&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=4abf54f2b5f19ef12e3aeae1689e336c&oe=614D6E39" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/242013247_1049900759156443_587480083645292731_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=zJrtdrv5cx8AX_BJ9Il&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=4abf54f2b5f19ef12e3aeae1689e336c&oe=614D6E39" alt="post" width="375">',
        title:'擰毛巾式'
      },
      {
        id:5,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/241975855_315377207053918_6933481173728691426_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=M3DyPiRQTYMAX_wwXaq&_nc_ht=scontent.cdninstagram.com&oh=c5940b51da908cde0909fffc326a86a2&oe=614D09B4" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/241975855_315377207053918_6933481173728691426_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=M3DyPiRQTYMAX_wwXaq&_nc_ht=scontent.cdninstagram.com&oh=c5940b51da908cde0909fffc326a86a2&oe=614D09B4" alt="post" width="375">',
        title:'邊緣橘'
      },
      {
        id:6,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/241938473_973721696891408_7894262779823622027_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=eRxktHw4Ww0AX8pn21H&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=9525f28d6468d1d1054fdb094bb991f3&oe=614DD605" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/241938473_973721696891408_7894262779823622027_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=eRxktHw4Ww0AX8pn21H&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=9525f28d6468d1d1054fdb094bb991f3&oe=614DD605" alt="post" width="375">',
        title:'後腦勺可愛？'
      },
      {
        id:7,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/242014981_979013619552054_2222196109435416338_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=3W2JqHq8jFYAX_z-O9K&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=5a42660b8365dde097281fcda2f7b270&oe=614D7C92" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/242014981_979013619552054_2222196109435416338_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=3W2JqHq8jFYAX_z-O9K&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=5a42660b8365dde097281fcda2f7b270&oe=614D7C92" alt="post" width="375">',
        title:'妖嬌ㄟ橘'
      },
      {
        id:8,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/241918060_399199091774342_3134332318425582821_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=UGCwq19YHsUAX-Z9JFW&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=b96ea8c9fa8e76c14b706225ab46b393&oe=614DCCA6" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/241918060_399199091774342_3134332318425582821_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=UGCwq19YHsUAX-Z9JFW&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=b96ea8c9fa8e76c14b706225ab46b393&oe=614DCCA6" alt="post" width="375">',
        title:'躲電腦桌下夠溫暖 ok的'
      },
      {
        id:9,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/242212699_881138886113306_8386923856815242470_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=hNnwEkR7ltAAX-_Y0W5&_nc_oc=AQlL9rQuj8yrV4Fw82aebj1qXzni1adfpHqxa38048n2po7VLJMOBxJUYzoZN45m71k&_nc_ht=scontent.cdninstagram.com&oh=5a351532742f7aa1982e0558737f8a9e&oe=614D264E" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/242212699_881138886113306_8386923856815242470_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=hNnwEkR7ltAAX-_Y0W5&_nc_oc=AQlL9rQuj8yrV4Fw82aebj1qXzni1adfpHqxa38048n2po7VLJMOBxJUYzoZN45m71k&_nc_ht=scontent.cdninstagram.com&oh=5a351532742f7aa1982e0558737f8a9e&oe=614D264E" alt="post" width="375">',
        title:'頭靠著睡就是讚'
      },
      {
        id:10,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/241996571_4109670265809126_6211751068443983390_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=L5ZJmsy9miwAX-3C7yv&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=848eddad70656ad3b89e16da70e7055e&oe=614CDB92" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/241996571_4109670265809126_6211751068443983390_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=L5ZJmsy9miwAX-3C7yv&_nc_ht=scontent.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=848eddad70656ad3b89e16da70e7055e&oe=614CDB92" alt="post" width="375">',
        title:'大橘的新衣'
      },
    ],
    photoId:null,
  },
  mutations: {
    setShowPosts(state,status){
      state.showPosts = status;
    },
    openPhoto(state,index){
      state.checkImg = true;
      state.photoId = index;
    },
    closePhoto(state){
      state.checkImg = false;
    },
    openStory(state){
      state.checkStory = true;
    },
    closeStory(state){
      state.checkStory = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
