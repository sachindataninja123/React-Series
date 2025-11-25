import React from "react";
import "./App.css";

const App = () => {
  // function greet(){
  //   alert("Hello Sachin");
  // }

  // function testing(e){
  //   console.log("testing of event react");
  //   console.log(e);
  // }

  // function testing1(name) {
  //   console.log(name);
  //   console.log("passing argument to function");
  // }

  // function submitHandler(e) {
  //   e.preventDefault();
  //   console.log("submit ho gya");
  // }

  function parentHandler() {
    console.log("parent click hua");
  }

  function childHandler(e) {
    e.stopPropagation()
    console.log("children click hua");
  }

  return (
    <div>
      <h1 className="bg-emerald-500 text-black">Hello React</h1>

      <div  className="bg-red-400 p-5 mt-10" onClick={parentHandler}>
        parentBox
        <button onClick={childHandler}>childBox</button>
      </div>

      {/* <button className='mt-5' onClick={greet}>click me</button>

      <input type="text" onChange={handleInput} className="ml-5 border border-white p-2 rounded-2xl" placeholder='Enter Name ' />

      <form className='mt-5' onSubmit={handleInput} action="">
        <input  type="text" placeholder='Enter name' className='border border-white p-2 rounded-2xl' />
        <button>Submit</button>
      </form> */}

      {/* <input className='border-2 mt-5 p-2 rounded-2xl' type="text" onChange={testing} /> */}

      {/* <button
        onClick={() => {
          testing1("Sachin");
        }}
      >
        Click
      </button> */}

      {/* <form onSubmit={submitHandler} action="">
        <input
          type="text"
          className="border-2 mt-5 p-2 rounded-2xl "
          placeholder="Enter name"
        />
        <button className="ml-5">Submit</button>
      </form> */}
    </div>
  );
};

export default App;
