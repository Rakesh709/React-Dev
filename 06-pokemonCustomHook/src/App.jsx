import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import usePokimonInfo from "./hooks/usePokimonInfo";
import Card from "./components/Card";

function App() {
  const [id, setId] = useState('');
  const data = usePokimonInfo(id);

  return (
    <>
      <div >
        <Input id={id} onIdChange={setId} />
        {data ? <Card name={data.name} /> : <p>No Pokémon data available</p>}
      </div>
    </>
  );
}

export default App;
