import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import "../Css/Details.css";
import { addToStorage } from "../localStorage/storedData";
import Banner from "./Banner";

const Details = () => {

  const [details, setDetails] = useState({});

  const jobs = useLoaderData();
  const { id } = useParams();
  useEffect(() => {
    const exist = jobs.find((job) => job.id == id);
    if (exist) {
      setDetails(exist);
    }
  }, []);

  const storeId = (detail) => {
    addToStorage(detail.id);
  };

  return (
    <div className="my-10">
      <div>
        <Banner>Job Details</Banner>
      </div>
      <div className="md:flex md:w-10/12 w-full mx-auto border-2 md:p-5 p-3">
        <div className="md:w-[60%] w-full md:mx-5">
          <h1 className="my-4">
            <span className="font-bold">Job Description : </span>{" "}
            {details.jobDesc}
          </h1>
          <h1 className="my-4">
            <span className="font-bold">Job Responsibility : </span>{" "}
            {details.jobRes}
          </h1>
          <h1 className="my-4">
            <span className="font-bold">
              Educational Requirements : <br />
            </span>
            {details.education}
          </h1>
          <h1 className="my-4">
            <span className="font-bold">
              Experiences : <br />
            </span>
            {details.experiences}
          </h1>
        </div>
        <div className="md:w-[40%] w-full md:mx-5 flex justify-center">
          <div className="w-full info p-5 items-center justify-between">
            <h1 className="border-b border-gray-500 w-full font-bold pb-3 text-lg">
              Job Details
            </h1>

            <div className="w-full my-2">
              <div className="flex w-full items-center">
                <img className="my-2" src={details.salaryIcon} alt="" />
                <p className="my-2 ml-2">
                  <strong>Salary :</strong> {details.salary}
                </p>
              </div>
              <div className="flex w-full items-center ">
                <img className="my-2" src={details.jobIcon} alt="" />
                <p className="my-2 ml-2">
                  <strong>Job Title :</strong> {details.title}
                </p>
              </div>
            </div>

            <div className="mt-5">
              <h1 className="border-b border-gray-500 w-full font-bold pb-3 text-lg">
                Contact Information
              </h1>
              <div>
                <div className="flex items-center w-full">
                  <img className="my-2" src={details.phoneIcon} alt="" />
                  <p className="my-2 ml-2">
                    <strong>Phone : </strong>
                    {details.phone}
                  </p>
                </div>
                <div className="flex items-center w-full">
                  <img className="my-2" src={details.mailIcon} alt="" />
                  <p className="my-2 ml-2">
                    <strong>Email : </strong> {details.email}
                  </p>
                </div>
                <div className="flex items-center w-full">
                  <img className="my-2" src={details.addressIcon} alt="" />
                  <p className="my-2 ml-2">
                    <strong>Location : </strong> {details.address}
                  </p>
                </div>
              </div>
              <button
                  onClick={() => storeId(details)}
                  className="btn applyBtn mt-8"
                >
                  Apply Now
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
