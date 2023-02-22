import { URL } from '../config';

export const getPosts=(skip:number,limit:number)=>{
    return fetch(`${URL}api/posts?limit=${limit}&&skip=${skip}`, {
        method: "Get"
    }).then((response) => response.json()).catch((err) => console.log(err))
}

export const getPostById=(id:string)=>{
    return fetch(`${URL}api/posts/${id}`, {
        method: "Get"
    }).then((response) => response.json()).catch((err) => console.log(err))
}