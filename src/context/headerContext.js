import React, { createContext, useState } from "react";
import { productItemInfo } from "../utils/productItemInfo";

export const Context = createContext();

export const HeaderContext = ({ children }) => {
  const [data, setData] = useState(productItemInfo);
  return (
    <Context.Provider value={[data, setData]}>{children}</Context.Provider>
  );
};
