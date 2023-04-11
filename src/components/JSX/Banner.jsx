import React from "react";
import '../Css/Banner.css';

const Banner = ({children}) => {
  return (
    <div className={`md:h-[250px] text-center mb-14 flex flex-col md:flex-row justify-between`}>
          <img className="hidden md:block" src="/src/assets/All Images/Vector.png" alt="" />
          <div className="flex mt-5 md:mt-0 items-center justify-center text-3xl font-bold">
            <h1>{children}</h1>
          </div>
          <img className="hidden md:block" src="/src/assets/All Images/Vector-1.png" alt="" />
      </div>
  );
};
export default Banner;
