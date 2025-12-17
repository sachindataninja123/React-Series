import React, { use, useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [password, setpassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumAllowed, setIsNumAllowed] = useState(false);
  const [isCharAllowed, setIsCharAllowed] = useState(false);
  const [savedPassword, setSavedPassword] = useState([]);
  const passwordRef = useRef(null);

  // console.log(length)
  // console.log(isNumAllowed)
  // console.log(isCharAllowed)

  const generatePassword = () => {
    let pass = " ";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (isNumAllowed) str += "1234567890";
    if (isCharAllowed) str += "!@#$%^&*~";

    for (let i = 0; i < length; i++) {
      let randomIdx = Math.floor(Math.random() * str.length);
      let characterPicked = str.charAt(randomIdx);
      pass += characterPicked;
    }
    // console.log(pass);
    setpassword(pass);
  };

  useEffect(() => {
    generatePassword();
  }, [length, isCharAllowed, isNumAllowed]);

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    passwordRef.current.select();
    alert("Password Copied!");
  };

  return (
    <div className=" select-none flex items-center justify-center flex-col">
      <h1 className="font-semibold text-center mt-7 mb-7 text-4xl">
        Password Generator
      </h1>
      <div className="border rounded-md p-6 w-160 flex items-start justify-center flex-col gap-5 ">
        <input
          type="text"
          value={password}
          ref={passwordRef}
          onChange={(e) => setpassword(e.target.value)}
          className="bg-gray-200 rounded-[5px] text-black px-3 py-2 font-semibold text-xl w-full"
          placeholder="Password"
        />

        <input
          className="w-full"
          type="range"
          min={0}
          max={30}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />

        <p>Length of Password = {length}</p>

        <label htmlFor="numberAllowed" className="text-[18px]">
          <input
            type="checkbox"
            id="numberAllowed"
            checked={isNumAllowed}
            onChange={(e) => setIsNumAllowed(e.target.checked)}
          />
          Number Allowed
        </label>

        <label htmlFor="charAllowed" className="text-[18px]">
          <input
            type="checkbox"
            id="charAllowed"
            checked={isCharAllowed}
            onChange={(e) => {
              setIsCharAllowed(e.target.checked);
            }}
          />
          Character Allowed
        </label>

        <button
          className="bg-blue-500 w-full px-3 py-2 rounded-lg font-semibold cursor-pointer active:scale-95 "
          onClick={copyPassword}
        >
          Copy Password
        </button>

        <button
          onClick={() => {
            setLength(8);
            setIsCharAllowed(false);
            setIsNumAllowed(false);
          }}
          className="bg-blue-500 w-full px-3 py-2 rounded-lg font-semibold cursor-pointer active:scale-95 "
        >
          Reset Password
        </button>

        <button
          className="bg-blue-500 w-full px-3 py-2 rounded-lg font-semibold cursor-pointer active:scale-95 "
          onClick={() => {
            setSavedPassword((prevPass) => [...prevPass, password]);
          }}
        >
          Save Password
        </button>
        {savedPassword.map((item, idx) => {
          return (
            <p className="text-xl" key={idx}>
              {item}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default App;
