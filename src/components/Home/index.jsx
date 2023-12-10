import React from "react";
import Categories from "./Categories/index";
import Offers from "./Offers";
import MobileOffers from "../Mobile/MobileOffers";
import Recommended from "./Recommended";

export const Home = () => {
  return (
    <div>
      <Categories />
      <Offers />
      <MobileOffers />
      <Recommended/>
    </div>
  );
};
export default Home;
