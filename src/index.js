import React from "react";
import ReactDOM from "react-dom";
import { HeaderContext } from "./context/headerContext";
import "./index.css";
import Root from "./root";

ReactDOM.render(
  <React.StrictMode>
    <HeaderContext>
      <Root />
    </HeaderContext>
  </React.StrictMode>,
  document.getElementById("root")
);
