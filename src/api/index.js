import instance from './request.js'

export function lunbo(){
    return instance.get('/api/getlunbo')
}

export function shopping(page=1,limit=18){
    return instance.get(`/api/recommend?page=${page}&limit=${limit}`)
}

export function fetchconent(goodsId) {
   return instance.get(`/api/getthumbimages/${goodsId}`)
    }
    
    export function fetchinfo(goodsId) {
     return instance.get(`/api/getgoodsinfo/${goodsId}`)
    }