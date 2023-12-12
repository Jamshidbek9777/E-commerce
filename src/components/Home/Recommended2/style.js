import styled from "styled-components";

const Container = styled.div`
  background-color: #f7fafc;
  padding: 0px 160px 20px 160px;
  @media screen and (max-width: 975px) {
    display: none;
  }
`;
const RecommendedContainer = styled.div`
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e0e0e0;
`;
const LeftContainer = styled.div`
  position: relative;
  > img {
    /* background-color: #ffe8ba66; */
  }
  > p {
    top: 25px;
    left: 26px;
    color: var(--base-color-dark, #1c1c1c);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: -0.2px;
    position: absolute;
  }
  > button {
    position: absolute;
    top: 100px;
    left: 26px;
    border-radius: 6px;
    border: 1px solid #fff;
    color: black;
    background: var(--white, #fff);
    display: inline-flex;
    height: 40px;
    padding: 0px 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);
  }
`;

const RightContainer = styled.div``;
const Cards = styled.div`
  margin-left: 180px;
  display: grid;
  /* gap: 1px; */
  /* margin-right: 10px; */
  grid-template-columns: repeat(5, 1fr);
`;
const Card = styled.div`
  border: 1px solid #e0e0e0;
  width: 227px;
  height: 127px;
  flex-shrink: 0;
  display: flex;
  > img {
    width: 82px;
    height: 82px;
    margin-left: 35px;
    margin-top: 35px;
  }
  > div {
    > h3 {
      color: var(--base-color-dark, #1c1c1c);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      padding: 20px 0px 0px 16px;
    }
    > p {
      color: var(--gray-500, #8b96a5);
      padding: 5px 0px 0px 16px;
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
export {
  Container,
  RecommendedContainer,
  LeftContainer,
  RightContainer,
  Cards,
  Card,
};
