import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  changeByValue,
} from "../Store/features/counters/counterSlice";

const Counter = () => {
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();
  const storeValue = useSelector((state) => state.counter.value);
  console.log(storeValue);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleChangeByValue = () => {
    dispatch(changeByValue(value));
  };

  useEffect(() => {
    console.log("Re-render hua hai");
  });

  return (
    <div>
      <h2 className="text-9xl">{storeValue}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <input
        type="number"
        onChange={(e) => setValue(e.target.value)}
        name=""
        id=""
        className="border"
      />
      <button onClick={handleChangeByValue}>ChangByAmount</button>
    </div>
  );
};

export default Counter;
