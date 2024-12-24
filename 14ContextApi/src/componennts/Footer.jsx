import React,{useContext} from 'react'
import LanguageContext from '../context/LanguageContext '

function Footer() {
    const { language, translations } = useContext(LanguageContext);
  return <footer>{translations[language].footer}</footer>;
}

export default Footer