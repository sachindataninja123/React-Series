import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeEmployeePopup } from "../../redux/features/Popup/popupSlice";
import {
  postEmployees,
  updateEmployees,
} from "../../redux/features/employee/employeeThunk";

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (popup.id) {
      await dispatch(
        updateEmployees({
          id: popup.id,
          details: formDetails,
        }),
      );
    } else {
      await dispatch(postEmployees(formDetails));
    }
    dispatch(closeEmployeePopup());
  };

  useEffect(() => {
    if (!popup) {
      setFormDetails({
        profileUrl: "",
        name: "",
        email: "",
        bio: "",
        highlight: false,
      });
    } else if (popup.id) {
      setFormDetails({
        profileUrl: popup.profileUrl,
        name: popup.name,
        email: popup.email,
        bio: popup.bio,
        highlight: false,
      });
    }
  }, [popup]);

  if (!popup) return null;

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
          required
          className="input"
          value={formDetails.profileUrl}
          onChange={handleInputChange}
          placeholder="Profile url"
        />

        <label className="label">Name</label>
        <input
          name="name"
          type="text"
          required
          value={formDetails.name}
          onChange={handleInputChange}
          className="input"
          placeholder="Name"
        />

        <label className="label">Email</label>
        <input
          name="email"
          type="email"
          required
          value={formDetails.email}
          onChange={handleInputChange}
          className="input"
          placeholder="Email"
        />

        <label className="label"> Bio</label>
        <textarea
          name="bio"
          required
          value={formDetails.bio}
          onChange={handleInputChange}
          className="textarea h-24"
          placeholder="Bio"
        ></textarea>

        <button onClick={handleSubmit} className="btn btn-neutral mt-4">
          Submit
        </button>
      </fieldset>
    </div>
  );
};

export default EmployeePopup;
