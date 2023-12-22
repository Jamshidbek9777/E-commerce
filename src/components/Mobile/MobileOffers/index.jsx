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
import data from "../../../data/offers/data";
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
            {data.map((item, index) => (
              <ProductCard key={index}>
                <LeftArrow onClick={handlePrev}>
                  <img src={Arrow} alt="" />
                </LeftArrow>
                <RightArrow onClick={handleNext}>
                  <img src={Arrow} alt="" />
                </RightArrow>
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
            {/* <ProductCard>
             
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
            </ProductCard> */}
          </Carousel>
        </Products>
      </OffersContainer>
    </Container>
  );
};
export default CarouselCard;
