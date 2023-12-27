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
  display: flex;
  > h1 {
    font-size: 20px;
    margin-top: 50px;
    color: var(--Text, #666);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
  }
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  text-align: center;
`;
const Products = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const ProductCard = styled.div`
  display: flex;
  width: 132px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 25px;
  /* @media screen and (max-width: 975px) {
    position: relative;
    transition: 0.2s all ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 375px;
    height: 305px;
    border-radius: 16px;
    border: 1px solid #dee2e7;
  } */
`;

const Description = styled.div`
  @media screen and (max-width: 975px) {
    /* padding: 0px 50px 10px 50px; */
    border-radius: 16px;
    border: 1px solid #dee2e7;
  }
  background-color: #fff;
  padding: 7px 35px 10px 35px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50%;
  background-color: #f5f5f5;
  width: 132px;
  height: 132px;
  > img {
  }
`;
const Name = styled.p`
  color: var(--HEading, #222);
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;

export {
  Container,
  OffersContainer,
  Products,
  ProductCard,
  Description,
  Image,
  Name,
};
