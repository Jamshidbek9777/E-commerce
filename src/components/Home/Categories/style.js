import styled from "styled-components";
const Main = styled.div`
  @media screen and (max-width: 700px) {
    padding: 0;
    background-color: #fff;
  }
  padding: 20px 160px;
  /* height: 100vh; */
  background-color: #f7fafc;
  transition: 0.5s all ease-in-out;
`;
const CategoriesContainer = styled.div`
  transition: 0.5s all ease-in-out;
  @media screen and (max-width: 700px) {
    padding: 0;
  }
  margin-top: 2px;
  padding: 17px 20px;
  display: flex;
  border-radius: 6px;
  border: 2px solid #dee2e7;
  background-color: #fff;
  justify-content: space-between;
  @media screen and (max-width: 1133px) {
    border: none;
    background-color: #f7fafc;
    justify-content: center;
  }
`;
const Categories = styled.div`
  @media screen and (max-width: 1133px) {
    display: none;
  }
  border: 1px solid #dee2e7;
  border-radius: 6px;
  > ul {
    @media screen and (max-width: 1430px) {
      padding: 20px 40px;
    }
    @media screen and (max-width: 1300px) {
      padding: 0px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #fff;
      border-radius: 6px;
    }
    &::-webkit-scrollbar-track {
      background-color: #fff;
    }

    &:hover::-webkit-scrollbar-thumb {
      background-color: #fff;
    }
    height: 100%;
    max-height: 352px;
    overflow-y: scroll;
    list-style: none;
    > li {
      color: #505050;
      padding: 7px;
      &:hover {
        border-radius: 6px;
        cursor: pointer;
        color: black;
        background-color: #e3f0ff;
      }
    }
  }
`;
const ImagePlace = styled.div`
  margin-top: 2px;
  position: relative;
  background-color: #fff;
  > img {
    @media screen and (max-width: 700px) {
      /* margin-top: 20px; */
      width: 100%;
      height: auto;
    }
    border-radius: 6px;
  }
  > p {
    @media screen and (max-width: 560px) {
      position: absolute;
      top: 25px;
      left: 26px;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    position: absolute;
    top: 56px;
    left: 44px;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    > span {
      @media screen and (max-width: 560px) {
        font-size: 18px;
        font-weight: 700;
      }
      color: #1c1c1c;
      font-size: 32px;
      font-weight: 700;
      line-height: normal;
    }
  }
  > button {
    position: absolute;
    top: 146px;
    margin-top: 17px;
    display: inline-flex;
    left: 44px;
    padding: 0px 16px;
    border: none;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 40px;
    border-radius: 5px;
    color: #1c1c1c;
    background-color: #fff;
    cursor: pointer;
  }
`;
const Aside = styled.div`
  @media screen and (max-width: 1430px) {
    display: none;
  }
  margin: 2px 0px 0px 0px;
  /* padding: 20px 20px; */
  display: flex;
  flex-direction: column;
`;
const Join = styled.div`
  background-color: #e3f0ff;
  width: 200px;
  height: 150px;
  margin: 0px 0px 10px 0px;
  border: none;
  border-radius: 6px;
  > div {
    display: flex;
    > p {
      margin-top: 10px;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    > img {
      margin: 14px 10px;
      border-radius: 50%;
    }
  }

  > button {
    display: flex;
    width: 180px;
    height: 30px;
    padding: 0px 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 6px;
    background: var(
      --primary-gradient,
      linear-gradient(180deg, #127fff 0%, #0067ff 100%)
    );
    cursor: pointer;
    border: none;
    color: #fff;
    margin-left: 10px;
  }
`;
const Login = styled.button`
  margin-top: 7px;
  display: flex;
  width: 180px;
  height: 30px;
  padding: 0px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 6px;
  cursor: pointer;
  border: none;
  color: #0d6efd !important;
  border: 1px solid #dee2e7 !important;
  margin-left: 10px;
  background: #fff !important;
`;
const Offer = styled.div`
  width: 200px;
  height: 95px;
  background-color: #f38332;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  padding: 10px 40px 16px 16px;
  margin: 0px 0px 10px 0px;
`;
const Quotes = styled.div`
  width: 200px;
  height: 95px;
  color: #fff;
  padding: 10px 40px 16px 16px;
  background-color: #55bdc3;
  border-radius: 6px;
`;
const RightContainer = styled.div`
  @media screen and (max-width: 1646px) {
    display: none;
  }
  border-radius: 6px;
  border: 1px solid #8b96a5;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 362px;
  > img {
    border-radius: 6px;
    width: 193px;
    height: 193px;
  }
  p {
    margin-top: 14px;
    margin-left: 10px;
  }
  > h3 {
    color: #8b96a5;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: -0.2px;
    margin-left: 10px;
  }
  > button {
    border: none;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    font-size: 20px;
    text-align: center;
    flex-shrink: 0;
    border-radius: 6px;
    background: var(
      --primary-gradient,
      linear-gradient(180deg, #127fff 0%, #0067ff 100%)
    );
    color: #fff;
    width: 180px;
    height: 30px;
    padding: 0px 10px;
    font-size: 15px;
    text-align: center;
    align-items: center;
    margin: auto;
  }
`;
const LeftContainer = styled.div`
  @media screen and (max-width: 1700px) {
    display: none;
  }
  border-radius: 6px;
  border: 1px solid #8b96a5;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 362px;
  > img {
    border-radius: 6px;
    width: 150px;
    height: 150px;
    margin: auto;
  }
  p {
    margin-top: 14px;
    margin-left: 10px;
  }
  > h3 {
    color: #8b96a5;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 150% */
    letter-spacing: -0.2px;
    margin-left: 10px;
  }
  > button {
    border: none;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    font-size: 20px;
    text-align: center;
    flex-shrink: 0;
    border-radius: 6px;
    background: var(
      --primary-gradient,
      linear-gradient(180deg, #127fff 0%, #0067ff 100%)
    );
    color: #fff;
    width: 180px;
    height: 30px;
    padding: 0px 10px;
    font-size: 15px;
    text-align: center;
    align-items: center;
    margin: auto;
  }
`;
export {
  Main,
  CategoriesContainer,
  Categories,
  ImagePlace,
  Aside,
  Join,
  Offer,
  Quotes,
  Login,
  RightContainer,
  LeftContainer,
};