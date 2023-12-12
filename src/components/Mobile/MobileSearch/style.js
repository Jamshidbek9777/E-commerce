import styled from "styled-components";

const MobileSearchContainer = styled.div`
  @media screen and (max-width: 620px) {
    display: flex;
    justify-content: center;
    padding: 0px 30px;
    position: relative;
  }
`;
const MobileInput = styled.input`
  display: none;
  @media screen and (max-width: 620px) {
    display: flex;
    justify-content: center;
    width: 330px;
    height: 40px;
    width: 100%;
    border-radius: 16px;
    border: 1px solid #dee2e7;
    background-color: #eff2f4;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    outline: none;
  }
`;
const SeachIcon = styled.img`
  display: none;
  @media screen and (max-width: 620px) {
    display: flex;
    position: absolute;
    top: 50%;
    left: 40px;
    transform: translateY(-50%);
    cursor: pointer;
  }
`;
export { MobileSearchContainer, MobileInput, SeachIcon };
