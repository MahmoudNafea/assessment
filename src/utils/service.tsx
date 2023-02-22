import { URL } from '../config';

export const getPosts=(skip:number,limit:number,filter:any)=>{
    return fetch(`${URL}api/posts?limit=${limit}&&skip=${skip}&&filter=${filter}`, {
        method: "Get"
    }).then((response) => response.json()).catch((err) => console.log(err))
}

export const getPostById=(id:string)=>{
    return fetch(`${URL}api/posts/${id}`, {
        method: "Get"
    }).then((response) => response.json()).catch((err) => console.log(err))
}

export const getAllCategories=()=>{
    return fetch(`${URL}api/categories`, {
        method: "Get"
    }).then((response) => response.json()).catch((err) => console.log(err))
}