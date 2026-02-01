import React, { useEffect } from "react";
import Navbar from "./components/navabar/Navbar";
import Footer from "./components/footer/Footer";
import EmployeePopup from "./components/EmployeePopup/EmployeePopup";
import Employees from "./components/Employees/Employees";
import DeletePopup from "./components/deletePopup/DeletePopup";
import { useDispatch } from "react-redux";
import { getEmployees } from "./redux/features/employee/employeeThunk";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  return (
    <div className="flex flex-col w-full ">
      <EmployeePopup />
      <DeletePopup />
      <Navbar />

      <div className="flex-1">
        <Employees />
      </div>

      <Footer />
    </div>
  );
};

export default App;
