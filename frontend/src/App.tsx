import React from "react";
import { ThemeProvider } from "@mui/material";

import ResponsiveAppBar from "./components/appbar/AppBar";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar />
    </ThemeProvider>
  );
}

export default App;
