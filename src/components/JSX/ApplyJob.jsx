import React, { useEffect, useState } from "react";
import { getJob } from "../localStorage/storedData";
import { useLoaderData } from "react-router-dom";

const ApplyJob = () => {
  const [cart, setCart] = useState([]);

  const showData = useLoaderData();
  console.log(showData);

  useEffect(() => {
    const jobs = getJob();
    let newJob = [];
    for (const id in jobs) {
      const added = showData.find((show) => show.id == id);
      if (added) {
        const newId = jobs[id];
        added[id] = newId;
        newJob.push(added);
      }
    }
    setCart(newJob);
  }, []);

  //   useEffect(() => {
  //     const jobs = getJob();
  //     let newJob = [];
  //     for (const id in jobs) {
  //       const added = apply.find((app) => app.id == id);
  //       if (added) {
  //         const newAdd = jobs[id];
  //         added[id] = newAdd;
  //         newJob.push(added);
  //       }
  //     }
  //     setCart(newJob);
  //   }, []);

  return (
    <div>
      <div>
        <div className="h-[250px] banner flex justify-between mb-16">
          <img src="/src/assets/All Images/Vector.png" alt="" />
          <div className="flex items-center justify-center text-3xl font-bold">
            <h1>Applied Jobs</h1>
          </div>
          <img src="/src/assets/All Images/Vector-1.png" alt="" />
        </div>
      </div>
      <div className="w-9/12 mx-auto">
        {cart.map((c) => (
          <div className="flex">
            <div>
            <img src={c.icon} alt="" />
            </div>
            <div>

            </div>
            <div>
                <button>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplyJob;
