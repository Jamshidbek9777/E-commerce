import React from "react";
import Categories from "./Categories/index";
import Offers from "./Offers";
// import MobileOffers from "../Mobile/MobileOffers";
// import Recommended from "./Recommended";
// import Recommended2 from "./Recommended2";

export const Home = () => {
  return (
    <div>
      <Categories />
      <Offers />
      {/* <MobileOffers /> */}
      {/* <Recommended /> */}
      {/* <Recommended2 /> */}
    </div>
  );
};
export default Home;
