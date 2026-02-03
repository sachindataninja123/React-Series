import React from "react";

const withCardBorder = (Component) => {
  return () => {
    return (
      <div className="border-3 m-4  border-blue-500">
        <Component />
      </div>
    );
  };
};

export default withCardBorder;
