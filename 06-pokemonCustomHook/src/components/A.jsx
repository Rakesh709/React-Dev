import React from 'react'
import useOnline from '../hooks/useOnline'
import useFetch from '../hooks/useFetch';

function A() {
    const isOnline = useOnline();
    const [data] = useFetch("https://api.github.com/users")
  return (
    <>
    <div>A - {isOnline? "🟢" : "🔴"}</div>
    <div>
        <h1>Github users</h1>
        {data.map((res)=>(
            <li key={res.id}>{res.login}</li>
        ))}
    </div>
    </>
    
  )
}

export default A