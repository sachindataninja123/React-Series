import React, { useMemo, useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const expensiveTask = () => {
    for (let i = 0; i <= 2000000000; i++) {
      return 2;
    }
  };

  const expensiveResult = useMemo(() => {
    const result = expensiveTask();
    return result;
  }, [count]);

  return (
    <div>
      <h1>{expensiveResult}</h1>
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>

      <button onClick={() => setQuantity(quantity + 1)}>
        quantity : {quantity}
      </button>
    </div>
  );
};

export default Count;
