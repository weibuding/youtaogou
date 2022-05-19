<template>
    <div>
       
                  <router-view></router-view>
            <van-tabbar v-model="active" active-color="red">
            <van-tabbar-item icon="home-o" to="/home/index">首页</van-tabbar-item>
            <van-tabbar-item icon="search"  badge="99" to="/home/about">购物车</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/home/test">我的</van-tabbar-item>
        </van-tabbar>
      
    </div>
</template>

<script>
    export default {
        data(){
            return {
                active:0
            }
        },
        watch:{
            '$route':{
                handler:function(newRoute,oldRoute){
                    let {name} = newRoute.meta
                    const nameMap = {
                        'Home':0,
                        'About':1,
                        'First':2,
                    }
                    let active = nameMap[name]
                  
                    this.active = active
                    
                },
               
                immediate: true
            }

        }
    }
</script>

<style lang="scss" scoped>

</style>