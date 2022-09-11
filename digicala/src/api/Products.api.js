import axios from "./Setup";
export const getProducts = ()=>{
    return new Promise((resolve, reject)=>{
          axios.get("/api/users")
          .then((res)=>{resolve(res)})
          .catch((e)=>{
            reject(e.response)
          })
    })


    // return new Promise(resolve, reject)=>{
    //     axios.get("/api/users")
    // }
}