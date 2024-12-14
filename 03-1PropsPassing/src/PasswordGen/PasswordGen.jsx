//length -> nuumber -> charcter

import React, { useCallback, useEffect, useState } from "react";
import { useRef } from "react";

function PasswordGen() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [charcter, setCharacter] = useState(false);
  const [password, setPassword] = useState("");


  const passwordRef = useRef(null)

  const passwordGenerater = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number){
      str+="1234567890"
    }
    if (charcter) str+= "!@#$%^&*()";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, number, charcter, setPassword]);


  const passwordGenCopy = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerater()
  },[length,number,charcter,passwordGenerater])


  return (
    <>
    <h1 className="text-2xl">Password Generater</h1>
      <div>
        <input
         type="text" 
         value={password} 
         readOnly 
         placeholder="password"
         ref={passwordRef}
          />
        <button
          onClick={passwordGenCopy}
        >Copy</button>
      </div>
      <div>
        <div>
          <input
            type="range"
            min={8}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label>length:{length}</label>
        </div>
        <div>
            <input type="checkbox"
            value={setNumber}
            id="numberInput"
            onChange={()=>setNumber((prev)=>!prev)}
             />
             <label>Number</label>
        </div>
        <div>
          <input 
             type="checkbox" 
             defaultChecked={setCharacter}
             id="characterInput"
             onChange={()=>setCharacter((Charprev)=> !Charprev)}
           />
           <label >Character</label>
        </div>
      </div>
    </>
  );
}

export default PasswordGen;
