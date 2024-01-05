import React from "react";
import {
     Main,
     CategoriesContainer,
     Categories,
     ImagePlace,
     Aside,
     Join,
     Offer,
     Quotes,
     Login,
} from "./style";
import Avatar from "../../../assets/imgs/asideavatar.jpg";
import Banner from "../../../assets/imgs/banner.png";
export const Home = () => {
     return (
          <Main>
               <CategoriesContainer>
                    <Categories>
                         <ul>
                              <li>Automobiles</li>
                              <li>Clothes and wear</li>
                              <li>Home interiors</li>
                              <li>Computer and tech</li>
                              <li>Tools, equipments</li>
                              <li>Sports and outdoor</li>
                              <li>Machinery tools</li>
                              <li>More category</li>
                              <li>More category</li>
                              <li>More category</li>
                              <li>More category</li>
                              <li>More category</li>
                         </ul>
                    </Categories>

                    <ImagePlace>
                         <p>
                              Latest trending <br />
                              <span>Electronic Items</span>
                         </p>
                         <button>Learn more</button>
                         <img src={Banner} alt="" />
                    </ImagePlace>

                    <Aside>
                         <Join>
                              <div>
                                   <img src={Avatar} alt="" />
                                   <p>
                                        Hi, user <br /> let's get stated
                                   </p>
                              </div>
                              <button>Join now</button>
                              <Login>Login</Login>
                         </Join>
                         <Offer>Get US $10 off with a new supplier</Offer>
                         <Quotes>Send quotes with supplier preferences</Quotes>
                    </Aside>
               </CategoriesContainer>
          </Main>
     );
};
export default Home;
