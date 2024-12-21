import React from 'react'
import GrandChildComponent from "./GrandChildComponent";

function ChildComponent({message,ver}) {
  return (
    <div><GrandChildComponent message={message} ver={ver}/>
      <h1>This is children : {message}</h1>
      <p>This is Children : Version: {ver}</p>
    </div>
  )
}

export default ChildComponent