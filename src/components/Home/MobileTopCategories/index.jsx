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
import { Carousel } from "antd";
export const MobileTopCategories = () => {
  return (
    <Container>
      <OffersContainer>
        <h1> Shop From Top Categories</h1>
        <Products>
          <Carousel autoplay={true} autoplaySpeed={5000} dots={true} draggable>
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
          </Carousel>
        </Products>
      </OffersContainer>
    </Container>
  );
};
export default MobileTopCategories;
