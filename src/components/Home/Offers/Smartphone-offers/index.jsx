import React from "react";
import { Link } from "react-router-dom";
import {
     Container,
     OffersContainer,
     Products,
     ProductCard,
     Description,
     Image,
     Name,
     Price,
     Line,
     Icon,
} from "./style";
import data from "../../../../data/offers/data";
import Cart from "../../../../assets/offers_icons/shopping-bag.svg";
export const Offers = () => {
     return (
          <Container>
               <OffersContainer>
                    <h1>Offers in Smartphones</h1>
                    <Line> </Line>
                    <Products>
                         {data.map((item) => (
                              <Link
                                   style={{ textDecoration: "none" }}
                                   key={item.id}
                                   to={`/productdetails/${item.id}`}>
                                   <ProductCard>
                                        <Image>
                                             <img src={item.src} alt="" />
                                        </Image>
                                        <Name>{item.name}</Name>
                                        <Description>
                                             <Price>{item.price}</Price>
                                             <Icon>
                                                  <img src={Cart} alt="" />
                                             </Icon>
                                        </Description>
                                   </ProductCard>
                              </Link>
                         ))}
                    </Products>
               </OffersContainer>
          </Container>
     );
};

export default Offers;
