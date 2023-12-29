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
import { Link } from "react-router-dom";
export const CarouselCard = () => {
  return (
    <Container>
      <OffersContainer>
        <h1> Offers in smartphones</h1>
        <Products>
          {data.map((item, index) => (
            <Link
              style={{ textDecoration: "none" }}
              key={item.id}
              to={`/productdetails/${item.id}`}
            >
              <ProductCard key={index}>
                <DiscountPrice>{item.DiscountDetails}</DiscountPrice>
                <Image>
                  <img src={item.src} alt="" />
                </Image>
                <Description>
                  <Name>{item.name}</Name>
                  <Price>{item.price}</Price>
                  <Discount>{item.Descriptioin}</Discount>
                </Description>
              </ProductCard>
            </Link>
          ))}
        </Products>
      </OffersContainer>
    </Container>
  );
};
export default CarouselCard;
