import axios from "axios";

const client = axios.create({
    baseURL: 'https://blog-server-course-2.herokuapp.com/',
    headers: {
        'Authorization': `${window.localStorage.getItem('token')}`
    }
})

// client.interceptors.request.use((config) => {
//     let token = localStorage.getItem('token')
//     if (token){
//         config.headers.authorization = token
//     }
//     return config
// })

export default client;