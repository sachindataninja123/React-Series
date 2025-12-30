import React from "react";
import { useDispatch } from "react-redux";
import { SetCity } from "../Store/Action/weatherAction";

const Searchbar = () => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(SetCity(e.target.value))
  }

  return (
    <div className="join">
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          required
          placeholder="Search"
          onChange={handleClick}
        />
      </label>
      <button className="btn btn-accent join-item">Join</button>
    </div>
  );
};

export default Searchbar;
