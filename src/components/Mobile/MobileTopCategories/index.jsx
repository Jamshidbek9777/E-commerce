import React, { useRef } from "react";
import {
  Container,
  OffersContainer,
  Products,
  ProductCard,
  Description,
  Image,
  Name,
  LeftArrow,
  RightArrow,
} from "./style";
import Phone from "../../../assets/imgs/watch1.png";
import Arrow from "../../../assets/icons/arrow.svg";
import data from "../../../data/topcategories/data";
import { Carousel } from "antd";
export const MobileTopCategories = () => {
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
        <h1> Shop From Top Categories</h1>
        <Products>
          <Carousel
            autoplay={true}
            autoplaySpeed={5000}
            draggable
            ref={carouselRef}
          >
            {data.map((item, index) => (
              <ProductCard key={index}>
                <LeftArrow onClick={handlePrev}>
                  <img src={Arrow} alt="" />
                </LeftArrow>
                <RightArrow onClick={handleNext}>
                  <img src={Arrow} alt="" />
                </RightArrow>
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
            </ProductCard>
            <ProductCard>
              <LeftArrow onClick={handlePrev}>
                <img src={Arrow} alt="" />
              </LeftArrow>
              <RightArrow onClick={handleNext}>
                <img src={Arrow} alt="" />
              </RightArrow>{" "}
              <Image>
                <img src={Phone} alt="" />
              </Image>
              <Description>
                <Name>Watches</Name>
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
                <img src={Phone} alt="" />
              </Image>
              <Description>
                <Name>Watches</Name>
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
                <img src={Phone} alt="" />
              </Image>
              <Description>
                <Name>Watches</Name>
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
                <img src={Phone} alt="" />
              </Image>
              <Description>
                <Name>Watches</Name>
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
                <img src={Phone} alt="" />
              </Image>
              <Description>
                <Name>Watches</Name>
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
              <Image>
                <img src={Phone} alt="" />
              </Image>
              <Description>
                <Name>Watches</Name>
              </Description>
            </ProductCard> */}
          </Carousel>
        </Products>
      </OffersContainer>
    </Container>
  );
};
export default MobileTopCategories;
