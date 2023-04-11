import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Css/Header.css";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <div onClick={() => setOpen(!open)} className="md:hidden">
        <span>
          {!open ? (
            <Bars3Icon className="h-6 w-6 text-blue-500" />
          ) : (
            <XMarkIcon className="h-6 w-6 text-blue-500" />
          )}
        </span>
      </div>
      <div
        className={`md:flex md:static mx-auto w-full absolute ${
          open ? "top-7 bg-white shadow-xl p-5 z-50" : "hidden"
        } top-0 justify-between py-3 bg-color mx-auto items-center`}
      >
        <h1 className={`text-3xl font-bold ${open && "mb-3 border-b-2 pb-3"}`}>
          Intelligence<span className="text-orange-600">Hub</span>
        </h1>
        <nav className={`navLink ${open ? "flex flex-col" : ""}`}>
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
        <button className={`btn ${open ? "mt-5 btn" : "startBtn"}`}>
          Start Applying
        </button>
      </div>
    </div>
  );
};

export default Header;
