import axios from "./Setup";
export const getProducts = ()=>{
    return new Promise((resolve, reject)=>{
          axios.get("/api/users")
          .then((res)=>{resolve(res)})
          .catch((e)=>{
            reject(e.response)
          })
    })
}   

// export const getProduct = (id)=>{
//   return new Promise((resolve, reject)=>{
//         axios.get('/api/users/' + id)
//         .then((res)=>{resolve(res)})
//         .catch((e)=>{
//           reject(e.response)
//         })
//   })
// }
// console.log(getProduct) 
export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`/api/users/${id}`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        reject(e.response);
      });
  });
};
