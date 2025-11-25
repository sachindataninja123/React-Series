import React, { useState, useRef } from "react";
import "./App.css";

const App = () => {
  // different states and different handler Functions
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");

  // const nameHandler = (e) => {
  //   setName(e.target.value);
  // };
  // const emailHandler = (e) => {
  //   setEmail(e.target.value);
  // };

  // const resetHandler = () => {
  //   setName("");
  //   setEmail("");
  // };

  // one state and multiple Handlers function
  // const [data, setData] = useState({
  //   name: "",
  //   email: "",
  // });

  // console.log(data);

  // function nameHandler(e) {
  //   setData({ ...data, name: e.target.value });
  // }

  // function emailHandler(e) {
  //   setData({ ...data, email: e.target.value });
  // }

  // function resetHandler() {
  //   setData({
  //     name: "",
  //     email: "",
  //   });
  // }

  // one state and one handler
  const [data, setData] = useState({
    name: "",
    email: "",
    phNumber:""
  });

  console.log(data);

  function inputHandler(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function resetHandler() {
    setData({
      name: "",
      email: "",
      phNumber: ""
    });
  }

  return (
    // multiple inputs field
    <>
      <input
        type="text"
        name="name"
        // value={name}
        value={data.name}
        placeholder="Enter name"
        onChange={inputHandler}
      />
      <br />
      <br />
      <input
        type="email"
        name="email"
        // value={email}
        value={data.email}
        placeholder="Enter Email"
        onChange={inputHandler}
      />
      <br />
      <br />
      <input
        type="number"
        name="phNumber"
        // value={email}
        value={data.phNumber}
        placeholder="Enter Ph Number"
        onChange={inputHandler}
      />
      <br />
      <br />


      <button onClick={resetHandler}>Clear</button>
      <p>{data.name}</p>
      <p>{data.email}</p>
      <p>{data.phNumber}</p>
    </>
  );
};

export default App;
