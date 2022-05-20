<template>
  <div>
    <van-sticky>
      <div class="search">
        <div class="youtao"><img src="../assets/images/apple-touch-icon.png" alt=""></div>
        <van-search v-model="value" placeholder="iphone18" />
      </div>
    </van-sticky>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image.img" />
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格 -->
    <div class="cell">
      <van-grid square clickable border>
        <van-grid-item v-for="item in phione" :key="item.img" :to="item.to">
          <div class="item">
            <img :src="item.img" />
            <div class="text">{{ item.text }}</div>
          </div>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 推荐商品 -->
    <van-divider
      :style="{ color: 'darkorange', borderColor: 'orange', padding: '0 18px' }"
      >推荐商品</van-divider
    >
    <!-- <router-link to="/goods">购物车</router-link> 
        <router-link to="/user">我的</router-link> -->
    <div class="shop">
        <!-- <div class="cell" > -->
            <!-- <div class="imgs" >
                <img :src="items.img_url" alt="">
            </div>
            <div class="goods">{{items.title}}</div>
            <div class="money">
                <span class="much">&yen;{{items.sell_price}}</span>
                 <span class="long">{{items.buy}}购买</span>
            </div> -->
            <Goods v-for="items in shopps" :key="items.id" :data="items" @click="handel" />
        <!-- </div> -->

    </div>
    <Top></Top>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
import { lunbo,shopping } from "../api/index.js";
import phone1 from "../assets/images/1.png";
import phone2 from "../assets/images/2.png";
import phone3 from "../assets/images/3.png";
import phone4 from "../assets/images/4.png";
import phone5 from "../assets/images/5.png";
import phone6 from "../assets/images/6.png";
import phone7 from "../assets/images/7.png";
import morePng from "../assets/images/more.png";
import Top from "../compent/Top.vue"
import Goods from "../compent/Shopping.vue"
Vue.use(Lazyload);
export default {
  data() {
    return {
      images: [],
      shopps:[],
      phione: [
        { text: "优淘超市", img: phone1,to:"/goods" },
        { text: "数码家电", img: phone2,to:"/goods" },
        { text: "果蔬生鲜", img: phone3,to:"/goods"},
        { text: "生活缴费", img: phone4,to:"/goods"},
        { text: "会员中心", img: phone5,to:"/goods" },
        { text: "领百万现金", img: phone6 ,to:"/goods"},
        { text: "领优惠券", img: phone7,to:"/goods" },
        { text: "优淘新闻", img: morePng,to:"/user" },
      ],
      value: "",
    };
  },
  created() {
    this.lunbos();
    this.shops();
  },
  methods: { 
      handel({data}){
       console.log({data});
            // 跳转到商品详情页
            this.$router.push(`/goodsintro/${data.id}`)
        },
    async lunbos() {
      this.$toast.loading({
        duration: 0,
        message: "正在加载中。",
        forbidClick: true,
      });
      let data = await lunbo();
      this.images = data.message;
      console.log(this.images);
    },
    async shops(){
        let {message} = await shopping(1,12);
        this.shopps = message
        console.log(this.shopps);
    }
  },
  
    
  components:{
      Top,Goods
  }
};
</script>

<style lang="scss" scoped>

.youtao {

img{
    text-align: center;
    margin: 0 auto;
    width: 40px;
    height: 40px;
}
}
img {
  width: 100%;
  height: 200px;
}
.search {
  width: 100%;
  display: flex;
  text-align: center;
  margin: 0 auto;
  align-items: center;
  background: linear-gradient(to right, orange, gold, darkorange);
  //    color: darkorange;
}
.van-search {
    flex: 1;
  width: 300px;
  background: linear-gradient(to right, orange, gold, darkorange);
}
.van-grid {
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    color: darkgray;
    .text {
      margin-top: 6px;
    }
    img {
      height: 50px;
      width: 50px;
    }
  }
}
.shop{
    // width: 100%;
    height: 100%;
    background: linear-gradient(to right, orange, gold, darkorange);
    display: flex;
    text-align: center;
    margin: auto;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
     padding-bottom: 9px;   
    .cell{
        margin-top: 2px;
        width: 180px;
        height: 200px;
        background-color: white;
        border-radius: 6px;
    }
    .imgs{
        margin: auto;
        text-align: center;
        img{
            width: 120px;
            height: 120px;
        }
    }
    .goods{
        margin-left: 7px;
        width: 160px;
        height: 15px;
       overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
        font-size: 14px;
    }
    .money{
        margin-top: 12px;
        margin-left: 5px;
        height: 35px;
        width: 165px;
        // border: 1px solid red;
        display: flex;
        justify-content: space-between;
        align-items: center;
    .much{
        font-size: 18px;
        color: red;
    }
    .long{
        font-size: 11px;
        color: darkgrey;
    }
    }
}

</style>
