import instance from "./request.js"

export function Goodslist(page = 1, pagesize = 10) {
    return instance.get(`/api/getgoods?pageindex=${page}&pagesize=${pagesize}`)
}