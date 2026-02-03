import React from "react";

const withCardLook = (WrappedComponent) => {
  return ({user}) => {
    return (
      <>
        <div className="bg-gray-700 p-10 rounded-2xl m-5">
          <WrappedComponent {...user} />
        </div>
      </>
    );
  };
};

export default withCardLook;
