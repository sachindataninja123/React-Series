import React from "react";
import { useState } from "react";

const MultipleCheckBox = () => {
  const [isCSS, setIsCSS] = useState(true);
  const [isHTML, setIsHTML] = useState(true);
  const [isJS, setIsJS] = useState(true);

  return (
    <>
      <div>
        <label htmlFor="css">
          <input
            type="checkbox"
            id="css"
            checked={isCSS}
            onChange={(e) => setIsCSS(e.target.checked)}
          />{" "}
          CSS
        </label>
        <br />
        <br />
        <label htmlFor="html">
          <input
            type="checkbox"
            id="html"
            checked={isHTML}
            onChange={(e) => setIsHTML(e.target.checked)}
          />{" "}
          HTML
        </label>
        <br />
        <br />

        <label htmlFor="JS">
          <input
            type="checkbox"
            id="JS"
            checked={isJS}
            onChange={(e) => setIsJS(e.target.checked)}
          />{" "}
          JS
        </label>
      </div>

      {isCSS && "CSS Selected"}
      <br />
      {isHTML && "HTML Selected"}
      <br />
      {isJS && "JS Selected"}
    </>
  );
};

export default MultipleCheckBox;
