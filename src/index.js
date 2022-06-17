import React from "react";
import ReactDOM from "react-dom";
import ProductContext from "./context/productContext";
import "./index.css";
import Root from "./root";

ReactDOM.render(
  <React.StrictMode>
    <ProductContext>
      <Root />
    </ProductContext>
  </React.StrictMode>,
  document.getElementById("root")
);
