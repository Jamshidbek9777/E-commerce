import React from "react";
import { Link } from "react-router-dom";
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
  Line,
} from "./style";
import data from "../../../data/offers/data";

export const Offers = () => {
  return (
    <Container>
      <OffersContainer>
        <h1>Offers in Smartphones</h1>
        <Line> </Line>
        <Products>
          {data.map((item) => (
            <Link
              style={{ textDecoration: "none" }}
              key={item.id}
              to={`/productdetails/${item.id}`}
            >
              <ProductCard>
                {/* <DiscountPrice>{item.DiscountDetails}</DiscountPrice> */}
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

export default Offers;
