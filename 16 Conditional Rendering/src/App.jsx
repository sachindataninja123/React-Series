import React, { useState } from "react";
import "./App.css";
import If from "./components/If";
import CompA from "./components/CompA";
import CompB from "./components/CompB";
import CompC from "./components/CompC";

const App = () => {
  const option = "a";
  let content = <h1>Hello How are you !</h1>;

  if (option === "a") {
    content = <CompA />;
  } else if (option === "b") {
    content = <CompB />;
  } else if (option === "c") {
    content = <CompC />;
  } else {
    content = <h1>Other Component</h1>;
  }

  const [toggle, setToggle] = useState(true);
  // const isLogin = true;

  // if (isLogin) {
  //   return (
  //     <div>
  //       <h1>Welcome back! You are logged In</h1>
  //     </div>
  //   );
  // }
  // return(
  //   <div>
  //     <h1>Please Login</h1>
  //   </div>
  // )
  // return (
  //   <>
  //     <If />
  //     {isLogin ? <h1>You are Logged In</h1> : <h1>Please Login</h1>}

  //   </>
  // );
  return (
    <>
      {/* <h2>{content}</h2>

      <CompA /> */}

      {toggle ? (
        <h1>Toggle true ho chuka hai</h1>
      ) : (
        <h1>Toggle false ho chuka h</h1>
      )}

      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Click Toggle
      </button>
    </>
  );
};

export default App;
