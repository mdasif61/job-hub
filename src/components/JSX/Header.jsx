import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Css/Header.css";

const Header = () => {
  return (
    <div className="flex justify-between py-3 my-5 items-center">
      <h1 className="text-3xl font-bold">
        Intelligence<span className="text-orange-600">Hub</span>
      </h1>
      <nav className="navLink">
        <NavLink className={({isActive})=>isActive? "text-blue-600 font-blod":""} to="/">Home</NavLink>
        <NavLink className={({isActive})=>isActive? "text-blue-600 font-blod":""} to="/statistics">Statistics</NavLink>
        <NavLink className={({isActive})=>isActive? "text-blue-600 font-blod":""} to="/job">Applied Jobs</NavLink>
        <NavLink className={({isActive})=>isActive? "text-blue-600 font-blod":""} to="/blog">Blog</NavLink>
      </nav>
      <button className="btn btn-primary">Start Applying</button>
    </div>
  );
};

export default Header;
