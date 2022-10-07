import React from "react";
import { CategoriesApi } from "../api/CategoriesApi";
import Category from "./Category";

const Categories = () => {
  return (
    <div className="flex justify-between items-center p-5">
      {CategoriesApi.map((category, index) => {
        return <Category item={category} key={index} />;
      })}
    </div>
  );
};

export default Categories;
