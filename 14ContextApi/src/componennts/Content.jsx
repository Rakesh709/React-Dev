import React, { useContext } from 'react'
import LanguageContext from '../context/LanguageContext '

function Content() {
    const {language,translations} = useContext(LanguageContext)
  return <p>{translations[language].content}</p>;
  
}

export default Content