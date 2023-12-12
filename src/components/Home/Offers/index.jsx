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
import Phone from "../../../assets/imgs/image2.png";
export const Offers = () => {
  return (
    <Container>
      <OffersContainer>
        <h1> Offers in smartphones</h1>
        <Products>
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
          <ProductCard>
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
          </ProductCard>
       
        </Products>
      </OffersContainer>
    </Container>
  );
};
export default Offers;
