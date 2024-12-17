import React from "react";

const Details = ({ breed }) => {
  return (
    <div className="p-6 bg-white rounded-lg border border-gray-300 hover:shadow-lg transition w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        {breed.attributes.name}
      </h2>

      <p className="text-sm font-semibold text-gray-400 mb-4">
        Breed ID : {breed.id}
      </p>

      <p className="text-black font-bold mb-2">Description</p>
      <p className="text-gray-400 mb-4 font-medium">
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

      <div>
        <p className="font-bold text-lg text-gray-700 mb-1">Weight Range</p>
        <div className="flex justify-between">
          <p className="font-bold text-gray-700 mb-1 text-lg">Male</p>
          <p className="font-bold text-gray-700 mb-1 text-lg">
            {breed.attributes.male_weight.max}-{" "}
            {breed.attributes.male_weight.min} kg
          </p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold text-gray-700 mb-1 text-lg">Female</p>
          <p className="font-bold text-gray-700 mb-1 text-lg">
            {breed.attributes.female_weight.max}-{" "}
            {breed.attributes.female_weight.min} kg
          </p>
        </div>
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
    </div>
  );
};

export default Details;
