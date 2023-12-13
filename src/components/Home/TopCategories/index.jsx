import React from "react";
import {
  Container,
  OffersContainer,
  Products,
  ProductCard,
  Description,
  Image,
  Name,
} from "./style";
import Phone from "../../../assets/imgs/watch1.png";
export const TopCategories = () => {
  return (
    <Container>
      <OffersContainer>
        <h1> Shop From Top Categories</h1>
        <Products>
          
            <ProductCard>
              <Image>
                <img src={Phone} alt="" />
              </Image>
              <Description>
                <Name>Watches</Name>
              </Description>
            </ProductCard>
            <ProductCard>
              {" "}
              <Image>
                <img src={Phone} alt="" />
              </Image>
              <Description>
                <Name>Watches</Name>
              </Description>
            </ProductCard>
            <ProductCard>
              {" "}
              <Image>
                <img src={Phone} alt="" />
              </Image>
              <Description>
                <Name>Watches</Name>
              </Description>
            </ProductCard>
            <ProductCard>
              {" "}
              <Image>
                <img src={Phone} alt="" />
              </Image>
              <Description>
                <Name>Watches</Name>
              </Description>
            </ProductCard>
            <ProductCard>
              {" "}
              <Image>
                <img src={Phone} alt="" />
              </Image>
              <Description>
                <Name>Watches</Name>
              </Description>
            </ProductCard>
            <ProductCard>
              {" "}
              <Image>
                <img src={Phone} alt="" />
              </Image>
              <Description>
                <Name>Watches</Name>
              </Description>
            </ProductCard>
            <ProductCard>
              {" "}
              <Image>
                <img src={Phone} alt="" />
              </Image>
              <Description>
                <Name>Watches</Name>
              </Description>
            </ProductCard>
        </Products>
      </OffersContainer>
    </Container>
  );
};
export default TopCategories;
