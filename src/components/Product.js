import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const Product = ({ item }) => {
  const [hoverEffect, setHoverEffect] = useState("opacity-0");

  const handleHoverEnter = () => {
    setHoverEffect("opacity-1 bg-[rgba(0,0,0,0.2)]");
  };

  const handleHoverExit = () => {
    setHoverEffect(" opacity-0");
  };

  const iconStyle =
    "h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 cursor-pointer hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer";

  return (
    <div
      className="flex flex-1 items-center justify-center min-w-[250px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-2 relative"
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverExit}
    >
      <img src={item.src} alt="" className="w-[100%] h-[500px]" />

      <div
        className={
          ` flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100` +
          hoverEffect
        }
      >
        <div className={iconStyle}>
          <FaShoppingCart />
        </div>
        {/* FAVORITE */}
        <div className={iconStyle}>
          <FaShoppingCart />
        </div>
        {/* SEARCH */}
        <div className={iconStyle}>
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default Product;
