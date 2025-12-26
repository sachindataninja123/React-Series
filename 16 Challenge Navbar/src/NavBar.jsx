import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoSettings } from "react-icons/io5";

const NavBar = () => {
  const [mobileView, setMobileView] = useState(false);
  // console.log(mobileView);

  return (
    <div className="flex items-center p-5 justify-between bg-emerald-300 text-black font-bold ">
      <h1 className="text-[30px]">Logo</h1>

      <div className="text-black font-normal flex gap-5 text-lg max-[720px]:hidden">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Service</a>
        <a href="#">Help</a>
      </div>

      <div className="text-lg flex gap-4 items-center justify-center">
        <span className="text-3xl"><IoSettings /></span>
        <span className="text-3xl"><CgProfile /></span>
        <span
          onClick={() => {
            setMobileView(!mobileView);
          }}
          className="text-3xl min-[720px]:hidden cursor-pointer"
        >
          <IoMdMenu />
        </span>
      </div>

      {/* mobile view */}

      <div
        className={`bg-[#333] h-screen absolute top-0 left-0 flex flex-col w-[20rem] text-white  ${
          mobileView ? 'translate-x-0' : '-translate-x-full'
        } transition-all duration-300`}
      >
        <button
          onClick={() => {
            setMobileView(false);
          }}
          className="absolute top-0 right-0 p-5 text-2xl cursor-pointer "
        >
          ❌
        </button>
        <a
          href="#"
          className="p-5 mt-15 flex items-center justify-center hover:bg-[#242424] text-lg font-medium"
        >
          Home
        </a>
        <a
          href="#"
          className="p-5 flex items-center justify-center hover:bg-[#242424] text-lg font-medium"
        >
          About
        </a>
        <a
          href="#"
          className="p-5 flex items-center justify-center hover:bg-[#242424] text-lg font-medium"
        >
          Contact
        </a>
        <a
          href="#"
          className="p-5 flex items-center justify-center hover:bg-[#242424] text-lg font-medium"
        >
          Service
        </a>
        <a
          href="#"
          className="p-5 flex items-center justify-center hover:bg-[#242424] text-lg font-medium"
        >
          Help
        </a>
      </div>
    </div>
  );
};

export default NavBar;
