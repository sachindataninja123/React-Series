import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  let isLoggedIn = true;
  const handleClick = () => {
    if (isLoggedIn) navigate("/contact");
  };

  return (
    <>
      <div className="flex items-center justify-between py-4 px-20 bg-blue-500">
        <h1 className="text-xl">School 4 U</h1>
        <div className="flex items-center justify-center gap-9 text-xl ">
          {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link> */}


          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            Skills
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            Contact
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            Projects
          </NavLink>
        </div>
      </div>


            {/* programmatic Navigation(use Navigate) */}
      <button
        className="bg-amber-700 px-3 py-2 rounded-[5px] cursor-pointer active:scale-95"
        onClick={handleClick}
      >
        Navigate to contact
      </button>
    </>
  );
};

export default Navbar;
