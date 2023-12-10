import styled from "styled-components";

const Container = styled.div`
  display: none;
  @media screen and (max-width: 975px) {
    display: block;
    padding: 20px 160px;
    @media screen and (max-width: 930px) {
      padding: 20px 10px;
    }
    @media screen and (max-width: 620px) {
      padding: 20px 40px;
    }
  }
`;
const OffersContainer = styled.div``;
const Time = styled.div`
  display: flex;
  justify-content: space-between;
  > div {
    > h2 {
      color: var(--base-color-dark, #1c1c1c);
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 28px;
      letter-spacing: -0.2px;
    }
    > p {
      color: var(--gray-500, #8b96a5);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
const TimeSection = styled.div`
  display: flex;
  gap: 4px;
`;

const Hours = styled.div`
  color: #8b96a5;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 45px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--base-color-gray-800, #eff2f4);
  > p {
    font-weight: 700;
  }
  > h5 {
    font-weight: 300;
    font-size: 12px;
  }
`;
const Min = styled.div`
  color: #8b96a5;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 45px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--base-color-gray-800, #eff2f4);
  > p {
    font-weight: 700;
  }
  > h5 {
    font-weight: 300;
    font-size: 12px;
  }
`;
const Sec = styled.div`
  color: #8b96a5;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 45px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--base-color-gray-800, #eff2f4);
  > p {
    font-weight: 700;
  }
  > h5 {
    font-weight: 300;
    font-size: 12px;
  }
`;
const Products = styled.div`
  display: flex;
  overflow: scroll;
  display: flex;
  margin-top: 20px;
  /* padding: 8px 13.374px 18px 14px; */
  border: 1px solid #dee2e7;
  border-radius: 6px;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const ProductCard = styled.div`
  width: 180px;
  height: 180px;
  padding: 0 20px;
  border-left: 1px solid #dee2e7;
  border-right: 1px solid #dee2e7;
  text-align: center;
  > img {
    width: 98px;
    height: 98px;
    /* height: 98px; */
  }
  > h5 {
    color: var(--dark, #1c1c1c);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.2px;
    margin-top: 8px;
  }
  > p {
    display: inline-flex;
    height: 28px;
    padding: 3px 13px 4px 13px;
    justify-content: center;
    align-items: center;
    text-align: center;
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
`;

export {
  Container,
  OffersContainer,
  Time,
  TimeSection,
  Hours,
  Min,
  Sec,
  Products,
  ProductCard,
};
