import React from "react";
import Categories from "./Categories/index";
import SmarthoneOffers from "../Home/Offers/Smartphone-offers";
import SmartwatchesOffers from "../Home/Offers/watch-offers";
// import CarouselCard from "../Mobile/MobileOffers";
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
               <SmarthoneOffers />
               <SmartwatchesOffers />
               {/* <OffersCopy /> */}
               {/* <CarouselCard /> */}
               {/* <MobileTopCategories /> */}
               <TopCategories />
               {/* <TopBrands /> */}
               {/* <MobileOffers /> */}
               {/* <Recommended /> */}
               {/* <Recommended2 /> */}
          </div>
     );
};
export default Home;
