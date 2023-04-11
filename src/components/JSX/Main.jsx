import React, { createContext, useState } from "react";
import Header from "./Header";
import { Outlet, useLoaderData } from "react-router-dom";

export const createJob = createContext([]);
const Main = () => {
  const jobData = useLoaderData();
  return (
    <createJob.Provider value={jobData}>
      <div>
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </createJob.Provider>
  );
};

export default Main;
