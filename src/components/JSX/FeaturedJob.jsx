import React, { useContext, useState } from "react";
import { createJob } from "./Main";
import JobCart from "./JobCart";
import "../Css/FeaturedJob.css";

const FeaturedJob = () => {
  const jobDataAll = useContext(createJob);
  const [isLoad, setIsLoad] = useState(false);

  return (
    <>
      <h1 className="md:text-5xl text-3xl text-center mb-4 font-bold mt-28">
        Featured Jobs
      </h1>
      <p className="text-center md:text-base text-sm mb-8 text-gray-500">
        The ability to feature your job and receive responses faster is an
        exclusive benefit for Voices Plus
      </p>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mb-5">
        {jobDataAll.slice(0, !isLoad ? 4 : 6).map((job) => (
          <JobCart key={job.id} job={job}></JobCart>
        ))}
      </div>
      <div className="text-center">
        <span onClick={() => setIsLoad(!isLoad)} className="text-center">
          {!isLoad && (
            <button className="btn showBtn my-10">See All Jobs</button>
          )}
        </span>
      </div>
    </>
  );
};

export default FeaturedJob;
