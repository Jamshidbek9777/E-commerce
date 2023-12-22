import React, { useRef } from "react";
import {
  Container,
  BrandsContainer,
  Products,
  ProductCard,
  Description,
  Image,
  BrandName,
  Logo,
  LogoRealme,
  LogoXiaomi,
  Text,
} from "./style";
import IphoneLogo from "../../../assets/icons/apple.svg";
import RealmeLogo from "../../../assets/icons/realme.svg";
import Realme from "../../../assets/imgs/realme.png";
import Xiaomi from "../../../assets/imgs/xiaomi.png";
import XiaomiLogo from "../../../assets/imgs/xiaomilogo.svg";
import Slider from "react-slick";
export const Offers = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    speed: 500,
    arrows: true,
    adaptiveHeight: true,
    dots: true,
    appendDots: (dots) => <h1>{dots}</h1>,
  };
  // const carouselRef = useRef(null);

  // const handlePrev = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.prev();
  //   }
  // };

  // const handleNext = () => {
  //   if (carouselRef.current) {
  //     carouselRef.current.next();
  //   }
  // };
  return (
    <Container>
      <BrandsContainer>
        <h1> Top Electronic Brands</h1>
        <Products>
          <Slider {...settings}>
            <ProductCard className="iphone">
              <div>
                <Description>
                  <BrandName className="iphonetxt">Iphone</BrandName>
                </Description>
                <Logo>
                  <img src={IphoneLogo} alt="" />
                </Logo>
                <Text>
                  <p>UP to 80% OFF</p>
                </Text>
              </div>
              <Image>
                <img src={Realme} alt="" />
              </Image>
            </ProductCard>
            <ProductCard className="realme">
              {" "}
              <div>
                <Description>
                  <BrandName className="realmetxt">Realme</BrandName>
                </Description>
                <LogoRealme>
                  <img src={RealmeLogo} alt="" />
                </LogoRealme>
                <Text>
                  <p className="realmetext">UP to 80% OFF</p>
                </Text>
              </div>
              <Image>
                <img src={Realme} alt="" />
              </Image>
            </ProductCard>
            <ProductCard className="xiaomi">
              <div>
                <Description>
                  <BrandName className="xiaomitxt">Xiaomi</BrandName>
                </Description>
                <LogoXiaomi>
                  <img src={XiaomiLogo} alt="" />
                </LogoXiaomi>
                <Text>
                  <p className="xiaomitext">UP to 80% OFF</p>
                </Text>
              </div>
              <Image>
                <img src={Xiaomi} alt="" />
              </Image>
            </ProductCard>
            <ProductCard className="xiaomi2">
              <div>
                <Description>
                  <BrandName className="xiaomitxt">Xiaomi</BrandName>
                </Description>
                <LogoXiaomi>
                  <img src={XiaomiLogo} alt="" />
                </LogoXiaomi>
                <Text>
                  <p className="xiaomitext">UP to 80% OFF</p>
                </Text>
              </div>
              <Image>
                <img src={Xiaomi} alt="" />
              </Image>
            </ProductCard>
          </Slider>
        </Products>
      </BrandsContainer>
    </Container>
  );
};
export default Offers;
