import React,{createContext,useContext} from "react";


//varibales and method we can give as intial value
export const ThemeContext = createContext({
    themeMode:'light',
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}