import { createStore } from 'vuex'

export default createStore({
  state: {
    showPosts:true,
    checkImg:false,
    checkStory:false,
    posts:[
      {
        id:1,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/241532218_259526666038907_7296562633576749778_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=wzfBhlUMqkAAX_lFZq3&_nc_ht=scontent.cdninstagram.com&oh=ea7f0028ebf821d9065ec02e1af92287&oe=61471295" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/241532218_259526666038907_7296562633576749778_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=wzfBhlUMqkAAX_lFZq3&_nc_ht=scontent.cdninstagram.com&oh=ea7f0028ebf821d9065ec02e1af92287&oe=61471295" alt="post" width="375">',
        title:'大橘的新衣,只穿了十分鐘'
      },
      {
        id:2,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/167998686_785739082341506_2769494863904932640_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=YARiLFWa84UAX9PPJRE&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=b7d032e8b5f5a6324b3203c020afdb6c&oe=614584B3" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/167998686_785739082341506_2769494863904932640_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=YARiLFWa84UAX9PPJRE&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=b7d032e8b5f5a6324b3203c020afdb6c&oe=614584B3" alt="post" width="375">',
        title:'這裡不只有爌肉飯,#二林木棉道 #別有洞天 #今夜星辰 #彩色小葉欖仁樹田'
      },
      {
        id:3,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/131197824_219352296371326_2852404627189052439_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=90v0Ns4ocNoAX_0AZ9u&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=ab8b64f695515ef498e5117731973640&oe=61456641" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/131197824_219352296371326_2852404627189052439_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=90v0Ns4ocNoAX_0AZ9u&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=ab8b64f695515ef498e5117731973640&oe=61456641" alt="post" width="375">',
        title:'來台北就飄雨給我看 實在不給面子,妙妙貓本人很可愛,但說真的,那裡光線不好拍,結果拍起來最好看的竟然是燈泡!而且還發現,台北女生好像都不怕冷,短裙到處都是欸!'
      },
      {
        id:4,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/118931996_629684517734704_2087747521827277953_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=YJdR8c9lwcAAX_GbXRP&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=08a85c28933709ee05dc0164945dec09&oe=61463611" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/118931996_629684517734704_2087747521827277953_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=YJdR8c9lwcAAX_GbXRP&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=08a85c28933709ee05dc0164945dec09&oe=61463611" alt="post" width="375">',
        title:'大坵梅花鹿為了食物會咬你屁股,播音站在七十年代用,會給對岸講一些洗腦的話語,第三張是紅糟鰻魚,肉很厚的那種,吃起來像白帶魚,但是酒糟味很香！第四張就是傳說中的彼岸花,留葉不留花,留花不留葉,當地人說是馬祖最具代表性的花;另外是馬祖的關鍵行程-芹壁,很美!早中晚各有不同的景 #大坵島梅花鹿 #馬祖播音站 #紅糟鰻魚酥 #彼岸花 #芹壁'
      },
      {
        id:5,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/118780664_349198216218776_4071059420389314085_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=_AgCyxdvp8sAX_NgUq_&_nc_ht=scontent.cdninstagram.com&oh=aa69c6accafb95a6ad7ceab49dbd4ec3&oe=61456ADD" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/118780664_349198216218776_4071059420389314085_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=_AgCyxdvp8sAX_NgUq_&_nc_ht=scontent.cdninstagram.com&oh=aa69c6accafb95a6ad7ceab49dbd4ec3&oe=61456ADD" alt="post" width="375">',
        title:'天氣不是很好 只能拍到淡淡的一抹銀河,想特別介紹第二張的食物-佛手,口感跟味道有點像蟹肉,莒光島整體蠻像惡魔島的地形,美美的,第六張的則是方塊海,是兩邊的浪交錯所形成,雖然也不算很方,但就有格子的感覺;導覽特別感謝 @zhaocha1995  @matsu.hometownbnb #東犬燈塔 #佛手 #鐵堡 #菜埔澳 #方塊海 #神秘小海灣 #最北星巴克'
      },
      {
        id:6,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/118764604_998975520618648_3439491869879241542_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=8Y0YWumsSm4AX86ZLdi&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=1b6f144295e20f2fd2370a6357bee26a&oe=61475308" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.29350-15/118764604_998975520618648_3439491869879241542_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=8Y0YWumsSm4AX86ZLdi&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=1b6f144295e20f2fd2370a6357bee26a&oe=61475308" alt="post" width="375">',
        title:'#食物 淡菜跟九孔吃起來差很多,沒有想像中厲害,但是真的新鮮,紅麴炒飯就淡淡的紅麴香;然後激推一間店-蝦寮,老酒清蒸魚好吃到爆炸！！ #景 風獅爺抱歉了,你戴帽子真的好可愛哈哈哈;藍眼淚非常非常難拍,四周全黑跟長曝是基本,受到驚擾才會發光,而且才持續不到一秒,所以要一直去喇那攤水,相機一直保持長曝 #蝦寮食堂 #媽祖巨神像 #北海坑道 #藍眼淚 #卵蛋非賣品'
      },
      {
        id:7,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.2885-15/72332827_577639783047324_1203702484935760239_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=WKIOoFT-s3wAX8OjU5l&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=872d387f19393a04faced4b06f01b7cd&oe=6146C05F" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.2885-15/72332827_577639783047324_1203702484935760239_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=WKIOoFT-s3wAX8OjU5l&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=872d387f19393a04faced4b06f01b7cd&oe=6146C05F" alt="post" width="375">',
        title:'離海龜超近!!而且到哪水質都一樣清澈!這麼美的飯店（bikini?,可能不會再住第二次了;眼鏡猴實際看起來有點像吉娃娃,最後又再次遇到Ivic,被這位有緣的司機送到機場,結束這7天'
      },
      {
        id:8,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.2885-15/71512384_924095357983302_2059593032005539941_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=hg5Zf-c064QAX-GwKUp&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=2c503300dddc2286e46a33dc21667763&oe=6146C5F2" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.2885-15/71512384_924095357983302_2059593032005539941_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=hg5Zf-c064QAX-GwKUp&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=2c503300dddc2286e46a33dc21667763&oe=6146C5F2" alt="post" width="375">',
        title:'先跳過涉水搭船的荒唐事,來到當地最有名的飯店,這個沙灘!這些比基尼!這個Bar!都值得了!還有一家超好吃的烤雞chooks to go,一隻吃完都不夠喔  #henannresort #alona'
      },
      {
        id:9,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.2885-15/71010970_2249973225114300_6770366238055745462_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=31pjoHlGNWkAX892A_H&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=204a9e0c76e48dbd4dca1e023ffe707f&oe=61458784" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.2885-15/71010970_2249973225114300_6770366238055745462_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=31pjoHlGNWkAX892A_H&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=204a9e0c76e48dbd4dca1e023ffe707f&oe=61458784" alt="post" width="375">',
        title:'鯨鯊先生你離我好近,只差一隻手的距離了!船家雖然幫忙拍了很多照片,但一堆都是連按快門的廢圖,瀑布美得像電影場景,順變放一下野生櫻花妹;最後臨時起意衝一個蘇米倫島,超美,水也乾淨到能見底,半天就能把島上能玩的玩過了,剩下就是最愛的發懶時間,送！ #Oslob #whales  #sumilon'
      },
      {
        id:10,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.2885-15/70971156_889960124722579_2595907583593078533_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=3qZ_JAK31VAAX-ghSWF&_nc_ht=scontent.cdninstagram.com&oh=abad96339f5abbf29ed4e83c2d2c5527&oe=61474E65" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.2885-15/70971156_889960124722579_2595907583593078533_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=3qZ_JAK31VAAX-ghSWF&_nc_ht=scontent.cdninstagram.com&oh=abad96339f5abbf29ed4e83c2d2c5527&oe=61474E65" alt="post" width="375">',
        title:'雖然其中一個島的行程莫名被刪掉,但在墨寶有看到海龜跟沙丁魚群,也就夠滿足了;看完魚群隨後馬上到歐斯陸,這裡就是更舊的村落了,看了些西班牙的建築,還有一個讓我聯想到鬼修女的教堂!?最後還有女學生熱情的招手  #moalboal \n#oslob'
      },
      {
        id:11,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.2885-15/70881433_433821143931107_6051116482935528257_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=_k15PuiDDRsAX8ylNDv&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=6737595e8162a79867c12727eece7aa1&oe=614685A3" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.2885-15/70881433_433821143931107_6051116482935528257_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=_k15PuiDDRsAX8ylNDv&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=6737595e8162a79867c12727eece7aa1&oe=614685A3" alt="post" width="375">',
        title:'頂著加倍的烈日開始走路,最有名的十字架也真的不是很好拍;聖嬰大教堂,當地人會摸教堂裡的耶穌像祈福;嘟嘟車已經很少見了,街道的舊建築及攤販充滿著當地味,但到百貨公司裡後,又回到台灣那種都市的感覺 #麥哲倫十字架 \n#聖嬰大教堂 \n#cebu'
      },
      {
        id:12,
        img:'<img src="https://scontent.cdninstagram.com/v/t51.2885-15/42590659_246975865937978_7870337239727353715_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=01XVB0SWXfQAX8w6JNi&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=9805ec8b2011489df4cac3572fc43e01&oe=61474A4C" alt="post" width="121">',
        imgL:'<img src="https://scontent.cdninstagram.com/v/t51.2885-15/42590659_246975865937978_7870337239727353715_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=01XVB0SWXfQAX8w6JNi&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&oh=9805ec8b2011489df4cac3572fc43e01&oe=61474A4C" alt="post" width="375">',
        title:'Day10|多瑪巴切皇宮:裡面都不能拍照,不然有一個大廳超壯觀,搭配浮誇的水晶吊燈;博塞浦路斯海峽,一邊是亞洲一邊是歐洲,搭著搭著就到了歐洲(達成新成就？;加拉達塔,起初是木造塔,後來經過多次重建,成為現在的樣貌,塔本身沒什麼,上面景色倒是不錯;塔克辛廣場,這裡是我到土國後看見最現代的地方了,實在有點感動;可愛的導遊還有辛苦的領隊,感謝你們!旅途即將結束,該上班了'
      },
    ],
    photoId:null,
  },
  mutations: {
    goTagged(state){
      state.showPosts = false;
    },
    backPosts(state){
      state.showPosts = true;
    },
    openPhoto(state){
      state.checkImg = true;
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
