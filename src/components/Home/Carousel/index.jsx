import React from "react";
import { Carousel } from "antd";
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
import Phone from "../../../assets/imgs/image2.png";
export const CarouselCard = () => {
  return (
    <Container>
      <OffersContainer>
        <h1> Offers in smartphones</h1>
        <Products>
          <Carousel autoplay={true} dots={true} draggable>
            <ProductCard>
              <DiscountPrice>56% off</DiscountPrice>
              <Image>
                <img src={Phone} alt="" />
              </Image>
              <Description>
                <Name>Galaxy A53(6 | 64)</Name>
                <Price> 250$</Price>
                <Discount> Save 95$</Discount>
              </Description>
            </ProductCard>
            <ProductCard>
              {" "}
              <DiscountPrice>56% off</DiscountPrice>
              <Image>
                <img src={Phone} alt="" />
              </Image>
              <Description>
                <Name>Galaxy A53(6 | 64)</Name>
                <Price> 250$</Price>
                <Discount> Save 95$</Discount>
              </Description>
            </ProductCard>
          </Carousel>
          {/* <ProductCard>
            {" "}
            <Image>
            <DiscountPrice>56% off</DiscountPrice>
            
            <img src={Phone} alt="" />
            </Image>
            <Description>
              <Name>Galaxy A53(6 | 64)</Name>
              <Price> 250$</Price>
              <Discount> Save 95$</Discount>
            </Description>
            </ProductCard>
            <ProductCard>
            {" "}
            <DiscountPrice>56% off</DiscountPrice>
            <Image>
              <img src={Phone} alt="" />
            </Image>
            <Description>
              <Name>Galaxy A53(6 | 64)</Name>
              <Price> 250$</Price>
              <Discount> Save 95$</Discount>
            </Description>
          </ProductCard>
          <ProductCard>
            {" "}
            <DiscountPrice>56% off</DiscountPrice>
            <Image>
              <img src={Phone} alt="" />
            </Image>
            <Description>
              <Name>Galaxy A53(6 | 64)</Name>
              <Price> 250$</Price>
              <Discount> Save 95$</Discount>
            </Description>
          </ProductCard> */}
        </Products>
      </OffersContainer>
    </Container>
  );
};
export default CarouselCard;
