import React from "react";
import {
  Container,
  OffersContainer,
  Products,
  ProductCard,
  Description,
  Image,
  Name,
  Price,
  Discount,
  DiscountPrice,
} from "./style";
import data from "../../../data/offers/data";
export const Offers = () => {
  return (
    <Container>
      <OffersContainer>
        <h1>Offers in Smartphones</h1>
        <Products>
          {data.map((item, index) => (
            <ProductCard key={index}>
              <DiscountPrice>{item.DiscountDetails}</DiscountPrice>
              <Image>
                {/* Use item.src instead of { Phone } */}
                <img src={item.src} alt="" />
              </Image>
              <Description>
                <Name>{item.name}</Name>
                <Price>{item.price}</Price>
                <Discount>{item.Descriptioin}</Discount>
              </Description>
            </ProductCard>
          ))}
        </Products>
      </OffersContainer>
    </Container>
  );
};

export default Offers;
