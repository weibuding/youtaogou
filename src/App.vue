<template>
    <div class="app">
        <h3>优淘购</h3>
        <!-- <router-link to="/">首页</router-link> |
        <router-link to="/about">购物车</router-link> |
        <router-link to="/test">我的</router-link> -->
          <van-nav-bar
            :title="title"
            left-text="返回"
            right-text="按钮"
            v-show="isShowNavbar"
            @click-left="$router.back()"
            left-arrow
        />
        <router-view ></router-view>

        
    </div>
</template>

<script>
    export default {
         name:"App",
        data(){
            return {
                isShowNavbar: false,
                title:"优淘购"
            }
        },
        watch:{
            '$route':{
                handler:function(newRoute,oldRoute){
                   
                    let { isMainPage,title } = newRoute.meta 
                    this.title = title;
                    if(isMainPage){
                        this.isShowNavbar = false
                    }else {
                        this.isShowNavbar = true
                    }
                },
               
                immediate: true
            }

        }
    }
</script>
<style lang="scss">
    .app {
         
        min-width: 320px;
        max-width: 750px;
        margin: 0 auto;
    }
        ul {
            li {
                list-style: none;
            }
        }
   
</style>

