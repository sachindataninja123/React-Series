import React from "react";

const SelectAll = () => {
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

  const isAllChecked = Object.values(languages).every(Boolean);

  function handleSelectAll(e) {
    setLanguages({
      html: e.target.checked,
      css: e.target.checked,
      js: e.target.checked,
    });
  }

  return (
    <>
      <h1 className="font-bold mb-5">Check Box Handling!</h1>
      <div>
        <label htmlFor="sa">
          <input
            type="checkbox"
            id="sa"
            name="html"
            checked={isAllChecked}
            onChange={handleSelectAll}
          />
          Select All
        </label>
        <br />
        <br />

        {Object.keys(languages).map((item) => {
          return (
            <label key={item} className="mr-5" htmlFor={item}>
              <input
                type="checkbox"
                id={item}
                name={item}
                checked={languages[item]}
                onChange={handleChange}
              />
              {item.toUpperCase()}
            </label>
          );
        })}
        {/* <label htmlFor="html">
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
        </label> */}
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

export default SelectAll;
