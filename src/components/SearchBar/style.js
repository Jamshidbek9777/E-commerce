import styled from "styled-components";

// SearchBar styles
const NavContainer = styled.div`
     display: flex;
     justify-content: space-between;
     margin: auto;
     max-width: 1240px;
     height: 86px;
     padding: 0 20px;
     z-index: 1000;
     position: relative;
     /* @media screen and (max-width: 930px) {
          padding: 10px 10px;
          border: none;
          position: relative;
     } */
`;
export const Line = styled.div`
     width: 100%;
     height: 2px;
     background-color: #ededed;
     margin-top: 10px;
     border-radius: 100px;
`;
const Middle = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
`;
const Input = styled.input`
     z-index: 1000;

     height: 40px;
     width: 400px;
     border-radius: 16px 0 0 16px;
     outline: none;
     display: flex;
     justify-content: center;
     text-align: center;
     border: 2px solid #0d6efd;
     transition: 0.5s all ease-in-out;

     @media screen and (max-width: 1120px) {
          width: 200px;
          text-align: center;
     }
     @media screen and (max-width: 850px) {
          display: flex;
          justify-content: center;
          width: 330px;
          height: 40px;
          width: 100%;
          border-radius: 5px;
          border: 1px solid #dee2e7;
          background-color: #eff2f4;
          text-align: center;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          outline: none;
     }
     @media screen and (max-width: 620px) {
          display: none;
     }
`;
const SearchButton = styled.button`
     background-color: #0d6efd;
     height: 40px;
     width: 80px;
     border: none;
     border-radius: 0 16px 16px 0;
     color: #fff;

     @media screen and (max-width: 850px) {
          display: none;
     }
`;
const RightSide = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     height: 86px;
     gap: 40px;
     @media screen and (max-width: 850px) {
          display: none;
     }
`;
const LikedContainer = styled.a`
     justify-content: center;
     align-items: center;
     text-align: center;
`;
const CartContainer = styled.a`
     justify-content: center;
     align-items: center;
     text-align: center;
`;
const ProfileContainer = styled.a`
     margin-left: 50px;
     justify-content: center;
     align-items: center;
     text-align: center;
`;

// Mobilescreens
const Mobile = styled.div`
     display: none;
     @media screen and (max-width: 850px) {
          display: flex;
          align-items: center;
          gap: 40px;
     }
     @media screen and (max-width: 620px) {
          gap: 20px;
     }
`;
const MobileProfile = styled.div`
     flex-direction: column;
     justify-content: center;
     align-items: center;
     text-align: center;
     /* padding-right: 20px; */
`;
const MobileCartContainer = styled.div`
     flex-direction: column;
     justify-content: center;
     align-items: center;
     text-align: center;
     padding-right: 20px;
`;
const MenuHam = styled.div`
     display: none;
     @media screen and (max-width: 620px) {
          display: flex;
          align-items: center;
          /* padding-left: 20px; */
          /* > svg {
               position: fixed;
               width: 20px;
               height: 20px;
          } */
     }
`;
const OuterHam = styled.div`
     display: flex;
     gap: 20px;
     > img {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 190px;
          padding: 1px 23.786px 1px 0px;
          align-items: center;
          gap: 6.214px;
          flex-shrink: 0;
     }
`;

export {
     NavContainer,
     Input,
     SearchButton,
     RightSide,
     LikedContainer,
     CartContainer,
     ProfileContainer,
     Mobile,
     Middle,
     MobileProfile,
     MobileCartContainer,
     MenuHam,
     OuterHam,
};
