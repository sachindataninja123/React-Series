import React from "react";
import { useSelector } from "react-redux";

const EmployeePopup = () => {
  const popup = useSelector((state) => state.popup.EmployeePopup);

  if (!popup) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/80 z-20 flex items-center justify-center ">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Employee Details</legend>

        <label className="label">Profile Url</label>
        <input type="text" className="input" placeholder="Profile url" />

        <label className="label">Name</label>
        <input type="text" className="input" placeholder="Name" />

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label"> Bio</label>
        <textarea className="textarea h-24" placeholder="Bio"></textarea>

        <button className="btn btn-neutral mt-4">Submit</button>
      </fieldset>
    </div>
  );
};

export default EmployeePopup;
