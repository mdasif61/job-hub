import React from "react";
import '../Css/Banner.css';

const Banner = ({children}) => {
  return (
    <div className={`h-[250px] text-center mb-14 flex justify-between`}>
          <img src="/src/assets/All Images/Vector.png" alt="" />
          <div className="flex items-center justify-center text-3xl font-bold">
            <h1>{children}</h1>
          </div>
          <img src="/src/assets/All Images/Vector-1.png" alt="" />
      </div>
  );
};
export default Banner;
