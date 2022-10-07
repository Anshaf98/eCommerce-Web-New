import React from "react";
import { TopProductsApi } from "../api/TopProductsApi";
import Product from "./Product";

const Products = () => {
  return (
    <div className="flex flex-wrap p-5 items-center justify-center">
      {TopProductsApi.map((product, index) => (
        <Product item={product} key={index} />
      ))}
    </div>
  );
};

export default Products;
