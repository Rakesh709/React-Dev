import React, { useContext, useState } from 'react'
import UserContextProvider from '../context/UserContextProvider'
import UserContext from '../context/userContext'



function Login() {
  const [username,setUsername]= useState("")
  const [password,setPassword] = useState("")

  //how to use context 
  const {setUser} = useContext(UserContext)


  const handleSubmit = (e)=>{
      e.preventDefault()
      setUser({username,password})
  }

  return (
    <div>
    <h1>Login</h1>
      <input type="text" 
      value={username}
      onChange={(e)=> setUsername(e.target.value)}
      placeholder='username'
      />
      
      <input type="password"
      value={password}
      onChange={(e)=> setPassword(e.target.value)}
      placeholder='password'
      className='mx-4'
       />
       <button className='bg-blue-400 rounded-sm' onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login