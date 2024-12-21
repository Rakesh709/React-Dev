import React from 'react'

function GrandChildComponent({message,ver}) {
  return (
    <div><h1> This is grandChildren: {message}</h1>;
    <p> This is grandChildren : {ver}</p>
    </div>
  )
}

export default GrandChildComponent