import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card/Card";

function App({name}) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Card name="Rakesh Kumar"/>
        
      </div>
    </>
  );
}

export default App;
