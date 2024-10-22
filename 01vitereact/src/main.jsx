import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import Chai from './Chai.jsx'

function MyApp(){
  const userName = "Chai aur code"
  return (
    <h1>This is custom jsx {userName}</h1>
  )
}
// at the end of the day jsx function converted into below one only 

// const reactElement={
//   type:'a',
//   props:{
//       href:"https://www.google.com",
//       target:'_blank'
//   },
//   children:'click me to visit google'
// }

const anotherElement = (
  <a href="http://google.com" target='_blank'>Visit google</a>
)

const anotherrUser = "Chai aur react";

const reactElement2 = React.createElement(
  'a',
  {href:"https://ggogle.com",target:'_blank'},
  "click me to visit google",
  anotherrUser
)




// createRoot(document.getElementById('root')).render(
//   <>
//     <Chai/>
//     <App /> 
//     <MyApp/>
//      {/* MyApp() */}
//   </> 
// )


// ReactDOM.createRoot(document.getElementById('root')).render(
//   reactElement2
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  reactElement2
)