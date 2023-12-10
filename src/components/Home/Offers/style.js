import styled from "styled-components";

const Container = styled.div`
  /* border: 1px solid red; */
  background-color: #f7fafc;
  padding: 0px 160px 20px 160px;
  @media screen and (max-width: 975px) {
    display: none;
  }
`;
const OffersContainer = styled.div`
  display: flex;
  height: 240px;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 6px;
  border: 2px solid #dee2e7;
  @media screen and (max-width: 975px) {
    flex-direction: column;
    height: 345px;
  }
`;
const Products = styled.div`
  > .headphone {
    @media screen and (max-width: 1700px) {
      display: none;
    }
    @media screen and (max-width: 975px) {
      display: flex;
    }
  }
  > .phone {
    @media screen and (max-width: 1700px) {
      margin-right: 10px;
    }
    @media screen and (max-width: 1516px) {
      display: none;
    }
  }
  > .gaming {
    @media screen and (max-width: 1516px) {
      margin-right: 10px;
    }
    @media screen and (max-width: 1330px) {
      display: none;
    }
  }
  > .camera {
    @media screen and (max-width: 1330px) {
      margin-right: 10px;
    }
    @media screen and (max-width: 1137px) {
      display: none;
    }
  }
  > .notebook {
    @media screen and (max-width: 1137px) {
      display: none;
      margin-right: 10px;
    }
  }
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProductCard = styled.div`
  transition: 0.2s all ease-in-out;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: scale(1.01);
  }
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  width: 179px;
  height: 230px;
  border-radius: 6px;
  flex-shrink: 0;
  border: 1px solid #dee2e7;
  > h5 {
    margin-top: 8px;
    color: var(--dark, #1c1c1c);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
  }
  > p {
    display: inline-flex;
    height: 28px;
    padding: 3px 13px 4px 13px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 29px;
    background: #ffe3e3;
    color: #eb001b;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.2px;
    margin-top: 7px;
  }
  > img {
    display: flex;
    width: 140px;
    height: 140px;
    padding: 6.222px 13.689px 5.6px 13.689px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
  > img.watch {
    display: flex;
    width: 140px;
    height: 140px;
    padding: 9.333px 19.289px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
  > img.notebook {
    width: 140px;
    height: 140px;
    flex-shrink: 0;
  }
  > img.camera {
    display: flex;
    width: 140px;
    height: 140px;
    padding: 24.267px 4.978px 24.267px 5.6px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
  > img.gaming {
    display: flex;
    width: 140px;
    height: 140px;
    padding: 6.222px 13.689px 5.6px 13.689px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
  > img.phone {
    display: flex;
    width: 140px;
    height: 140px;
    padding: 7.467px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
  > img.headphone {
    display: flex;
    width: 140px;
    height: 140px;
    padding: 7.467px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }
`;
const Time = styled.div`
  @media screen and (max-width: 975px) {
    display: flex;
  }
  width: 460px;
  padding: 20px 20px;

  > h2 {
    color: var(--base-color-dark, #1c1c1c);
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 28px; /* 140% */
    letter-spacing: -0.2px;
  }
  > p {
    color: var(--gray-500, #8b96a5);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const TimeSection = styled.div`
  @media screen and (max-width: 975px) {
    margin-top: 0;
  }
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;
const Days = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 45px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--base-color-gray-800, #606060);
  > p {
    font-weight: 700;
  }
  > h5 {
    font-weight: 300;
    font-size: 12px;
  }
`;
const Hours = styled.div`
  color: #fff;
  align-items: center;
  text-align: center;
  width: 45px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--base-color-gray-800, #606060);
  > p {
    font-weight: 700;
  }
  > h5 {
    font-size: 12px;
    font-weight: 300;
  }
`;
const Min = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 45px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--base-color-gray-800, #606060);
  > p {
    font-weight: 700;
    font-size: 16px;
  }
  > h5 {
    font-weight: 300;
  }
`;
const Sec = styled.div`
  color: #fff;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 45px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--base-color-gray-800, #606060);
  > p {
    font-weight: 700;
  }
  > h5 {
    font-weight: 300;
    font-size: 12px;
  }
`;
export {
  Container,
  OffersContainer,
  Products,
  Time,
  ProductCard,
  TimeSection,
  Days,
  Hours,
  Min,
  Sec,
};
