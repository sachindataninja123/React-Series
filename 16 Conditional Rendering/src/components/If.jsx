import React from "react";

const If = () => {
  const option = "t";

  //   if (option === "a") {
  //     return (
  //       <div>
  //         <h1>Component A</h1>
  //       </div>
  //     );
  //   }
  //   if (option === "b") {
  //     return (
  //       <div>
  //         <h1>Component B</h1>
  //       </div>
  //     );
  //   }
  //   if (option === "c") {
  //     return (
  //       <div>
  //         <h1>Component C</h1>
  //       </div>
  //     );
  //   }
  //   if (option === "d") {
  //     return (
  //       <div>
  //         <h1>Component D</h1>
  //       </div>
  //     );
  //   }

  //   return (
  //     <div>
  //       <h1>Other Component</h1>
  //     </div>
  //   );

  return (
    <>
      {" "}
      {option === "a" ? (
        <h1> Component A </h1>
      ) : option === "b" ? (
        <h1> Component B </h1>
      ) : option === "c" ? (
        <h1> Component C </h1>
      ) : (
        <h1>Other Component</h1>
      )}
    </>
  );
};

export default If;
