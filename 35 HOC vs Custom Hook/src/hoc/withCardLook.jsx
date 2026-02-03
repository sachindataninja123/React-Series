import React from "react";

const withCardLook = (WrappedComponent) => {
  return () => {
    return (
      <>
        <div className="bg-gray-700 p-10 rounded-2xl m-5">
          <WrappedComponent />
        </div>
      </>
    );
  };
};

export default withCardLook;
