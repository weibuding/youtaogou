import instance from './request.js'

export function newsList(page=1,limit=10){
    return instance.get(`/api/getnewslist?page=${page}&pagesize=${limit}`)
}