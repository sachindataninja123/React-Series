import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <p>Count : {count}</p>

      <div className="buttons">
        {/* <button onClick={increment}>➕ Increment</button>
        <button onClick={decrement}>➖ Decrement</button>
        <button onClick = { () => {
          setCount(0);
        }}>♻️ Reset</button> */}
        <Button text="INCREMENT" func= {increment}/>
        <Button text="DECREMENT" func = {decrement}/>
        <Button text="RESET" func = {() => {
          setCount(0)}}/>
      </div>
    </>
  );
}

function Button({text,func}) {
  return(
     <button onClick={func}>{text}</button>
  )
}

export default App;
