import instance from './request.js'

export function lunbo(){
    return instance.get('/api/getlunbo')
}

export function shopping(page=1,limit=10){
    return instance.get(`/api/recommend?page=${page}&limit=${limit}`)
}