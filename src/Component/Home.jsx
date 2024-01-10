import React, { Fragment } from "react";

// Components
import Header from "../Component/Header";
import Slider from "../Component/Slider";
import OtherText from "../Component/OtherText";
import ProductList from "../Component/ProductList";
import Category from "../Component/Category";
import Blog from "../Component/Blog";
import Footer from "./Footer";

function Home() {
  return (
    <Fragment>
      <Header />
      <Slider />
      <OtherText />
      <ProductList />
      <Category />
      <Blog />
      <Footer />
    </Fragment>
  );
}

export default Home;
