<template>

  <div>
  
    <div class="details" @click="observeImage">

      <van-swipe class="is-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(item, index) in conent" :key="index"> 
            <img v-lazy="item.src" /> 
        </van-swipe-item>
  
      </van-swipe>
    
    </div>

  
    <div class="details">

      <div class="price">
  <span>&yen; {{ info.sell_price }}</span>
        <span>&yen; {{ info.market_price }}</span> 
      </div>

      <div> {{ info.title }} </div>
   
    </div>
 
    <div class="details-content">

      <van-divider
        :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
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
      this.conent = message; // console.log(this.conent);
    },
    async _fetchinfo() {
      let { message } = await fetchinfo(this.id);
      this.info = message;
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
.details {
border-radius: 6px;
margin-bottom: 8px;
background: #fff;
padding: 8px;

.is-swipe {
margin-top: 20px;
 .van-swipe-item {
height: 240px;
text-align: center;
 img {
 // width: 100%;
height: 100%;
}
 }
}
}

.price{
display: flex;
justify-content: space-between;
}
</style>
