import { useEffect, useState } from "react";

function usePokimonInfo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10`)
      .then((res) => res.json())
      .then((res)=>setData(res.results))
      
      .catch((err) => {
        console.error("Error fetching Pokémon data:", err);
        setData(null);
      });
  
  }, []);
  console.log(data);
  return [data];
}

export default usePokimonInfo;
