import React from "react";
import "./App.css";
import Card from "./components/Card";

// function Compo({ name, age, home }) {
//   return (
//     <div>
//       <div className="box">
//         <h1>{name}</h1>
//         <h1>{age}</h1>
//         <h1>{home}</h1>
//       </div>
//     </div>
//   );
// }

const App = () => {
  return (
    <div>
      <h1>Hello React</h1>
      {/* <Compo name="Sachin" age={19} home="Delhi" /> */}
      <div className="cards">
        <Card title="Amitabh" des="Sooryavansham"/>
        <Card title="Sharukh" des="Paathan"/>
        <Card title="Akshay" des="Hanuman" />
        <Card title="Abhi" des="Movie" />
        <Card title="Shahid" des="Kabir singh" />
        <Card title="Avinash" des="Mahi" />
      </div>
    </div>
  );
};

export default App;
