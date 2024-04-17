import React, { useContext } from 'react'

import Navbar from '../components/Navbar';
import { userContext } from '../hooks/userContext';


const Home = () => {

  const {val} = useContext(userContext)
    

  return (
    <>
    {
        val !== '' ? <h1>Hi {val} 👋</h1> : <h1>Hi guest user 👋</h1>
        // val !== '' ? <h1>Hi {val} 👋</h1> : <h1>Hi guest user 👋</h1>
    }
    
    <h1>Welcome to Dashboard , after successfull user Authentication 🥳 !</h1>
    
    <Navbar />
    </>
  )
}

export default Home;