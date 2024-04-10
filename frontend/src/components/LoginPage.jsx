import React, { useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const LoginPage = () => {

  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('')

  const [res,setRes] = useState('')

  const handleLogin = ()=> {

    let data = {
      username,
      password
    }

    axios.post('http://localhost:8000/user/read',data)
    .then((d)=>{
      console.log(`user found 😁`);
      setRes(d.data.val)
    })
    .catch((err)=>{
      console.log(err);
      let errorData = JSON.stringify(err.response.data)
      setRes(errorData)
    })

  }

  return (
    <>
    <h1><span className=' text-3xl'>L</span>ogin to get Started !</h1>

    <h1 className=' text-red-800 text-center font-extrabold text-4xl'>{res}</h1>

    <div className=' border border-neutral-300 w-fit p-5 m-5 flex flex-col gap-4'>

      <table className=''>
        <tbody>
        <tr>
          <td>
          <label htmlFor="username" >User Name</label>
          </td>
          <td>
          <input type="text" value={username} onChange={e=>setUsername(e.target.value)} id='username' className=' border border-zinc-600'/>
          </td>
        </tr>
        <tr>
          <td>
          <label htmlFor="password" >Password</label>
          </td>
          <td>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} id='password' className=' border border-zinc-600'/>
          </td>
        </tr>
        </tbody>
      </table>

      <button onClick={handleLogin} className=' text-dark font-bold bg-lime-400 py-2 hover:text-white hover:bg-lime-600'>Login</button>

    </div>

    <h1>don't have an account 🥲 ? create new one here ➡️
    <NavLink className={` text-red-500`} to="signup">
      signup
    </NavLink>
    </h1>
    </>
  )
}

export default LoginPage