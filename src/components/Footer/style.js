import styled from "styled-components";

export const Container = styled.div`
     max-width: 1240px;
     margin: auto;
     padding: 0 20px;
`;
export const Main = styled.div`
     display: flex;
     justify-content: space-between;
     margin-bottom: 40px;

     @media screen and (max-width: 1108px) {
          display: block;
     }
     @media screen and (max-width: 975px) {
          padding: 0px 20px;
     }
`;
export const Secondary = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     border-top: 1px solid var(--gray-300, #dee2e7);
     background: var(--gray-200, #eff2f4);
     padding: 0px 160px;
     height: 64px;
     @media screen and (max-width: 975px) {
          padding: 0px 20px;
          border-radius: 16px;
          margin-bottom: 10px;
     }
`;
export const Socials = styled.div`
     margin-right: 25px;
     width: 300px;
     > img {
          width: 150px;
          height: 46px;
          margin-top: 40px;
     }
     > p {
          color: var(--gray-600, #505050);
          font-feature-settings: "clig" off, "liga" off;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 24px;
          letter-spacing: -0.2px;
          margin-top: 15px;
     }
`;
export const Middle = styled.div`
     display: flex;
     gap: 100px;
     margin-top: 40px;
     @media screen and (max-width: 1500px) {
          gap: 70px;
     }
     @media screen and (max-width: 625px) {
          gap: 20px;
     }
`;
export const Title = styled.h1`
     margin-bottom: 10px;
     color: var(--dark, #1c1c1c);
     font-size: 20px;
     font-style: normal;
     font-weight: 500;
     line-height: 22px;
     @media screen and (max-width: 1500px) {
          font-size: 16px;
     }
     @media screen and (max-width: 625px) {
          font-size: 12px;
     }
`;
export const AppStore = styled.div`
     margin-top: 40px;
     margin-left: 25px;
     @media screen and (max-width: 1108px) {
          margin-left: 0;
     }
     > h1 {
          color: var(--dark, #1c1c1c);
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 22px;
          margin-bottom: 15px;
     }
`;
export const Links = styled.div`
     margin-top: 15px;
     gap: 10px;
     display: flex;
`;
export const Store = styled.div``;
export const Playmarket = styled.div``;
export const Tags = styled.p`
     color: var(--gray-500, #8b96a5);
     font-size: 16px;
     font-style: normal;
     font-weight: 400;
     line-height: 24px; /* 150% */
     letter-spacing: -0.2px;
     margin-bottom: 3px;
     @media screen and (max-width: 625px) {
          font-size: 12px;
     }
`;
export const Wrapper = styled.div``;
