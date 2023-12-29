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
  Info,
  Size,
  Sizes,
  BuySection,
  Amount,
  AddToCart,
  Favourites,
  Price,
  Supplier,
  Location,
  Buttons,
  Line,
  Button1,
  Button2,
} from "./style";
import Cart from "../../assets/icons/cart.svg";
import Outline from "../../assets/icons/outline.svg";
import VerifyLogo from "../../assets/icons/verified_user.svg";
import WorldLogo from "../../assets/icons/language.svg";
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
          </OtherImages>
        </ImagesView>
        <Description>
          <Availability>
            {" "}
            <img src={product.check} alt="" />
            {product.availability}
          </Availability>
          <ProductInfo>{product.name}</ProductInfo>
          <Reviews>
            <Rating>
              <img src={product.rating} alt="" />
              <p>{product.ratingBall}</p>
            </Rating>
          </Reviews>
          <Info>
            <p>Description:</p>
            <li>{product.info}</li>
          </Info>
          <Size>
            <p>Choose size:</p>
            <Sizes>
              <p>{product.sizes[0]}</p>
              <p>{product.sizes[1]}</p>
              <p>{product.sizes[2]}</p>
              <p>{product.sizes[3]}</p>
            </Sizes>
          </Size>
          <BuySection>
            <Amount>- 1 +</Amount>
            <AddToCart>
              <img src={Cart} alt="" />
              Add to cart
            </AddToCart>
            <Favourites>
              <img src={Outline} alt="" />
              Favourites
            </Favourites>
          </BuySection>
          <Price>
            {" "}
            <p>Price: </p> {product.price}
          </Price>
        </Description>
        <About>
          <Supplier>
            <h3>R</h3>
            <p>
              Supplier <br />
              Guanjoi Trading LLC
            </p>
          </Supplier>
          <Line></Line>
          <Location>
            <p>
              {" "}
              <img src={product.flag} alt="" />
              Germany, Berlin
            </p>
            <p>
              {" "}
              <img src={VerifyLogo} alt="" />
              Verified Seller
            </p>
            <p>
              {" "}
              <img src={WorldLogo} alt="" />
              Worldwide shipping
            </p>
          </Location>
          <Buttons>
            <Button1>
              <button>Send inquiry</button>
            </Button1>
            <Button2>
              <button>Seller's profile</button>
            </Button2>
          </Buttons>
        </About>
      </Content>
    </Container>
  );
};

export default ProductDetails;
