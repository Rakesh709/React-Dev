import { useEffect, useState } from "react"


function usePokimonInfo(id){
    const [data,setData] = useState({})

    useEffect(()=>{
        if (!id) return;

        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then((res)=>res.json())
        .then((res)=> setData(res.evolves_from_species.name))
        // .then((res)=> setData(res[evolves_from_species.name]))
        .catch((err) => {
            console.error("Error fetching Pokémon data:", err);
            setData(null);
          });
        //   console.log(data);
          
    },[id])
    console.log(data);
    return data;
    
    


}

export default usePokimonInfo;