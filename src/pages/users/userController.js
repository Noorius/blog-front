import client from "../../client";
import axios from "axios";

export async function createUser({email,password, name, surname, avatar}){
    return await axios.post(`https://blog-server-course-2.herokuapp.com/user/signup`,
        {
            "email": email,
            "password": password,
            "name": name,
            "surname": surname,
            "avatar": avatar
        })
}

export async function loginUser({email,password}){
    return await axios.post(`https://blog-server-course-2.herokuapp.com/user/signin`,
        {
            "email": email,
            "password": password,
        })
}

export function logoutUser(){
    window.localStorage.removeItem('token')
    document.location.href = '../';
}

export function getUserById(id){
    return client.get(`/profile/${id}`)
}

export function getUser(){
    return client.get(`/profile`)
}