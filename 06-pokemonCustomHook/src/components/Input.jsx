import React from "react";

function Input({ id, onIdChange }) {
  return (
    <div className="my-4">
      <div className="text-lg font-semibold mb-2">Search The Pokémon</div>
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Enter Pokémon ID"
          value={id}
          onChange={(e) => onIdChange(Number(e.target.value))}
          className="border rounded px-3 py-1"
        />
      </div>
    </div>
  );
}

export default Input;
