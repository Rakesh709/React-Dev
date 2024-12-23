import React, { useState } from 'react'
import ThemeContext, { ThemeProvider } from './ThemeContex'

const ThemeContextProvider = ({children})=>  {
    
  return (
    <ThemeProvider value={{darkTheme,lightTheme,themeMode}}>
        {children}
    </ThemeProvider>
    
  )
}

export default ThemeContextProvider