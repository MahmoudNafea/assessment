import { URL } from '../config';

export const getPosts=(limit:number)=>{
    return fetch(`${URL}api/posts?limit=${limit}`, {
        method: "Get"
    }).then((response) => response.json()).catch((err) => console.log(err))
}