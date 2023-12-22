import styled from "styled-components";

const Container = styled.div`
  display: none;
  @media screen and (max-width: 820px) {
    display: block;
    width: 100%;
    background-color: #f7fafc;
    padding: 20px 160px 20px 160px;
    @media screen and (max-width: 975px) {
      padding: 20px 40px 20px 40px;
    }
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
  text-align: center;
`;
const Products = styled.div``;
const ProductCard = styled.div`
  position: relative;
  margin-top: 20px;
  transition: 0.2s all ease-in-out;
  display: flex;
  width: 132px;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 975px) {
    position: relative;
    transition: 0.2s all ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 375px;
    height: 305px;
    border-radius: 16px;
  }
`;

const Description = styled.div`
  @media screen and (max-width: 975px) {
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 20px;
    border-radius: 16px;
    border: 1px solid #dee2e7;
    border-radius: 16px;
  }
  background-color: #fff;
  padding: 0px 30px 10px 30px;
  border-radius: 16px;
`;
const Image = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50%;
  /* border: 1px solid black; */
  background-color: #f5f5f5;
  width: 132px;
  height: 132px;
  > img {
    /* width: 92px;
    height: 92px; */
  }
`;
const Name = styled.p`
  color: var(--HEading, #222);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 112.5% */
  margin-top: 12px;
`;
const LeftArrow = styled.div`
  position: absolute;
  top: 120px;
  padding: 15px;
  border-radius: 50%;
  background-color: #fff;
`;
const RightArrow = styled.div`
  transform: rotate(180deg);
  position: absolute;
  top: 120px;
  right: 1px;
  padding: 15px;
  border-radius: 50%;
  background-color: #fff;
`;
export {
  Container,
  OffersContainer,
  Products,
  ProductCard,
  Description,
  Image,
  Name,
  LeftArrow,
  RightArrow,
};
