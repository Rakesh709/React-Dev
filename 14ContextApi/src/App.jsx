import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './componennts/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './componennts/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1>
        React with chai and share is imp
      </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
