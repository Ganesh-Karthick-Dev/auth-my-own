import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios'

const SignupPage = () => {


  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')

  const [res,setRes] = useState('')

  // console.log(username);
  // console.log(password);

  const handleSignup = ()=> {
    if(username && password !== ''){
      axios.post("http://localhost:8000/user/create/",{
        username,
        password
      })
      .then((data)=>{
        console.log(`successfully sent user details to backend`);
        let successData = data.data.val
        console.log(successData);
        setRes(successData)
      })
      .catch((err)=>{
        let errorData = JSON.stringify(err.response.data)
        console.log(`error while sending user data to backend - ${errorData}`);
        setRes(errorData)
      })
    }
    else{
      console.log(`please fill both fields !`);
    }
  }


  return (
    <>
    <h1><span className=' text-3xl'>C</span>reate a new user here !</h1>

    <h1 className=' text-red-800 text-center font-extrabold text-4xl'>{res}</h1>

    <div className=' border border-neutral-300 w-fit p-5 m-5 flex flex-col gap-4'>

      <table className=''>
        <tbody>
        <tr>
          <td>
          <label htmlFor="username" >User Name</label>
          </td>
          <td>
          <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} id='username' className=' border border-zinc-600'/>
          </td>
        </tr>
        <tr>
          <td>
          <label htmlFor="password" >Password</label>
          </td>
          <td>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} id='password' className=' border border-zinc-600'/>
          </td>
        </tr>
        </tbody>
      </table>

      <button className=' text-dark font-bold bg-lime-400 py-2 hover:text-white hover:bg-lime-600' onClick={handleSignup}>Signup</button>

    </div>

    <div>
      <h1> already have an account 😱 , want to ➡️ 
    <NavLink className={` text-red-500`} to="/">
      Login
    </NavLink>
      </h1>
    </div>
    </>
  )
}

export default SignupPage;