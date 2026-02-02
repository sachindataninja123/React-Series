import React, { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import UploadFilesButton from "./components/UploadFilesButton";
import AutoComplete from "./components/AutoComplete";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import ThemeSwitch from "./components/ThemeSwitch";

const App = () => {
  const [lightMode, setLightMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: lightMode ? "light" : "dark",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Buttons />
        <UploadFilesButton />
        <AutoComplete />
        <ThemeSwitch setLightMode={setLightMode} />
      </ThemeProvider>
    </>
  );
};

export default App;
