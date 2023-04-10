import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "../Css/Header.css";
import { condition } from "./Main";

const Header = () => {
  const [open, setOpen] = useContext(condition);

  return (
    <div className="w-full">
      <div className={`relative h-[400px] flex justify-between`}>
          <img src="/src/assets/All Images/Vector.png" alt="" />
          <div className="flex items-center h-[450px] justify-center text-3xl font-bold">
            <h1>Job Details</h1>
          </div>
          <img src="/src/assets/All Images/Vector-1.png" alt="" />
        </div>
      <div className="flex w-[85%] absolute top-0 justify-between py-3 bg-color my-5 items-center">
        <h1 className="text-3xl font-bold">
          Intelligence<span className="text-orange-600">Hub</span>
        </h1>
        <nav className="navLink">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-blod" : ""
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-blod" : ""
            }
            to="/statistics"
          >
            Statistics
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-blod" : ""
            }
            to="/job"
          >
            Applied Jobs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-blod" : ""
            }
            to="/blog"
          >
            Blog
          </NavLink>
        </nav>
        <button className="btn startBtn">Start Applying</button>
      </div>
    </div>
  );
};

export default Header;
