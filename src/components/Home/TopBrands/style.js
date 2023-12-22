import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #f7fafc;
  padding: 20px 160px 20px 160px;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 96px;
  @media screen and (max-width: 1440px) {
    padding: 20px 120px 20px 120px;
  }
  @media screen and (max-width: 820px) {
    padding: 20px 40px 20px 40px;
  }
`;
const BrandsContainer = styled.div`
  > h1 {
  }
`;

const Products = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1120px) {
    justify-content: center;
  }
  gap: 16px;
  > .iphone {
    z-index: 1;
    background: #313131;
    position: relative;
  }
  > .realme {
    background: #fff3cc;
    @media screen and (max-width: 1120px) {
      display: none;
    }
  }
  > .xiaomi {
    background: #ffecdf;
    @media screen and (max-width: 1514px) {
      /* display: none; */
    }
  }
  > .xiaomi2 {
    background: #ffecdf;
    @media screen and (max-width: 1800px) {
      display: none;
    }
  }
`;
const ProductCard = styled.div`
  display: flex;
  gap: 10px;
  border-radius: 16px;
  width: 389px;
  height: 207px;
  position: relative;
`;
const Image = styled.div`
  > img {
    width: 180px;
    height: 185px;
    margin-top: 10px;
  }
`;
const Description = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  align-items: flex-start;
  gap: 10px;
  display: inline-flex;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  font-style: normal;
  letter-spacing: 1.4px;
  > .iphonetxt {
    border-radius: 8px;
    padding: 9px 20px;
    color: #fff;
    background: #494949;
  }
  > .realmetxt {
    border-radius: 8px;
    padding: 9px 20px;
    color: #222;
    background: #f6de8d;
  }
  > .xiaomitxt {
    padding: 9px 20px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 8px;
    background: #ffd1b0;
  }
`;
const BrandName = styled.div``;

const Logo = styled.div`
  > img {
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 45px;
    margin-top: 5px;
  }
  background-color: #fff;
  border: 1px solid white;
  border-radius: 16px;
  width: 60px;
  height: 60px;
  margin-left: 20px;
  margin-top: 20px;
`;
const Text = styled.div`
  color: var(--White, #fff);
  font-size: 24px;
  @media screen and (max-width: 442px) {
    font-size: 18px;
  }

  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  margin-top: 20px;
  margin-left: 20px;
  > .realmetext {
    color: black;
  }
  > .xiaomitext {
    color: black;
  }
`;
const LogoRealme = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 30px; /* 125% */
`;
export const LogoXiaomi = styled.div`
  width: 67px;
  height: 67px;
  flex-shrink: 0;
  margin-top: 20px;
  margin-left: 20px;
`;
export {
  Container,
  BrandsContainer,
  Products,
  ProductCard,
  Image,
  Description,
  BrandName,
  // Mask,
  Logo,
  Text,
  LogoRealme,
};
