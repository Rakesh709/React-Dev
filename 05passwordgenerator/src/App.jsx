import { useState, useCallback,useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYXabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+";

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    
    console.log(pass);
    
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
  // above array list is for optimize

//in react we have window objwct so => window.navigator.clipboard.writeText(password)

//in next js we don't have window object will see later

  //useRef hook
  const copyPasswordToClipBoared = useCallback(()=>{
    passwordRef.current?.select();
    //for the range selection
    // passwordRef.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(password)
  },[password])

    // TO RUN THE GENERATE PASSWORD FUNCTION
  //ager page load hua to run krna function or agger array list mai so kuch bhi change hua to function ko re run krna uskai lia useEffect hook use kr rhe hai 
  useEffect(()=>{
      passwordGenerator()
  },[length,charAllowed,numberAllowed,passwordGenerator])
  // above list is more depencency kuch bhi change hua run kro


  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4  py-3 my-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className=" flex flex-shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipBoared}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
              <div className="flex items-center gap-x-1">
                  <input type="range" min={6} max={20} value={length} className="cursor-pointer" onChange={(e)=> setLength(e.target.value)} />
                  <label>Length: {length}</label>
              </div>
              <div className="flex items-center gap-x-1">
                  <input type="checkbox"
                  defaultChecked={numberAllowed}
                  id="numberInput"
                  onChange={()=>{
                    setNumberAllowed(prev=>!prev)
                  }}
                  
                   />
                   <label htmlFor="numberInput">Numbers</label>
              </div>
              <div className="flex items-center gap-x-1">
                  <input type="checkbox"
                  defaultChecked={charAllowed}
                  id="charcaterInput"
                  onChange={()=>{
                    setCharAllowed((prev)=> !prev)
                  }}
                   />
                   <label htmlFor="characterInput">Characters</label>
              </div>
        </div>
      </div>
    </>
  );
}

export default App;
