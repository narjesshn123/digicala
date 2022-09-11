import axios from "axios";         
export const login = (data) =>{
    return Promise((resolve, reject)=>{
        axios.post("auth/sign-in", data)                    
        .then(data =>
            resolve(data))
            .catch(e=>{
                reject(e.response)
            })
    })
}

export const logout = (data) =>{
    return Promise((resolve, reject)=>{
        axios.post("auth/sign-up", data)
        .then(data =>
            resolve(data))
            .catch(e=>{
                reject(e.response)
            })
    })
}

export const refreshAccessToken = (data) =>{
    return Promise((resolve, reject)=>{
        axios.post("auth/refresh", data)
        .then(data =>
            resolve(data))
            .catch(e=>{
                reject(e.response)
            })
    })
}