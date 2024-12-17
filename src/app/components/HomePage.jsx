"use client";

import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function HomePage() {
  const [breeds, setBreeds] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); 

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);

  useEffect(() => {
    fetch("https://dogapi.dog/api/v2/breeds")
      .then((response) => response.json())
      .then((data) => {
        setBreeds(data.data);
        setFilteredBreeds(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch dog breeds.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredBreeds(breeds); 
    } else {
      const filtered = breeds.filter((breed) =>
        breed.attributes.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredBreeds(filtered); 
    }
  }, [searchQuery, breeds]);

  const indexOfLastBreed = currentPage * itemsPerPage;
  const indexOfFirstBreed = indexOfLastBreed - itemsPerPage;
  const currentBreeds = filteredBreeds.slice(indexOfFirstBreed, indexOfLastBreed);

  const totalPages = Math.ceil(filteredBreeds.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-black">
        Dog Breeds
      </h1>

      <div className="mb-6 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search for a breed..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 ">
        {currentBreeds.map((breed) => (
          <Card key={breed.id} breed={breed} />
        ))}
      </div>

      <div className="flex justify-center items-center mt-6 space-x-4">
  <button
    onClick={() => paginate(currentPage - 1)}
    disabled={currentPage === 1}
    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
  >
    Previous
  </button>

  <span className="text-gray-700 font-semibold text-xl">
    Page {currentPage} of {totalPages}
  </span>

  <button
    onClick={() => paginate(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md"
  >
    Next
  </button>
</div>

     
    </div>
  );
}
