import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [formDetails, setFormDetails] = useState({
    name: "",
    age: "",
  });

  // console.log(formDetails);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prevDetails) => {
      return {
        ...prevDetails,
        [name]: value,
      };
    });
  };

  const fetchData = async () => {
    const response = await axios(
      "https://69442b307dd335f4c35f8012.mockapi.io/users"
    );
    // console.log(response.data);
    setUsers(response.data);
  };

  const PostData = async () => {
    if (formDetails.name === " " || formDetails.age === "") {
      alert("FILL ALL THE USERDETAILS!");
      return;
    }
    const response = await axios({
      url: "https://69442b307dd335f4c35f8012.mockapi.io/users",
      method: "POST",
      data: formDetails,
    });
    setFormDetails({
      name: "",
      age: "",
    });

    if (response.status === 201) {
      fetchData();
    }
  };

  const editData = async () => {
    await axios({
      url: `https://69442b307dd335f4c35f8012.mockapi.io/users/${formDetails.id}`,
      method: "PUT",
      data: formDetails,
    });
    setFormDetails({
      name: "",
      age: "",
    });
    fetchData();
  };

  const deleteUserData = async (id) => {
    await axios({
      url: `https://69442b307dd335f4c35f8012.mockapi.io/users/${id}`,
      method: "DELETE",
    });
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center gap-5 flex-col flex-wrap ">
        <div className="flex items-center flex-col gap-4 sticky top-0 w-[40%]  bg-gray-700 p-8 rounded-[5px]">
          <input
            type="text"
            className="border p-3 rounded-[5px] text-[18px] w-full"
            placeholder="Enter name"
            name="name"
            value={formDetails.name}
            onChange={handleOnChange}
          />
          <input
            type="text"
            className="border p-3 rounded-[5px] text-[18px] w-full"
            placeholder="Enter age"
            name="age"
            value={formDetails.age}
            onChange={handleOnChange}
          />

          {formDetails.editMode ? (
            <button
              className="bg-green-400 p-3 rounded-[5px] active:scale-95 cursor-pointer text-2xl"
              onClick={editData}
            >
              Save Data
            </button>
          ) : (
            <button
              className="bg-blue-500 p-3 rounded-[5px] active:scale-95 cursor-pointer text-2xl"
              onClick={PostData}
            >
              Post Data
            </button>
          )}
        </div>

        {users.map((userDetails, idx) => {
          return (
            <div className="bg-gray-800 w-[40%] p-5 rounded-[7px]" key={idx}>
              <div className="flex items-start justify-between">
                <div>
                  <p>id : {userDetails.id}</p>
                  <p>name : {userDetails.name}</p>
                  <p>age : {userDetails.age}</p>
                </div>
                <div className="flex flex-col">
                  <button
                    className="bg-blue-500 px-3 py-1 rounded-[5px] active:scale-95 cursor-pointer mt-2 "
                    onClick={() =>
                      setFormDetails({ ...userDetails, editMode: true })
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 px-3 py-1 rounded-[5px] active:scale-95 cursor-pointer mt-2 "
                    onClick={() => deleteUserData(userDetails.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
