import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' 
import First from '../views/First.vue' 
import User from '../views/User.vue'
import About from '../views/About.vue'
import Homepage from '../views/Homepage.vue'
import Goods from '../views/Goods.vue'
import NProgress from 'nprogress'
import Goodsintro from '../views/Goodsintro.vue'
// 注册路由插件
Vue.use(VueRouter)

const routes = [{
        path: '/',
      redirect:"/home/index"
    },
    {
        path:'/home',
        component:Homepage,
        children:[{
                path:'index',
                component:Home,
                meta:{
                   isMainPage:true
                }
        },  {
            path: "about",
            component: About,
            meta: {
                name: "About",
                isMainPage: true,
            }
        },
        {
            path: "test",
            component: First,
            meta: {
                name: "First",
                isMainPage: true
            }

        },]
    },
    {
        path: "/goods",
        component: Goods,
        meta: {
            title: "商品列表"
        }
    },
    {
        path: "/user",
        component: User,
        meta: {
            title: "新闻列表"
        }
    },
    {
        path: "/goodsintro/:id",
        component: Goodsintro,
        props:true,
        meta: {
            title: "商品详情"
        }
    },
   
]

const router = new VueRouter({
    routes
})

NProgress.configure({
    showSpinner:false,
})

router.beforeEach((to,from,next)=>{
    console.log('beforEach');
    NProgress.start()
    next()
})

router.afterEach((to,from)=>{
    NProgress.done()
   console.log('afterEach');
})

export default router
