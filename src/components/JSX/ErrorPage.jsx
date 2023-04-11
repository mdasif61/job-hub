import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-full flex-col h-screen flex items-center justify-center">
      <h1 className="text-4xl text-red-600 font-bold">Error 404</h1>
      <p className="text-xl font-semibold my-3">page not found</p>
      <Link to="/">
        <button className="btn mt-3">Back To Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
