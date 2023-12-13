import React, { useRef } from "react";
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
  LeftArrow,
  RightArrow,
} from "./style";
import Phone from "../../../assets/imgs/image2.png";
import Arrow from "../../../assets/icons/arrow.svg";
export const CarouselCard = () => {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
  return (
    <Container>
      <OffersContainer>
        <h1> Offers in smartphones</h1>
        <Products>
          <Carousel
            ref={carouselRef}
            autoplay={true}
            autoplaySpeed={8000}
            dots={true}
            draggable
          >
            <ProductCard>
              <LeftArrow onClick={handlePrev}>
                <img src={Arrow} alt="" />
              </LeftArrow>
              <RightArrow onClick={handleNext}>
                <img src={Arrow} alt="" />
              </RightArrow>
              <DiscountPrice>56% off</DiscountPrice>
              <Image>
                <img src={Phone} alt="" />
              </Image>
              <Description>
                <Name>Galaxy A53(6 | 512)</Name>
                <Price> 250$</Price>
                <Discount> Save 95$</Discount>
              </Description>
            </ProductCard>
            <ProductCard>
              {" "}
              <LeftArrow onClick={handlePrev}>
                <img src={Arrow} alt="" />
              </LeftArrow>
              <RightArrow onClick={handleNext}>
                <img src={Arrow} alt="" />
              </RightArrow>
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
              <LeftArrow onClick={handlePrev}>
                <img src={Arrow} alt="" />
              </LeftArrow>
              <RightArrow onClick={handleNext}>
                <img src={Arrow} alt="" />
              </RightArrow>{" "}
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
              <LeftArrow onClick={handlePrev}>
                <img src={Arrow} alt="" />
              </LeftArrow>
              <RightArrow onClick={handleNext}>
                <img src={Arrow} alt="" />
              </RightArrow>{" "}
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
              <LeftArrow onClick={handlePrev}>
                <img src={Arrow} alt="" />
              </LeftArrow>
              <RightArrow onClick={handleNext}>
                <img src={Arrow} alt="" />
              </RightArrow>{" "}
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
        </Products>
      </OffersContainer>
    </Container>
  );
};
export default CarouselCard;
