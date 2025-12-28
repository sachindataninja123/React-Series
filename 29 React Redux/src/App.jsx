import React, { use } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, increment } from "../redux/action/ProductAction";
import Products from "./Products";

const App = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    return state;
  });
  // console.log(state);

  const handleAddToCart = () => {
    dispatch(addToCart({
      id : 1,
      name : 'Samsung'
    }))
  }

  const handleIncrement = () => {
    dispatch(increment())
  }

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-4">
      <button
        className="bg-blue-500 px-3 py-2 active:scale-95 rounded-[10px]"
        onClick={handleAddToCart}
      >
        Add to cart
      </button>
      <button
        className="bg-blue-500 px-3 py-2 active:scale-95 rounded-[10px]"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <Products />
    </div>
  );
};

export default App;
