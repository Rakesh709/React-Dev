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
import LanguageContext from './context/LanguageContext '
import Content from './componennts/Content'
import Header from './componennts/Header'
import Footer from './componennts/Footer'



function App() {
  const [themeMode,setThemeMode] =useState("light")

  const [language,setLanguage] = useState("en")

  const switchLanguage = (lang)=> setLanguage(lang)

  const translations = {
    en: { greeting: "Hello", content: "This is the content.", footer: "Footer content" },
    es: { greeting: "Hola", content: "Este es el contenido.", footer: "Contenido del pie de página" },
    fr: { greeting: "Bonjour", content: "Ceci est le contenu.", footer: "Contenu du pied de page" },
  };

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
    <LanguageContext.Provider value={{language,translations,switchLanguage}}>
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
    <div>
      <Header/>
      <Content/>
      <Footer/>
    </div>
    </LanguageContext.Provider>
  )
}



export default App
