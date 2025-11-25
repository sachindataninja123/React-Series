import React from "react";
import "./App.css";
import Card from "./Card";

const App = () => {
  // const [uesrData, setuserData] = useState({
  //   name: "sachin",
  //   age: 19,
  //   passion: "coding",
  // });
  // console.log(uesrData);

  let arr = [1,2,3,4,5];

  return <div>
    {arr.map((items,index) => {
      return <Card key={index}/>
    })}
  </div>;
};

export default App;
