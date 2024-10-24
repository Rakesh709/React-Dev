import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObjet= {
    name:"Rakesh",
    age:24
  }

  let newArray= [1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black rounded-sm mb-4' >Tailwind test</h1>
        

        <Card name="rakesh" someObject={myObjet} myArray={newArray}  publisher="toi"/>
        <Card name="Prime" publisher="green gold" />

    </>
  )
}

export default App
