import React, { useEffect, useState } from "react";

const Users = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || [],
  );
//   console.log(data)

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
      );

      const data = await response.json();
      setData(data);
      localStorage.setItem("data", JSON.stringify(data));
    })();

    //unmounted concept
    return () => {
        setData([]);
        localStorage.clear();
    }
  }, []);

  return (
    <div>
      {data.map((item, idx) => {
        return (
          <div key={idx}>
            <h1>{item.name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
