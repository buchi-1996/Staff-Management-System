import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/system";
import theme from "./config/theme";
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
  </BrowserRouter>
);
