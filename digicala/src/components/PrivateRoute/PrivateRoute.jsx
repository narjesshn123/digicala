import React from 'react'
import { Navigate } from 'react-router-dom'
import Auth from '../../api/localStorage';

 const Withauth = (WrappedComponent) => {
   

 if(Auth.checklogin()){
    
    return (props)=> <WrappedComponent    {...props}
    />
 }
 else {
     return (props)=> <Navigate to={'/login'} {...props} />
 }
 
}

export default Withauth
       