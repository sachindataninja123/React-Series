import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../Store/features/Users/userSlice";

const Users = () => {
  const users = useSelector((state) => state.user.users);
  console.log(users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  return <div></div>;
};

export default Users;
