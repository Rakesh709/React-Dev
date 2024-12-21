import React from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent({message,ver}) {
  return (
    <div> <ChildComponent message={message}  ver={ver}/> 
    
    </div>
  )
}

export default ParentComponent