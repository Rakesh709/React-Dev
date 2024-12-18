import React, { useState } from 'react'
import Cookies from 'js-cookie'

function useLogin() {
    const [isLoggedIn, setLoggedIn ] = useState(Cookies.get('login')==='true')
    const handleLogIn = ()=>{
        Cookies.set('login', 'true')
        setLoggedIn(true)
    }

    const handleLogOut= ()=>{
        Cookies.remove('login')
        setLoggedIn(false)
    }

  return{
    isLoggedIn,
    handleLogIn,
    handleLogOut
  }
}

export default useLogin