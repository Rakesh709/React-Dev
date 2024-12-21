import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParentComponent from './components/ParentComponent'

function App() {
  const message ="Hello from app rakesh"
  const ver ="1.0.1 from app"
  return (
    <>
      <ParentComponent message={message} ver={ver} />
    </>
  )
}

export default App
