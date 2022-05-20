<template>
   <div class="shop">
        <div class="cell" @click="clickHandle" >
            <div class="imgs" >
                <img :src="data.img_url" alt="">
            </div>
            <div class="goods">{{data.title}}</div>

            <slot name="goods">
            <div class="money">
                <span class="much">&yen;{{data.sell_price}}</span>
                 <span class="long">{{data.buy}}购买</span>
            </div>
            <!-- <shopping/> --></slot>
        </div>
      
    </div>
</template>

<script>
   import { shopping } from "../api/index.js";
    export default {
       name:"goods",
       props:['data'],
       methods:{
            clickHandle(event){
                
                this.$emit('click',{event,data:this.data})
            }
       }
    }
</script>

<style lang="scss" scoped>
.shop{
    // width: 100%;
    // height: 100%;
    // background: linear-gradient(to right, burlywood, khaki, floralwhite);
    display: flex;
    text-align: center;
    margin: auto;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    line-height: 100%;
    //  padding-bottom: 9px;
    .cell{
        margin-top: 5px;
        width: 180px;
        height: 200px;
        background-color: white;
        border-radius: 6px;
        // color: floralwhite;
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
        // margin-top: 12px;
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
    .over{
        margin-top: 10px;
       margin-right: 290px;
        color: rosybrown;
        font-size: 14px;
    }
    .goshopping{
        display: flex;
        justify-content: space-around;
        width: 165px;
        height: 30px;
        // border: 1px solid red;
        align-items: center;
        .goshop{
            font-size: 13px;
            color: #ccc;
        }
        .remain{
            font-size: 14px;
            color: #ccc;
        }
    }
}
</style>