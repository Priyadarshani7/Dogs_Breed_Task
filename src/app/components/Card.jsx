import React from "react";
import Link from "next/link";

const Card = ({ breed }) => {
  return (
    <div className="p-6 bg-white rounded-lg border border-gray-300 hover:shadow-xl transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        {breed.attributes.name}
      </h2>

      <p className="text-black font-bold mb-2">Description</p>
      <p className="text-gray-700 mb-4 line-clamp-2 font-bold">
        {breed.attributes.description || "No description available."}
      </p>

      <div className="border-t border-gray-200 my-4"></div>

      <div className="mb-4 flex justify-between">
        <p className="text-lg font-bold text-gray-700">Life Expectancy:</p>
        <p className="text-gray-700 font-bold">
          {breed.attributes.life.min} - {breed.attributes.life.max} years
        </p>
      </div>

      <div className="border-t border-gray-200 my-4"></div>

      <div className="mb-4 flex justify-between">
        <p className="text-lg font-semibold text-gray-700">Hypoallergenic:</p>
        <p className="text-gray-700 bg-gray-200 rounded-full px-4 py-2 font-bold">
          {breed.attributes.hypoallergenic ? "Yes" : "No"}
        </p>
      </div>

      <div className="border-t border-gray-200 my-4"></div>

      <div className="mb-4 flex">
        <p className="text-m font-semibold text-gray-400">
          Type: {breed.type || "Unknown"}
        </p>
      </div>

      <Link href={`/breeds/${breed.id}`}>
        <button className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-all duration-300 ease-in-out transform hover:scale-105">
          View More Details
        </button>
      </Link>
    </div>
  );
};

export default Card;
