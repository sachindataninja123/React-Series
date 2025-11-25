import React from "react";

const GroupCheckBox = () => {
  const [languages, setLanguages] = useState({
    html: false,
    css: false,
    js: false,
  });

  const handleChange = (e) => {
    const key = e.target.name;

    setLanguages({
      ...languages,
      [key]: e.target.checked,
    });
  };

  return (
    <>
      <div>
        <label htmlFor="html">
          <input
            type="checkbox"
            id="html"
            name="html"
            checked={languages.html}
            onChange={handleChange}
          />
          HTML
        </label>
        <br />
        <br />

        <label htmlFor="css">
          <input
            type="checkbox"
            id="css"
            name="css"
            checked={languages.css}
            onChange={handleChange}
          />
          CSS
        </label>
        <br />
        <br />
        <label htmlFor="js">
          <input
            type="checkbox"
            id="js"
            name="js"
            checked={languages.js}
            onChange={handleChange}
          />
          JS
        </label>
      </div>
      <br />

      {languages.html && "HTML SELECTED"}
      <br />
      {languages.css && "css SELECTED"}
      <br />
      {languages.js && "js SELECTED"}
      <br />
    </>
  );
};

export default GroupCheckBox;
