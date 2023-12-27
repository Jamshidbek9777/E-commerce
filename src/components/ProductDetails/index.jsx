import React from "react";
import { useParams } from "react-router-dom";
import productData from "../../data/productdetails/data";
import {
  About,
  Availability,
  Container,
  Content,
  Description,
  ImagesView,
  MainImage,
  OtherImages,
  ProductInfo,
  Reviews,
  Rating,
} from "./style";

const ProductDetails = () => {
  const { id } = useParams();

  const product = productData.find((item) => item.id == id);
  console.log(product);
  return (
    <Container>
      <Content>
        <ImagesView>
          <MainImage>
            <img src={product.image} alt="" />
          </MainImage>
          <OtherImages>
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </OtherImages>
        </ImagesView>
        <Description>
          <Availability>{product.availability}</Availability>
          <ProductInfo>{product.name}</ProductInfo>
          <Reviews>
            <Rating>
              <img src={product.rating} alt="" />
              <p>{product.ratingBall}</p>
            </Rating>
          </Reviews>
        </Description>
        <About>Germay</About>
      </Content>
    </Container>
  );
};

export default ProductDetails;
