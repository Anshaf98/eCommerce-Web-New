import React from "react";
import Anno from "../components/Anno";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import Sider from "../components/Sider";

const Home = () => {
  return (
    <div>
      <Anno />
      <Navbar />
      <Sider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
