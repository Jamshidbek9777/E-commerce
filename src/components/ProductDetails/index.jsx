import React from "react";
import {
  Container,
  ImagesView,
  MainImage,
  OtherImages,
  Description,
  About,
  Content,
  Availability,
  ProductInfo,
  Reviews,
  Price,
} from "./style";
import Futbokla from "../../assets/imgs/futbolka.png";
export const ProductDetails = () => {
  return (
    <Container>
      <Content>
        <ImagesView>
          <MainImage>
            <img src={Futbokla} alt="" />
          </MainImage>
          <OtherImages>
            <img src={Futbokla} alt="" />
            <img src={Futbokla} alt="" />
            <img src={Futbokla} alt="" />
            <img src={Futbokla} alt="" />
            <img src={Futbokla} alt="" />
            <img src={Futbokla} alt="" />
          </OtherImages>
        </ImagesView>
        <Description>
          <Availability>In stock</Availability>
          <ProductInfo>
            Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
          </ProductInfo>
          <Reviews>32 reviews</Reviews>
          <Price></Price>
        </Description>
        <About>
          <h1>Germany</h1>
        </About>
      </Content>
    </Container>
  );
};
export default ProductDetails;
