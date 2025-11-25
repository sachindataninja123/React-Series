import React, { useState } from "react";
import "./App.css";
import SingleCheckbox from "./SingleCheckbox";
import MultipleCheckBox from "./MultipleCheckBox";

const App = () => {
  const [formData, setFormData] = useState({
    email: "",
    tc: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  // console.log(formData);

  function submitHandler(e) {
    e.preventdefault();
    console.log(formData);
  }

  return (
    <>
      <div>
        <form className="border p-5 rounded-2xl" onSubmit={submitHandler}>
          <h2 className="mb-5">fill the data</h2>
          <label htmlFor="data">
            <input
              type="email"
              name="email"
              id="data"
              value={formData.email}
              onChange={handleChange}
              className="border"
            />
            email
          </label>
          <br />
          <br />
          <label htmlFor="data1">
            <input
              type="checkbox"
              name="tc"
              id="data1"
              value={formData.tc}
              onChange={handleChange}
            />
            Terms & Conditions
          </label>
          <br />
          <br />
          <button>submit</button>
        </form>
      </div>
    </>
  );
};

export default App;
