import React from "react";
import Navbar from "./components/navabar/Navbar";
import Footer from "./components/footer/Footer";
import Employees from "./components/Employees/Employees";
import EmployeePopup from "./components/EmployeePopup/EmployeePopup";

const App = () => {
  return (
    <div className="flex flex-col w-full ">
      <EmployeePopup />
      <Navbar />

      <div className="flex-1">
        <Employees />
      </div>

      <Footer />
    </div>
  );
};

export default App;
