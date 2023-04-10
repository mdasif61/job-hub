import React, { createContext, useState } from "react";
import Header from "./Header";
import { Outlet, useLoaderData } from "react-router-dom";

export const createJob = createContext([]);
export const condition = createContext();
const Main = () => {
  const jobData = useLoaderData();
  const [open,setOpen]=useState(false)
  return (
    <createJob.Provider value={jobData}>
      <condition.Provider value={[open,setOpen]}>
      <div>
        <Header></Header>
        <Outlet></Outlet>
      </div>
      </condition.Provider>
    </createJob.Provider>
  );
};

export default Main;
