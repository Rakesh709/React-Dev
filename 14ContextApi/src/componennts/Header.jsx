import React, { useContext } from 'react'
import LanguageContext from '../context/LanguageContext '

function Header() {
    const {language,translations,switchLanguage} =useContext(LanguageContext)
  return (
    <header>
      <h1>{translations[language].greeting}!</h1>
      <button className='bg-red-400 py-5 mx-4' onClick={() => switchLanguage("en")}>English</button>
      <button className='bg-green-400 py-5 mx-4' onClick={() => switchLanguage("es")}>Español</button>
      <button className="bg-yellow-400 py-5 mx-4" onClick={() => switchLanguage("fr")}>Français</button>
    </header>
  )
}

export default Header