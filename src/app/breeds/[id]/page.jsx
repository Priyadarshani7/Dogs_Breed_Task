"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Details from "@/app/components/Details";

export default function BreedDetails() {
  const { id } = useParams();
  const [breed, setBreed] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBreedDetails() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://dogapi.dog/api/v2/breeds/${id}`);

        if (!response.ok) {
          throw new Error("Breed not found.");
        }

        const data = await response.json();
        setBreed(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchBreedDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="p-6 min-h-screen bg-gray-50 flex justify-center items-center">
        <p className="text-xl font-semibold text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 min-h-screen bg-gray-50 flex justify-center items-center">
        <p className="text-xl font-semibold text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      {breed ? <Details breed={breed} /> : <p>Breed not found.</p>}
    </div>
  );
}
