//length -> nuumber -> charcter 

import React, { useCallback, useState } from 'react'

function PasswordGen() {

    const [length, setLength]= useState(8)
    const [number, setNumber] = useState(false)
    const [charcter, setCharacter]= useState(false)
    const [password, setPassword]= useState("")

    const passwordGenerater = useCallback(()=>{

        const pass=''
        const str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

        if(numberAllowed) str+="0123456789"
        if(charcterAllowed) str+="!@#$%^&*()"

        for(let i=1; i<=length;i++){
            let char = Math.floor(Math.random() * str.length+1)
            pass = str.charAt(char) 
        }

        setPassword(char)
    },[length,number,charcter,setPassword])
    


  return (
    <div>PasswordGen</div>
  )
}

export default PasswordGen