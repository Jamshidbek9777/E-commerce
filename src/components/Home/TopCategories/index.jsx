import React from "react";
import {
  Container,
  OffersContainer,
  Products,
  ProductCard,
  Description,
  Image,
  Name,
  Line,
} from "./style";
import data from "../../../data/topcategories/data";
export const TopCategories = () => {
  return (
    <Container>
      <OffersContainer>
        <h1> Shop From Top Categories</h1>
        <Line> </Line>
        <Products>
          {data.map((item, index) => (
            <ProductCard key={index}>
              <Image>
                <img src={item.src} alt="" />
              </Image>
              <Description>
                <Name>{item.name}</Name>
              </Description>
            </ProductCard>
          ))}
          {/* <ProductCard>
              <Image>
                <img src={Phone} alt="" />
              </Image>
              <Description>
                <Name>Watches</Name>
              </Description>
            </ProductCard> */}
        </Products>
      </OffersContainer>
    </Container>
  );
};
export default TopCategories;
