import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Footer = () => {
  const socialStyle = "m-3 rounded-full cursor-pointer p-2 text-white";
  return (
    <div className="flex items-center justify-around p-2">
      <div className="flex-1 flex flex-col flex-wrap p-2">
        <h1 className="text-[25px]">MHD</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
          ipsam, tempora nobis modi vitae atque iure quasi praesentium eaque
          quam nam aut odit ea minus natus aperiam ducimus voluptatem. Numquam?
        </p>
        <div className="flex items-center justify-center mt-3 self-start">
          <div className={socialStyle + " bg-blue-600"}>
            <FaShoppingCart />
          </div>
          <div className={socialStyle + " bg-orange-600"}>
            <FaShoppingCart />
          </div>
          <div className={socialStyle + " bg-sky-600"}>
            <FaShoppingCart />
          </div>
          <div className={socialStyle + " bg-red-600"}>
            <FaShoppingCart />
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col p-2">
        <div className="flex m-3">
          <FaShoppingCart />
          <p className="pl-3">State Of NY</p>
        </div>
        <div className="flex m-3">
          <FaShoppingCart />
          <p className="pl-3">PHONE</p>
        </div>
        <div className="flex m-3">
          <FaShoppingCart />
          <p className="pl-3">EMAIL</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
