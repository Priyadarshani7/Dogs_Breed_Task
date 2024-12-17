// components/Error.js
import React from "react";

const Error = ({ message }) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-red-100">
      <div className="text-center p-6 bg-red-600 text-white rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Something Went Wrong!</h1>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Error;
