// import axios from "axios";         
// export const login = (data) =>{
//     return new Promise((resolve, reject)=>{
//         axios.post("/api/auth/login", data)                    
//         .then((res) =>{
//             resolve(res.data)
//         })
//             .catch((e)=>{
//                 reject(e.response)
//             })
//     })
// }

// export const register = (data) =>{
//     return new Promise((resolve, reject)=>{
//         axios.post("/api/auth/register", data)
//         .then((data) =>{
//             resolve(data)
//         })
//             .catch((e)=>{
//                 reject(e.response)
//             })
//     })
// }

// export const refreshAccessToken = (data) =>{
//     return new Promise((resolve, reject)=>{
//         axios.post("/auth/refresh", data)
//         .then(data =>
//             resolve(data))
//             .catch(e=>{
//                 reject(e.response)
//             })
//     })
// }



import axios from "axios";

export const login = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/auth/login", data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((e) => {
        reject(e.response);
      });
  });
};

export const register = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/auth/register", data)
      .then((data) => {
        resolve(data);
      })
      .catch((e) => {
        reject(e.response);
      });
  });
};

export const refreshAccessToken = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/auth/refresh", data)
      .then((data) => {
        resolve(data);
      })
      .catch((e) => {
        reject(e.response);
      });
  });
};