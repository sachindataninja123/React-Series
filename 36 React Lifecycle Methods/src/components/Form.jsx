import React, { useEffect, useState } from "react";

const Form = () => {
  const [formDetails, setFormDetails] = useState({
    email: "",
    phone_no: "",
    Father_name: "",
  });
  //   console.log(formDetails);

  const [name, setName] = useState(localStorage.getItem("name") || "");
  //   console.log(name);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  //unmounted concept
  useEffect(() => {
    return () => {
      localStorage.clear();
    };
  }, []);

  return (
    <>
      <div className="flex flex-col border p-5  items-center justify-center gap-5 mt-5 rounded">
        <h1 className="text-5xl">Form</h1>
        <input
          className="border p-2 w-full rounded"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            localStorage.setItem("name", e.target.value);
          }}
          placeholder="Enter name..."
        />

        <input
          className="border p-2 w-full rounded"
          type="text"
          name="Father_name"
          value={formDetails.Father_name}
          onChange={handleInputChange}
          placeholder="Enter father Name..."
        />

        <input
          className="border p-2 w-full rounded"
          type="email"
          name="email"
          value={formDetails.email}
          onChange={handleInputChange}
          placeholder="Enter email..."
        />

        <input
          className="border p-2 w-full rounded"
          type="number"
          name="phone_no"
          value={formDetails.phone_no}
          onChange={handleInputChange}
          placeholder="Enter Mobile_No..."
        />
      </div>
    </>
  );
};

export default Form;
