import axios from "axios"; 
import Auth from "./localStorage"; 
import { refreshAccessToken } from "./authentication";       
const instance = axios.create({
    // baseURL: 'https://some-domain.com/api/',
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
})
instance.interceptors.request.use(
    function(config){
        const token = Auth.getAccessToken()
        if(token){
            config.headers["Autorization"] = "token" + token
        }
        return config
    },
    function(error){
        return Promise.reject(error)
    }
)

instance.interceptors.response.use(
    function(response){
        return response
    },
    function(error){
        const res = error.response; 
        const orginalRequest = error.config

        if(res.status === 401){
            if(!orginalRequest ._retry){
            orginalRequest._retry = true;
            //retun one thing that bring accessToken
            return refreshAccessToken( 
            {"refreshToken": Auth.getAccessToken()
        })
        .then(res=>{
            if(res.status<300){
                Auth.setAccessToken(res.data.accessToken)
                orginalRequest.headers["Authorization"] = "token" + 
                Auth.getAccessToken()
                return instance(orginalRequest(error))
            }
        })
    }
    else{
        Auth.login("", "")
    }
        }
        console.log(error.response)
        return Promise.reject(error)
    }
)
export default instance
