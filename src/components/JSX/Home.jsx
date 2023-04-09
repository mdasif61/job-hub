import React, { useState } from "react";
import "../Css/Home.css";
import Category from "./Category";
import FeaturedJob from "./FeaturedJob";
import Details from "./Details";

const Home = () => {
    const [display,setDisplay]=useState(false)
  return (
   !display?<div>
      <div className="flex justify-between items-center mt-[100px]">
        <div className="w-[50%]">
          <h1 style={{ lineHeight: "120px" }} className="font-bold text-8xl">
            One Step
            <br />
            Closer To Your
            <br />
            <span className="text-[#9873FF]">Dream Job</span>
          </h1>
          <p className="text-[18px] text-gray-600 mt-6">
            Explore thousands of job opportunities with all the
            <br />
            information you need. Its your future. Come find it. Manage all
            <br />
            your job application from start to finish.
          </p>
          <button className="btn getBtn mt-8">Get Started</button>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <img src="/src/assets/All Images/P3OLGJ1 copy 1.png" alt="" />
        </div>
      </div>

      {/* category list start */}
      <section className="mt-32">
        <Category></Category>
      </section>
      {/* category list end */}

      {/* featured job start */}
      <section>
        <FeaturedJob setDisplay={setDisplay} display={display}></FeaturedJob>
      </section>
      {/* featured job end */}
    </div>:<Details></Details>
  );
};

export default Home;
