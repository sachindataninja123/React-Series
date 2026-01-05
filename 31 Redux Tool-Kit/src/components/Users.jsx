import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserData } from "../Store/features/Users/userSlice";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserData());
  }, []);

  return <div></div>;
};

export default Users;
