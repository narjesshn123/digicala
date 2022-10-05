import React from 'react'
import { Navigate } from 'react-router-dom'

 const Withauth = (WrappedComponent, isLogin) => {
 if(isLogin){
    return (props)=> <WrappedComponent    {...props}/>
 }
 else{
     return (props)=> <Navigate to={"/login"} replace={true} {...props}/>
 }
}

export default Withauth
