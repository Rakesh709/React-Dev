import React from "react";

function Card({name="Unknown",age="null"}) {
  return (
    <>
      <div class="max-w-sm mx-auto bg-white rounded-lg shadow-lg p-6 my-8 ">
        {/* <!-- Profile Picture --> */}
        <div class="flex justify-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
            class="w-24 h-24 rounded-full border-2 border-blue-500"
          />
        </div>

        {/* <!-- Details --> */}
        <div class="mt-4 text-center">
          <h2 class="text-xl font-bold text-gray-800">{name}</h2>
          <p class="text-sm text-gray-600">Age: {age}</p>
          <p class="mt-2 text-gray-700">
            Software Developer with a passion for creating dynamic user
            experiences and efficient backend systems.
          </p>
        </div>

        {/* <!-- Contact Number --> */}
        <div class="mt-4 text-center">
          <p class="text-sm font-medium text-gray-800">
            <span class="font-bold text-blue-500">Contact:</span> +1 234 567 890
          </p>
        </div>
        
      </div>
    </>
  );
}

export default Card;
