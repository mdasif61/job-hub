import React, { useEffect, useState } from "react";
import { getJob } from "../localStorage/storedData";
import { useLoaderData, useNavigate } from "react-router-dom";

const ApplyJob = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
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
      <div className="w-7/12 mx-auto">
        {cart.map((singleCart) => (
          <div className="flex my-5 items-center border p-5">
            <div className=" flex items-center justify-center p-5">
              <img className="w-32" src={singleCart.icon} alt="" />
            </div>
            <div className="flex-1 ml-7">
              <h1 className="text-2xl font-bold text-gray-700">
                {singleCart.title}
              </h1>
              <h3 className="font-semibold my-2 text-gray-500">
                {singleCart.tags}
              </h3>
              <div className="flex my-3">
                <h3 className="mr-2 cursor-pointer text-purple-600 border px-3 py-1 rounded-md border-purple-500">
                  {singleCart.jobTime.fullTime}
                </h3>
                <h3 className="mr-2 cursor-pointer text-purple-600 border px-3 py-1 rounded-md border-purple-500">
                  {singleCart.jobTime.onTime}
                </h3>
              </div>
              <div className="flex">
                <div className="flex mr-5">
                  <img className="mr-2" src={singleCart.locationIcon} alt="" />
                  <p className="text-gray-500">{singleCart.location}</p>
                </div>
                <div className="flex mr-5">
                  <img className="mr-2" src={singleCart.salaryIcon} alt="" />
                  <p className="text-gray-500">{singleCart.salary}</p>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => navigate(`/details/${singleCart.id}`)}
                style={{
                  background:
                    "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)",
                  border: "none",
                  outline: "none",
                }}
                className="btn"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplyJob;
