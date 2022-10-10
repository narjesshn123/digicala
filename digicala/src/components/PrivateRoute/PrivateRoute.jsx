import React from 'react'
import { Navigate } from 'react-router-dom'
import Auth from '../../api/localStorage';
// import { useNavigate } from "react-router-dom";                   
// const isLogin = Auth.checklogin()
 const Withauth = (WrappedComponent, isLogin) => {
    // const navigate = useNavigate();  
//   let navigate = useNavigate();

 if(isLogin){
    
    return (props)=> <WrappedComponent    {...props}/>
 }
 else  {
     return (props)=> <Navigate to={'/login'} {...props} />
 }
 
}

export default Withauth
       