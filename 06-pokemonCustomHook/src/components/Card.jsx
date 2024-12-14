import React from "react";

function Card({name}) {
  return (
    <>
      <div class="max-w-sm mx-auto bg-green-300 rounded-lg shadow-lg p-6 my-8 ">
    
        {/* <!-- Details --> */}
        <div class="mt-4 text-center">
          <h2 class="text-xl font-bold text-gray-800">{name}</h2>
        </div>

      
      </div>
    </>
  );
}

export default Card;
