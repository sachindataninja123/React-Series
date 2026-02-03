import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Stack from "@mui/material/Stack";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Stack direction={"row"} justifyContent={"space-between"} spacing={1}>
        <Sidebar />
        <Feed />
        <RightBar />
      </Stack>
    </div>
  );
};

export default App;
