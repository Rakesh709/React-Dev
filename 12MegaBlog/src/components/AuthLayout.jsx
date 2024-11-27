//protection mechanism
//protected layer
//this is container

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader,setLoader]= useState(true)

  const authStatus = useSelector(state => state.auth.status)

  useEffect(()=>{
    //TODO make it easy to understand
    //   true         &&  false !== true (true is final so both become true so send to login)

    //let authvalue = authstatus === true ? true : false
    
    if(authentication && authStatus !== authentication){
        navigate('/login')
    //        !true = false  &&  true != true (it will become false)
    }else if(!authentication && authStatus !== authentication){
      navigate("/")
    }
    setLoader(false)
  },[authStatus,navigate,authentication])

  return loader ? <h1> Loading...</h1> : <>{children}</>
}

//we can give diffrent function name then file
