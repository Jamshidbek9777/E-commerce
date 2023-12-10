import React from "react";
import {
  Container,
  OffersContainer,
  Time,
  Products,
  ProductCard,
  TimeSection,
  Days,
  Hours,
  Min,
  Sec,
} from "./style";
import Watch from "../../../assets/imgs/smartwatch.png";
import Notebook from "../../../assets/imgs/7.png";
import Camera from "../../../assets/imgs/gopro.png";
import GamingHeadphones from "../../../assets/imgs/gamingheadphoes.png";
import Phone from "../../../assets/imgs/phone.png";
import Headphones from "../../../assets/imgs/headphones.png";

export const Offers = () => {
  return (
    <Container>
      <OffersContainer>
        <Time>
          <div>
            {" "}
            <h2>Deals and Offers</h2>
            <p>Hygiene equipments</p>
          </div>
          <TimeSection>
            <Days>
              <p>02</p> <h5>Days</h5>{" "}
            </Days>
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
            <img className="watch" src={Watch} alt="" />
            <h5>Smart watches</h5>
            <p>-25%</p>
          </ProductCard>
          <ProductCard className="notebook">
            <img className="notebook" src={Notebook} alt="" />
            <h5>Laptops</h5>
            <p>-15%</p>
          </ProductCard>
          <ProductCard className="camera">
            <img className="camera" src={Camera} alt="" />
            <h5>GoPro Cameras</h5>
            <p>-45%</p>
          </ProductCard>
          <ProductCard className="gaming">
            <img className="gaming" src={GamingHeadphones} alt="" />
            <h5>Gaming Headphones</h5>
            <p>-55%</p>
          </ProductCard>
          <ProductCard className="phone">
            <img className="phone" src={Phone} alt="" />
            <h5>Phones</h5>
            <p>-35%</p>
          </ProductCard>
          <ProductCard className="headphone">
            <img className="headphone" src={Headphones} alt="" />
            <h5>Headphones</h5>
            <p>-25%</p>
          </ProductCard>
        </Products>
      </OffersContainer>
    </Container>
  );
};
export default Offers;
