import React from "react";
import { Link, NavLink } from "react-router-dom";
import Products from "./Products";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-start py-1 px-10 gap-16 text-xl bg-gray-800">
        <div>
          <img
            className="w-20 h-20"
            src="https://image.similarpng.com/file/similarpng/original-picture/2021/09/Letter-e-logo-design-template-on-transparent-background-PNG.png"
            alt="logo"
          />
        </div>
        <div className="flex items-center justify-center gap-10">
          <NavLink
            to={"/"}
            className={({ isActive }) => {
              return isActive ? "text-[tomato]" : "";
            }}
          >
            Home
          </NavLink>

          <NavLink
            to={"/products"}
            className={({ isActive }) => {
              return isActive ? "text-[tomato]" : "";
            }}
          >
            Product
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
