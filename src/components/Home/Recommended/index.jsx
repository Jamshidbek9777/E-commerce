import React from "react";
import {
  Container,
  RecommendedContainer,
  LeftContainer,
  RightContainer,
  Cards,
  Card,
} from "./style";
import LeftImg from "../../../assets/imgs/3.png";
export const Recommended = () => {
  return (
    <div>
      <Container>
        <RecommendedContainer>
          <LeftContainer>
            <img src={LeftImg} alt="" />
            <p>
              Home and <br /> Outdoor
            </p>
            <button>Source now</button>
          </LeftContainer>
          <RightContainer>
            <Cards>
              <Card>1</Card>
              <Card>1</Card>
              <Card>1</Card>
              <Card>1</Card>
              <Card>1</Card>
              <Card>1</Card>
              <Card>1</Card>
              <Card>1</Card>
              <Card>1</Card>
              <Card>1</Card>
            </Cards>
          </RightContainer>
        </RecommendedContainer>
      </Container>
    </div>
  );
};
export default Recommended;
