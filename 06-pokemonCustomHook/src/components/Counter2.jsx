import React from "react";
import useCounter from "../hooks/useCounter";


function Counter2() {
    const [counter, increment,decrement] = useCounter(10)
  return (
    <div>
      <h1 className="text-3xl">{counter}</h1>
      <button className="bg-green-500" onClick={increment}>
        increment
      </button>
      <button className="bg-red-600 mx-4" onClick={decrement}>
        decrement
      </button>
    </div>
  );
}

export default Counter2;
