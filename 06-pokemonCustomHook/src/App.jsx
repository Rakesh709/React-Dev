import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import usePokimonInfo from "./hooks/usePokimonInfo";
import Card from "./components/Card";
import useCounter from "./hooks/useCounter";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";

function App() {
  
  const [data] = usePokimonInfo();

  
  
  return (
    <>
      <Card/>
      <Counter1/>
      <Counter2/>
      
    </>
  );
}

export default App;
