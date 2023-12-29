import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  background-color: #f7fafc;
  padding: 0px 160px 20px 160px;
  @media screen and (max-width: 975px) {
    padding: 0px 25px 0px 25px;
  }
  @media screen and (max-width: 820px) {
    /* padding: 0px 200px 0px 200px; */
    /* display: none; */
  }
`;
const OffersContainer = styled.div`
  > h1 {
    font-size: 24px;
    margin-top: 50px;
    color: var(--Text, #666);
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 125% */
  }
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  /* align-items: center; */
  /* text-align: center; */
`;
export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #ededed;
  margin-top: 10px;
  border-radius: 100px;
`;
const Products = styled.div`
  gap: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (max-width: 512px) {
    gap: 5px;
  }
`;
const ProductCard = styled.div`
  position: relative;
  margin-top: 20px;
  transition: 0.2s all ease-in-out;
  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    border: 1px solid #008ecc;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  /* text-align: center; */
  width: 225px;
  height: 320px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #dee2e7;
  @media screen and (max-width: 512px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 180px;
    height: 300px;
    border-radius: 16px;
    border: 1px solid #dee2e7;
  }
`;

const Description = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  /* text-align: center; */
  width: 100%;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  height: 30%;
`;
const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70%;
  > img {
  }
  /* position: relative; */
`;
const Name = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  text-decoration: none;
  color: var(--HEading, #222);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 112.5% */
  margin-top: 12px;
  @media screen and (max-width: 512px) {
    font-size: 14px;
  }
`;
const Price = styled.p`
  border-bottom: 1px solid #ededed;
  margin-top: 10px;
  color: var(--HEading, #222);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 112.5% */
  @media screen and (max-width: 512px) {
    font-size: 14px;
  }
`;
const Discount = styled.p`
  margin-top: 10px;
  color: #249b3e;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  @media screen and (max-width: 512px) {
    font-size: 14px;
  }
`;

const DiscountPrice = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0px 16px;
  background: var(--Primary, #008ecc);
  color: #fff;
  position: absolute;
  right: 0.2px;
  width: 40px;
  height: 45px;
  flex-shrink: 0;
  font-size: 12px;
  @media screen and (max-width: 512px) {
    width: 35px;
    height: 40px;
  font-size: 11px;

  }
`;
export {
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
};
