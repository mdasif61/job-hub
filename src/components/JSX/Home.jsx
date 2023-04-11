import React, { useState } from "react";
import "../Css/Home.css";
import Category from "./Category";
import FeaturedJob from "./FeaturedJob";
import man from '../../../public/P3OLGJ1 copy 2.png'

const Home = () => {
  return (
    <div className="mx-3 md:mx-0">
      <div className="md:flex justify-between items-center md:mt-[100px] mt-5">
        <div className="md:w-[50%] w-full text-center md:text-left">
          <h1 className="font-bold text-center md:text-left leading-[60px] text-5xl md:text-8xl">
            One Step
            <br />
            Closer To Your
            <br />
            <span className="text-[#9873FF]">Dream Job</span>
          </h1>
          <p className="text-[18px] text-center md:text-left text-gray-600 mt-6">
            Explore thousands of job opportunities with all the
            <br />
            information you need. Its your future. Come find it. Manage all
            <br />
            your job application from start to finish.
          </p>
          <button className="btn getBtn mt-8">Get Started</button>
        </div>
        <div className="md:w-[50%] w-[100%] mt-10 md:mt-0 md:bg-transparent flex items-center justify-center">
          <img src={man} alt="" />
        </div>
      </div>

      {/* category list start */}
      <section className="mt-32">
        <Category></Category>
      </section>
      {/* category list end */}

      {/* featured job start */}
      <section>
        <FeaturedJob></FeaturedJob>
      </section>
      {/* featured job end */}
    </div>
  );
};

export default Home;
