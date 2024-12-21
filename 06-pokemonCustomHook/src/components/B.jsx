import React from 'react'
import useOnline from '../hooks/useOnline'

function B() {
  return (
    <div>B - {useOnline() ? "online": "offLine"}</div>
  )
}

export default B