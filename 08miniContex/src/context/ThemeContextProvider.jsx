import React from "react";

import ThemeContext from "./ThemeContex.js";

//method 
const ThemeContextProvider = ({children})=>{
    const [theme, setTheme] = React.useState('light')
    return(
        <ThemeContext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider;