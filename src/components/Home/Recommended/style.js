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
  grid-template-columns: repeat(5, 1fr);
`;
const Card = styled.div`
  width: 227px;
  height: 127px;
  flex-shrink: 0;
  border: 1px solid red;
`;
export {
  Container,
  RecommendedContainer,
  LeftContainer,
  RightContainer,
  Cards,
  Card,
};
