import React from "react";
import Categories from "./Categories/index";
import Offers from "./Offers";
import CarouselCard from "../Mobile/MobileOffers"
import MobileTopCategories from "../Mobile/MobileTopCategories";
import TopCategories from "./TopCategories";
// import TopBrands from "./TopBrands";
// import MobileOffers from "../Mobile/MobileOffers";
// import Recommended from "./Recommended";
// import Recommended2 from "./Recommended2";

export const Home = () => {
  return (
    <div>
      <Categories />
      <Offers />
      {/* <CarouselCard /> */}
      <MobileTopCategories />
      <TopCategories />
      {/* <TopBrands /> */}
      {/* <MobileOffers /> */}
      {/* <Recommended /> */}
      {/* <Recommended2 /> */}
    </div>
  );
};
export default Home;
