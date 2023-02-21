import { URL } from '../config';

export const getPosts=()=>{
    return fetch(`${URL}api/posts`, {
        method: "Get"
    }).then((response) => response.json()).catch((err) => console.log(err))
}