<template>
    <div v-if="show" class="backTop " @click="backTop">
        <slot>
            <img :src="Top" alt="">
        </slot>
    </div>
</template>

<script>
    import Top from "../assets/images/backtop.png"
    export default {
        props:{
            top:{
                type:Number,
                default:200
            }
        },
        data(){
            return {
                Top,
                show:false,
            }
        },
        methods:{
            scrollHandle(){
              
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                if(scrollTop >= this.top){
                    this.show = true;
                }else {
                     this.show = false;
                }
            },
            backTop(){
                document.documentElement.scrollTop = document.body.scrollTop = 0
            }
        },
        mounted(){
            document.addEventListener('scroll',this.scrollHandle)
        },
        destroyed(){
            document.removeEventListener('scroll',this.scrollHandle)
        }
    }
</script>

<style lang="scss" scoped>
    .backTop {
        position: fixed;
        right: 8px;
        bottom: 120px;
        width: 38px;
        height: 38px;
        img {
            width: 100%;
        }
    }
</style>
