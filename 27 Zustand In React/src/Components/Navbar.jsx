import React, { useEffect } from "react";
import { useMyStore } from "../store";

const Navbar = () => {
  //Choose Subscription of state carefully
  // const { name, count, increment, capitalizeName } = useMyStore();

  const count = useMyStore((state) => state.count);
  const increment = useMyStore((state) => state.increment);
  const capitalizeName = useMyStore((state) => state.capitalizeName);

  useEffect(() => {
    console.log("re-render hua kya!", count);
  });

  return (
    <div className="text-white text-xl">
      {/* <p className="text-2xl">{name}</p> */}
      <p className="text-xl">{count}</p>

      <button
        className="bg-gray-700 p-2 rounded-[5px] px-3 cursor-pointer active:scale-95 mr-6"
        onClick={increment}
      >
        Increment
      </button>

      <button
        className="bg-gray-700 p-2 rounded-[5px] px-3 cursor-pointer active:scale-95"
        onClick={capitalizeName}
      >
        Capitalize
      </button>
    </div>
  );
};

export default Navbar;
