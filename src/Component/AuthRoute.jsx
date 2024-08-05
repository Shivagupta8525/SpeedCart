import React from 'react'
import { Navigate } from 'react-router-dom'
import { withUser } from './withProvider'

 

function AuthRoute({user,children}) {
  if(user){
    console.log("rinining")
   return <Navigate to='/' replace></Navigate>
  }

  return children
}

export default  withUser(AuthRoute);
