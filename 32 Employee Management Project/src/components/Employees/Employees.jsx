import React from "react";
import Layout from "../layout/Layout";
import { CiEdit } from "react-icons/ci";
import { MdAutoDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  openDeletePopup,
  openEmployeePopup,
} from "../../redux/features/Popup/popupSlice";
import { updateEmployees } from "../../redux/features/employee/employeeThunk";

const Employees = () => {
  const employeeDetails = useSelector((s) => s.employee.employees);
  // console.log(employeeDetails)

  return (
    <div className="bg-base-100">
      <Layout>
        <div>
          <ul className="list py-10 rounded-box shadow-md">
            {employeeDetails.length === 0 && (
              <p className="text-center text-5xl font-semibold">
                No Employees Found
              </p>
            )}

            {employeeDetails.map((details) => {
              return <EmployeesCard key={details.id} details={details} />;
            })}
          </ul>
        </div>
      </Layout>
    </div>
  );
};

const EmployeesCard = ({ details }) => {
  const dispatch = useDispatch();

  const handleHighlight = (details) => {
    console.log("kaam ho rha h na");
    dispatch(
      updateEmployees({
        id: details.id,
        details: {
          ...details,
          highlight: !details.highlight,
        },
      }),
    );
  };

  return (
    <div>
      <li className="list-row">
        <div>
          <img
            className="size-10 rounded-box"
            src={details.profileUrl || "/avatar.png"}
          />
        </div>
        <div>
          <div>{details.name}</div>
          <div className="text-xs uppercase font-semibold opacity-60">
            {details.email}
          </div>
        </div>
        <p className="list-col-wrap text-xs">{details.bio}</p>
        <button
          onClick={() => dispatch(openEmployeePopup(details))}
          className="btn btn-square btn-ghost"
        >
          <CiEdit className="text-xl" />
        </button>
        <button
          onClick={() => dispatch(openDeletePopup(details.id))}
          className="btn btn-square btn-ghost"
        >
          <MdAutoDelete className="text-xl" />
        </button>
        <button
          onClick={() => handleHighlight(details)}
          className="btn btn-square btn-ghost"
        >
          <svg
            className="size-[1.5em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill={details.highlight ? "red" : "none"}
              stroke="currentColor"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </g>
          </svg>
        </button>
      </li>
    </div>
  );
};

export default Employees;
