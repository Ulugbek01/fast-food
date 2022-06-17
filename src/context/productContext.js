import React, { createContext, useState } from "react";
import { productItemInfo } from "../utils/productItemInfo";

export const Context = createContext();

export const ProductContext = ({ children }) => {
  const [productData, setProductData] = useState(productItemInfo);
  return (
    <Context.Provider value={[productData, setProductData]}>
      {children}
    </Context.Provider>
  );
};

export default ProductContext;
