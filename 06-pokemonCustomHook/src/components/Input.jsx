import React from "react";
import usePokimonInfo from "../hooks/usePokimonInfo.js"

function Input({ id, onIdChange,data }) {
  return (
    <div className="my-4 items-center">
      <div className="text-lg font-semibold mb-2">Search The Pokémon</div>
      <div className="gap-2 mt-4">
        <input
          type="number"
          placeholder="Enter Pokémon ID"
          value={id}
          onChange={(e) => onIdChange(Number(e.target.value))}
          className="border rounded px-3 py-1"
        />
      </div>
      <div class="max-w-sm mx-auto bg-green-300 rounded-lg shadow-lg p-6 my-8 ">
        <div className="mt-4 text-center">
        <h2 className="text-xl font-bold text-gray-800">
            {data || "No data available"}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Input;
