import React from "react";
import Anno from "../components/Anno";
import Counter from "../components/Counter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

const ProductPage = () => {
  return (
    <div>
      <Anno />
      <Navbar />
      <div className="flex justify-center">
        <div className="flex flex-1 items-center justify-center">
          <img
            className="w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
            src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
        <div className="flex-[1.3] flex items-start justify-items-start flex-col mt-10">
          <h1 className="title text-[40px]">
            Creamy Hoody 100% Orignal Cotton
          </h1>
          <p className="pr-[4rem] text-justify mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            voluptas ut nihil corrupti corporis aut consequuntur commodi, natus
            dolorem quo non minus? Totam qui dolorem iusto aliquam, laborum
            dolore pariatur!
          </p>
          <p className="mt-5 text-3xl">
            Price: <b>$70</b>
          </p>
          <div className="flex text-2xl mt-5">
            Color
            <div className="bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]"></div>
            <div className="bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]"></div>
            <div className="bg-yellow-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]"></div>
          </div>
          <div className="mt-5 text-2xl">
            Size
            <select className="ml-5 border-2">
              <option selected disabled>
                Select
              </option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div className="mt-5">
            <Counter />
          </div>
          <button className="btn mt-5 mb-10">Add to cart</button>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductPage;
