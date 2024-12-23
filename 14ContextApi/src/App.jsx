import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './componennts/Login'
import UserContextProvider from './context/UserContextProvider'
import Profile from './componennts/Profile'
import { ThemeProvider } from './context/ThemeContex'
import ThemeButton from './componennts/ThemeButton'
import Card from './componennts/Card'




function App() {
  const [themeMode,setThemeMode] =useState("light")

  const lightTheme = ()=>{
    setThemeMode("light")
  }

  const darkTheme = ( )=>{
    setThemeMode("dark")
  }

  //actual change in theme
useEffect(()=>{
  document.querySelector('html').classList.remove("light","dark")
  document.querySelector("html").classList.add(themeMode)
},[themeMode])


  return (
    <UserContextProvider>
      <h1>
        React with chai and share is imp
      </h1>
      <Login/>
      <Profile/>
      <ThemeProvider value={{darkTheme,lightTheme,themeMode}}>
          <div>
          <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeButton/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
          </div>
      </ThemeProvider>
    </UserContextProvider>
  )
}



export default App
