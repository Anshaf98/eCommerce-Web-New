import React from "react";
import Anno from "../components/Anno";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

const CategoryPage = () => {
  return (
    <div>
      <Anno />
      <Navbar />
      <div className="flex flex-col p-5">
        <h1 className="text-[30px]">Men's Cloth</h1>
        <div className="flex items-center justify-between mt-3">
          <div className="flex">
            <p>Filter By</p>
            <select className="ml-3 border-2 border-silver">
              <option selected disabled>
                Size
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
            <select className="ml-3 border-2 border-silver">
              <option selected disabled>
                Colors
              </option>
              <option>Yellow</option>
              <option>Blue</option>
              <option>Red</option>
            </select>
          </div>
          <div className="flex">
            <p>Sort By</p>
            <select className="ml-3 border-2 border-silver">
              <option>Newset (first)</option>
              <option>Oldest (first)</option>
              <option>Price (Asc)</option>
              <option>Price (Des)</option>
            </select>
          </div>
        </div>
      </div>
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default CategoryPage;
