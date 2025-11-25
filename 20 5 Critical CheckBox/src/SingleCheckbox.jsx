import React, { useState } from "react";
import "./App.css";

const SingleCheckbox = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleIschecked = (e) => {
    setIsChecked(e.target.checked)
  }

  return (
    <div>
      
      <label htmlFor="check">
        <input
          className="text-2xl"
          id="check"
          type="checkbox"
          checked={isChecked}
          onChange={handleIschecked}
        />
         Terms & Conditions
      </label>
    </div>
  );
};

export default SingleCheckbox;
