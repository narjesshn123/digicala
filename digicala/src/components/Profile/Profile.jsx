import React from 'react'
import Auth from '../../api/localStorage'
import WithAuth from '../PrivateRoute/PrivateRoute'
const isLogin = Auth.checklogin()
const Profile = () => {
  return (
    <div>
      jkbkjkjbkjbkjbbkjb
    </div>
  )
}

export default WithAuth(Profile, isLogin) 
