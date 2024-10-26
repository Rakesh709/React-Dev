import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter] =useState(15)

  //let counter =15

  const addValue = ()=> {
    //console.log("clicked",Math.random());
    //console.log("clicked",counter);
    // if(counter==20){
    //   setCounter(counter=20)
    // }else{
    //   setCounter(counter+1) 
    // }


    // setCounter(counter+1)
    setCounter((prevCounter)=> prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)
    setCounter((prevCounter)=>prevCounter+1)    

    // So setCounter have a call back hidden feature which will give call back and willt ake it and update the ui
  }


  const removeValue = ()=>{
    if(counter==0){
      setCounter(counter=0)
    }else{
      setCounter(counter-1)
    }
  }

  return (
    <>
     <h1>Chai and react</h1>
     <h2>Counter value {counter}</h2>

     <button
     onClick={addValue}
     >Add Value {counter}</button>
     <br />
     <button
     onClick={removeValue}
     >remove Value {counter}</button>
     <p>Footer: {counter}</p>
    </>
  )
}

export default App
