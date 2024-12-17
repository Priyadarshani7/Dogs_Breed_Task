"use client"

import React, { useState, useEffect } from "react";

import Card from "../components/Card"
import Loader from "../components/Loader";
import Error from "../components/Error";

export default function HomePage() {

  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dogapi.dog/api/v2/breeds")
      .then((response) => response.json())
      .then((data) => {
        setBreeds(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch dog breeds.");
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Dog Breeds
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {breeds.map((breed) => (
          <Card key={breed.id} breed={breed} />
        ))}
      </div>
    </div>
  );
}
