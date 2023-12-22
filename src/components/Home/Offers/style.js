import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #f7fafc;
  padding: 0px 160px 20px 160px;
  @media screen and (max-width: 975px) {
    padding: 0px 25px 0px 25px;
  }
  @media screen and (max-width: 820px) {
    padding: 0px 200px 0px 200px;
    display: none;
  }
`;
const OffersContainer = styled.div`
  > h1 {
    font-size: 20px;
    margin-top: 50px;
    color: var(--Text, #666);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
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
  text-align: center;
`;
const Products = styled.div`
  gap: 15px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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
  height: 295px;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid #dee2e7;
  @media screen and (max-width: 975px) {
    position: relative;
    transition: 0.2s all ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 375px;
    height: 305px;
    border-radius: 16px;
    border: 1px solid #dee2e7;
  }
`;

const Description = styled.div`
  @media screen and (max-width: 975px) {
    padding: 0px 50px 10px 50px;
    border-radius: 16px;
    border: 1px solid #dee2e7;
  }
  background-color: #fff;
  padding: 0px 34px 10px 34px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
`;
const Image = styled.div`
  > img {
  }
  /* position: relative; */
`;
const Name = styled.p`
  color: var(--HEading, #222);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 112.5% */
  margin-top: 12px;
`;
const Price = styled.p`
  border-bottom: 1px solid #ededed;
  margin-top: 10px;
  color: var(--HEading, #222);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 112.5% */
`;
const Discount = styled.p`
  margin-top: 10px;
  color: #249b3e;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
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
  @media screen and (max-width: 975px) {
    width: 53px;
    height: 57px;
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
