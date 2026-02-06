import React, { memo } from "react";
import { useEffect } from "react";

const Alpha = ({ data, count }) => {
  console.log(data);

  useEffect(() => {
    console.log("child rendering...");
  });

  return (
    <div>
      <h1>Alpha</h1>
      <h1>{count}</h1>
    </div>
  );
};

const EnhancedAlpha = memo(Alpha, (prevProp, nextProp) => {
  // return true;

  return prevProp.name === nextProp.name;
});

export default EnhancedAlpha;
