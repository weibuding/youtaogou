<template>

  <div class="goods">
  
    <div class="details" @click="observeImage">

      <van-swipe class="is-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in conent" :key="index"> 
            <img v-lazy="item.src" /> 
        </van-swipe-item>
  
      </van-swipe>
    
    </div>

  
    <div class="details">

      <div class="price">
  <span class="much">&yen; {{ info.sell_price }}</span>
        <span class="price">&yen; {{ info.market_price }}</span> 
      </div>

      <div> {{ info.title }} </div>
   
    </div>
 
    <div class="details-content">

      <van-divider
        :style="{ color: '#1989fa', borderColor: 'red', padding: '0 16px' }"
      >
  介绍 
      </van-divider>

      <div class="content" v-html="info.zhaiyao"></div>
    
    </div>

  
  </div>
</template>

<script>
import { fetchconent, fetchinfo } from "../api/index.js";
import { ImagePreview } from "vant";

export default {
  props: ["id"],
  data() {
    return {
      conent: [],
      info: [],
      goods: {
        picture: "",
      },
    };
  },
  created() {
    this._fetchconent();
    this._fetchinfo();
  },
  methods: {
    async _fetchconent() {
      let { message } = await fetchconent(this.id);
      this.conent = message; 
      console.log(this.conent);
    },
    async _fetchinfo() {
      let { message } = await fetchinfo(this.id);
      this.info = message;
      console.log(this.info);
    },
    observeImage() {
      let imgs = this.conent.map((item) => item.src);
      ImagePreview({
        images: imgs,
        startPosition: 1,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.goods{
    height: 100%;
    background: rgb(247, 246, 246);
    
}
.details {
    
border-radius: 6px;
margin-top: 8px;
background: #fff;

// .van-swipe{
//      margin-top: 10px;
// }
.is-swipe {
margin: 10px auto;
 .van-swipe-item {
     margin-top: 10px;
height: 240px;
text-align: center;
 img {
 // width: 100%;
height: 100%;
}
 }
}
}
.details-content{
    background: white;
}

.content{
    color: rgb(102, 126, 181);
}

.price{
    // width: 90px;
    display: flex;
    // justify-content:;
.much{
   font-size: 22px;
    color: rgb(243, 65, 65);
}
.price{
    font-size: 13px;
    margin-left: 20px;
    margin-top: 10px;
    color: #ccc;
}
}
</style>
