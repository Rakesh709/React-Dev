//length -> nuumber -> charcter

import React, { useCallback, useState } from "react";

function PasswordGen() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [charcter, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

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

  return (
    <>
      <div>
        <input type="text" value={password} readOnly placeholder="password" />
        <button>Copy</button>
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
           defaultChecked={number}
          
          
           />
          <label>Number</label>
        </div>
        <div>
            <input type="checkbox"
            value={setCharacter}
            id="numberInput"
            onChange={()=>setNumber((prev)=>!prev)}
             />
             <label>Number</label>
        </div>
        <div>
          <input 
             type="checkbox" 
             defaultChecked={charcter}
             id="characterInput"
             onChange={()=>setCharacter((prev)=> !prev)}
           />
           <label >Character</label>
        </div>
      </div>
    </>
  );
}

export default PasswordGen;
