import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import Layout from "../layout/Layout";
import { useDispatch } from "react-redux";
import { openEmployeePopup } from "../../redux/features/Popup/popupSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-base-200  sticky  top-0 z-10">
      <Layout>
        <div>
          <div className="navbar  shadow-sm">
            <div className="navbar-start">
              <a className="btn btn-ghost text-xl font-semibold">Employees</a>
            </div>
            <div className="navbar-end">
              <button
                onClick={() => dispatch(openEmployeePopup())}
                className="btn btn-ghost btn-circle"
              >
                <IoIosAdd className="text-4xl" />
              </button>
              <button className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <CiHeart className="text-3xl" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Navbar;
