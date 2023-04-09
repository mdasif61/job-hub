import React, { useContext, useState } from "react";
import { createJob } from "./Main";
import JobCart from "./JobCart";
import "../Css/FeaturedJob.css";

const FeaturedJob = () => {
  const jobDataAll = useContext(createJob);
  const [isLoad, setIsLoad] = useState(false);
  return (
    <>
      <h1 className="text-5xl text-center mb-4 font-bold mt-28">
        Featured Jobs
      </h1>
      <p className="text-center mb-8 text-gray-500">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {!isLoad && jobDataAll.slice(0, 4).map((job) => <JobCart key={job.id} job={job}></JobCart>)}
      </div>
      <div className="text-center">
        <button onClick={()=>setIsLoad(isLoad)} className="btn showBtn my-10">
          See All Jobs
        </button>
      </div>
    </>
  );
};

export default FeaturedJob;
