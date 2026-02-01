import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeEmployeePopup } from "../../redux/features/Popup/popupSlice";

const EmployeePopup = () => {
  const dispatch = useDispatch();

  const [formDetails, setFormDetails] = useState({
    profileUrl: "",
    name: "",
    email: "",
    bio: "",
    highlight: false,
  });

  const popup = useSelector((state) => state.popup.EmployeePopup);

  if (!popup) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };


  return (
    <div
      onClick={() => dispatch(closeEmployeePopup())}
      className="fixed top-0 left-0 w-full h-full bg-black/80 z-20 flex items-center justify-center "
    >
      <fieldset
        onClick={(e) => e.stopPropagation()}
        className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
      >
        <legend className="fieldset-legend">Employee Details</legend>

        <label className="label">Profile Url</label>
        <input
          name="profileUrl"
          type="text"
          className="input"
          onChange={handleInputChange}
          placeholder="Profile url"
        />

        <label className="label">Name</label>
        <input
          name="name"
          type="text"
          onChange={handleInputChange}
          className="input"
          placeholder="Name"
        />

        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          onChange={handleInputChange}
          className="input"
          placeholder="Email"
        />

        <label className="label"> Bio</label>
        <textarea
          name="bio"
          onChange={handleInputChange}
          className="textarea h-24"
          placeholder="Bio"
        ></textarea>

        <button className="btn btn-neutral mt-4">Submit</button>
      </fieldset>
    </div>
  );
};

export default EmployeePopup;
