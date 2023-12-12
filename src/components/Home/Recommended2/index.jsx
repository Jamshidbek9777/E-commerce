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
import Chair from "../../../assets/imgs/chair.png";
export const Recommended2 = () => {
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
              <Card>
                <div>
                  <h3>Soft chairs</h3>
                  <p>From 19$</p>
                </div>
                <img src={Chair} alt="" />
              </Card>
              <Card>
                <div>
                  <h3>Soft chairs</h3>
                  <p>From 19$</p>
                </div>
                <img src={Chair} alt="" />
              </Card>
              <Card>
                {" "}
                <div>
                  <h3>Soft chairs</h3>
                  <p>From 19$</p>
                </div>
                <img src={Chair} alt="" />
              </Card>
              <Card>
                {" "}
                <div>
                  <h3>Soft chairs</h3>
                  <p>From 19$</p>
                </div>
                <img src={Chair} alt="" />
              </Card>
              <Card>
                {" "}
                <div>
                  <h3>Soft chairs</h3>
                  <p>From 19$</p>
                </div>
                <img src={Chair} alt="" />
              </Card>
              <Card>
                <div>
                  <h3>Soft chairs</h3>
                  <p>From 19$</p>
                </div>
                <img src={Chair} alt="" />
              </Card>
              <Card>
                <div>
                  <h3>Soft chairs</h3>
                  <p>From 19$</p>
                </div>
                <img src={Chair} alt="" />
              </Card>
              <Card>
                <div>
                  <h3>Soft chairs</h3>
                  <p>From 19$</p>
                </div>
                <img src={Chair} alt="" />
              </Card>
              <Card>
                <div>
                  <h3>Soft chairs</h3>
                  <p>From 19$</p>
                </div>
                <img src={Chair} alt="" />
              </Card>
              <Card>
                <div>
                  <h3>Soft chairs</h3>
                  <p>From 19$</p>
                </div>
                <img src={Chair} alt="" />
              </Card>
            </Cards>
          </RightContainer>
        </RecommendedContainer>
      </Container>
    </div>
  );
};
export default Recommended2;
