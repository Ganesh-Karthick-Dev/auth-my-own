import React from 'react'
import { Outlet } from 'react-router-dom'




const AuthPage = () => {
  return (
    <>
    {/* <h1 className=' text-center my-4'>Welcome to Auth Test Project</h1> */}
    <Outlet />
    </>
  )
}

export default AuthPage;