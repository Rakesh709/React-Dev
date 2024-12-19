import React from "react";
import usePokimonInfo from "../hooks/usePokimonInfo";


function Card() {
const [data]= usePokimonInfo()

  return (
    <>
      <div>
        <div className="mt-4 text-center">
        {data.map((pokemon, index) => (
        <div
          key={index}
          className="max-w-sm mx-auto bg-green-300 rounded-lg shadow-lg p-6 my-7"
        >
          <div className="mt-4 text-center">
            <h1 className="text-xl font-bold text-gray-800">{pokemon.name}</h1>
            <h2> {pokemon.url}</h2>
          </div>
        </div>
      ))}
          
        </div>
      </div>
    </>
  );
}

export default Card;
