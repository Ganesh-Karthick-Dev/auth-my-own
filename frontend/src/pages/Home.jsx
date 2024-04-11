import React, { useContext } from 'react'
import { userContext } from '../hooks/userContext';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const {val,removeUser} = useContext(userContext)

    const navigate = useNavigate();
    // const history = useHistory();

    const handleLogout =()=> {
        removeUser()
        navigate('/')     
        // history.replace('')  
    }

  return (
    <>
    {
        val !== '' ? <h1>Hi {val} 👋</h1> : <h1>Hi guest user 👋</h1>
        // val !== '' ? <h1>Hi {val} 👋</h1> : <h1>Hi guest user 👋</h1>
    }
    
    <h1>Welcome to Dashboard , after successfull user Authentication 🥳 !</h1>
    <button className=' border border-red-500 px-3 rounded-md hover:bg-red-500 hover:text-white hover:border-red-700 py-2' onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Home;