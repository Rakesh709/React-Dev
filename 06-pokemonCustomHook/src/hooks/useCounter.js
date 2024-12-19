import {useState} from 'react'

function useCounter(initialValue=0) {
    const [counter,setCounter] = useState(initialValue);

    function increment(){
      setCounter(counter+1)
    }
  
    function decrement(){
      setCounter(counter-1)
    }
  return [counter, increment,decrement]
}

export default useCounter