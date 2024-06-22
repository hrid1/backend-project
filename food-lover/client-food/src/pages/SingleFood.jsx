import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { useParams } from "react-router-dom";

const SingleFood = () => {

    const {id} = useParams();
    // console.log(id);
    const [food, setFood] = useState({});

    fetch(`http://localhost:6002/foods/${id}`)
    .then(res => res.json())
    .then(data => setFood(data));




  return (
    <div>
        
      <div className="max-w-3xl mx-auto mt-8 p-4 bg-white rounded-lg shadow-md">
        <div className="flex">
          <div className="w-1/2">
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="w-1/2 ml-4">
            <h2 className="text-3xl font-semibold mb-4">{food.name}</h2>
            <p className="text-gray-700 mb-2">{food.description}</p>
            <p className="text-gray-900 font-semibold">${food.price}</p>
           
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-4">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* <h1>Hello vai {food.name}</h1> */}

    </div>
  );
};

export default SingleFood;
