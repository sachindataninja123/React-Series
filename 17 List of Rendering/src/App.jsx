import React from "react";
import "./App.css";
import User from "./User";

const App = () => {
  // const arr = ["Ram", "Shyam", "Mohan", "Sohan", "Rakesh"];

  const info = [
    { id: 1, name: "Sachin", age: 19 },
    { id: 2, name: "Raj", age: 20 },
    { id: 3, name: "Hyma", age: 21 },
    { id: 4, name: "Mishra", age: 18 },
    { id: 5, name: "Keshav", age: 20 },
  ];

  // const arr = [
  //   ["html", "css", "react", "JavaScript", "Three js"],
  //   ["mongodb", "Node js", "Express js", "java", "Next js"],
  // ];

  return (
    <div>
      {/* Normal Array */}
      {/* {arr.map((elem, index) => {
        return <h1 key={index}>{elem}</h1>;
      })} */}

      {/* objects into the array */}
      {/* {info.map((user, index) => {
        console.log(user);
        return (
          <div className="card">
            <p>Id : {user.id}</p>
            <p>Name : {user.name}</p>
            <p>Age : {user.age}</p>
          </div>
        );
      })} */}

      {/* array into array */}
      {/* {arr.map((item,index) => {
        console.log(item);
        return (
          <div key = {index}>
            {item.map((elem,index) => {
              return <h1 key = {index}>{elem}</h1>;
            })}
          </div>
        );
      })} */}

      {info.map((user) => {
        return <User key={user.id} userDetails={user} />;
      })}
    </div>
  );
};

export default App;
