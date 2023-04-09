import React from "react";
import "../Css/JobCart.css";
import { Link } from "react-router-dom";

const JobCart = ({ job,setDisplay,display}) => {
  console.log(job);
  return (
    <div className="border-2 p-10 rounded-lg">
      <div>
        <img className="h-12 w-36 mb-7" src={job.icon} alt="" />
        <h1 className="text-2xl font-bold">{job.title}</h1>
        <p className="text-xl mt-2 mb-4">{job.tags}</p>
        <div className="flex mb-4">
          <h1 className="text-purple-500 border mr-3 px-4 py-1 border-purple-500 rounded-md cursor-pointer">
            {job.jobTime.fullTime}
          </h1>
          <h1 className="text-purple-500 border mr-3 px-4 py-1 border-purple-500 rounded-md cursor-pointer">
            {job.jobTime.onTime}
          </h1>
        </div>
        <div className="flex">
          <div className="flex mr-5 my-3">
            <img className="mr-2" src={job.locationIcon} alt="" />
            <p className="text-bold">{job.location}</p>
          </div>
          <div className="flex mr-5 my-3">
            <img className="mr-2" src={job.salaryIcon} alt="" />
            <p className="text-bold">{job.salary}</p>
          </div>
        </div>
        <button onClick={()=>setDisplay(!display)} className="btn viewBtn mt-4">View Details</button>
      </div>
    </div>
  );
};

export default JobCart;
