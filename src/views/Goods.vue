<template>
    <div>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <div class="goodslist">
                    <Good v-for="item in lists" :key="item.id" :data="item" @click="foo"> 
                        <template #goods>
                            <div class="footerArea">
                                <div class="price">
                                    <span class="sell_price">&yen; {{item.market_price}}</span>
                                    <span class="market_price">打折：&yen; {{item.sell_price}}</span>
                                </div>
                                <div class="info">
                                    <span class="hot">热卖中</span>
                                    <span class="remain">剩余{{item.stock_quantity}}件</span>
                                </div>
                            </div>
                        </template>
                    </Good>
                </div>
            </van-list>
        </van-pull-refresh>
    </div>
</template>

<script>
// 导入api接口
import { Goodslist } from "../api/goodlist.js"
import Good from "../compent/Shopping.vue"
export default {
    data() {
        return {
            page: 0,
            pagesize: 10,
            lists: [],
            loading: false, // 是否正在加载中..
            finished: false, // 是否已经加载完毕
            refreshing: false, // 是否正在刷新中
        };
    },
    methods: {
       
        onLoad() {
            console.log('onLoad'); // 默认会执行一次
            this.page++;
            this._fetchGoodsList();
        },
     
        onRefresh() {
            console.log('onRefresh')
            this.page = 0;
           
            this.finished = false;

            
            this.loading = true;
            this.onLoad();
        },
       
        async _fetchGoodsList() {
            if (this.refreshing) {
                this.lists = [];
                this.refreshing = false;
            }
            const result = await Goodslist(this.page, this.pagesize);
            this.loading = false; 
            this.lists = [...this.lists,...result.message];
            console.log(this.lists);
            if (result.message.length === 0) {
                this.finished = true; 
            }
        },
        foo({data}){
          
            this.$router.push(`/goodsintro/${data.id}`)
        }
    },
    components:{
        Good
    }
};
</script>

<style lang="scss" scoped>
     .goodslist {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
       background: linear-gradient(to right, burlywood, khaki, floralwhite);

        .footerArea {
            .price {
                display: flex;
                justify-content: space-between;

                .sell_price {
                    color: #ff4142;
                    font-size: 16px;
                    font-weight: 700;
                }

                .market_price {
                    font-size: 12px;
                    color: #999;
                }
            }
            .info {
                display: flex;
                margin-top: 8px;
                justify-content: space-between;
                color: #787272;
                font-size:14px;
            }
        }
    }
</style>