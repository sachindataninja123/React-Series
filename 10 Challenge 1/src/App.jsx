import React from "react";
import UserCard from "./components/UserCard";
import users from "./components/Users.json";

const App = () => {
  return (
    <div className="w-[90%] m-auto pb-20">
      <h1 className="text-6xl text-center m-10 font-semibold">Card Design</h1>
      <div className="flex items-center justify-center flex-wrap gap-[2rem] ">
        {users.map((obj) => {
          return (
            <UserCard
              name={obj.name}
              role={obj.role}
              img={obj.img}
              likecount={obj.likecount}
              commentcount={obj.commentcount}
              sharecount={obj.sharcount}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
