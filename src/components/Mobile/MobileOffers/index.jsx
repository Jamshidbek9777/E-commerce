import React from "react";
import {
  Container,
  OffersContainer,
  Time,
  TimeSection,
  Hours,
  Min,
  Sec,
  Products,
  ProductCard,
} from "./style";
import "../../../index.css";
// import Watch from "../../../assets/imgs/smartwatch.png";
import Notebook from "../../../assets/imgs/7.png";
// import GamingHeadphones from "../../../assets/imgs/gamingheadphoes.png";
// import Phone from "../../../assets/imgs/phone.png";
// import Headphones from "../../../assets/imgs/headphones.png";
export const MobileOffers = () => {
  return (
    <Container>
      <OffersContainer>
        <Time>
          <div>
            <h2>Deals and offers</h2>
            <p>Electronic equipments</p>
          </div>
          <TimeSection>
            <Hours>
              <p>08</p> <h5>Hours</h5>{" "}
            </Hours>
            <Min>
              <p>22</p> <h5>Min</h5>{" "}
            </Min>
            <Sec>
              <p>32</p> <h5>Sec</h5>{" "}
            </Sec>
          </TimeSection>
        </Time>
        <Products>
          <ProductCard>
            <img className="watch" src={Notebook} alt="" />
            <h5>Laptops</h5>
            <p>-25%</p>
          </ProductCard>
          <ProductCard className="notebook">
            <img className="notebook" src={Notebook} alt="" />
            <h5>Laptops</h5>
            <p>-15%</p>
          </ProductCard>

          <ProductCard className="headphone">
            <img className="headphone" src={Notebook} alt="" />
            <h5>Headphones</h5>
            <p>-25%</p>
          </ProductCard>
          <ProductCard className="gaming">
            <img className="gaming" src={Notebook} alt="" />
            <h5>Headphones</h5>
            <p>-55%</p>
          </ProductCard>
          <ProductCard className="phone">
            <img className="phone" src={Notebook} alt="" />
            <h5>Phones</h5>
            <p>-35%</p>
          </ProductCard>
        </Products>
      </OffersContainer>
    </Container>
  );
};
export default MobileOffers;
