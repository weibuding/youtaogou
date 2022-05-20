<template>
    <!-- <div class="news">
        <div class="newslist">
            <div class="newimg" v-for="item in news" :key="item">
                <img :src="item.img_url" alt="">
                 <div class="newsintro">
                <b>{{item.title}}</b>
            
            <div class="newsdata"> 
                <span class="data">日期:{{item.add_time}}</span>
                 <span class="data">浏览次数:{{item.click}}</span>
            </div>
            </div>
            </div>
        </div>
        <Top></Top>
    </div> -->
      <div>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
              <div>
               <div class="news">
        <div class="newslist">
            <div class="newimg" v-for="item in news" :key="item">
                <img :src="item.img_url" alt="">
                 <div class="newsintro">
                <b>{{item.title}}</b>
            
            <div class="newsdata"> 
                <span class="data">日期:{{item.add_time}}</span>
                 <span class="data">浏览次数:{{item.click}}</span>
            </div>
            </div>
            </div></div>
        </div>
        <Top></Top>
    </div> 
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
import { newsList } from '../api/news'
import Top from "../compent/Top.vue"
    export default {
        data(){
            return{
                   page: 0,
            pagesize: 8,
           
            loading: false, // 是否正在加载中..
            finished: false, // 是否已经加载完毕
            refreshing: false, // 是否正在刷新中
                news:[],
            }
        },
        // created(){
        //     this.newsintro()
        // },
        methods:{
              onLoad() {
            console.log('onLoad'); // 默认会执行一次
            this.page++;
            this.newsintro()
        },
     
        onRefresh() {
            console.log('onRefresh')
            this.page = 0;
           
            this.finished = false;

            
            this.loading = true;
            this.onLoad();
        },
            async newsintro(){
                 if (this.refreshing) {
                this.news = [];
                this.refreshing = false;
            }
                let result = await newsList(this.page,this.pagesize)
                this.loading = false; 
            this.news = [...this.news,...result.message];
              if (result.message.length === 0) {
                this.finished = true; 
            }
            }
        },
        components:{
      Top
  }
    }
</script>

<style lang="scss" scoped>
    .news{
        width: 100%;
        height: 1000px;
        // border: 1px solid black;
        display: flex;
        margin-bottom: 10px;
        // align-items: center;
        // // text-align: center;
        // margin: 0 auto;
        .newslist{
            width: 100%;
            height: 120px;
          
        }
        .newimg{
            width: 100%;
            height: 120px;
            // border: 1px solid black;
            display: flex;
            // flex-direction: column;
            img{
                margin-left: 10px;
                width: 120px;
                height: 100px;
            }
            .newsintro{
                display: flex;
                flex-direction: column;
                margin-left: 8px;
            }
            .newsdata{
                margin-top: 50px;
                display: flex;
                justify-content: space-between;
                .data{
                    font-size: 12px;
                    color: #ccc;
                }
               
            }
        }
    }
</style>