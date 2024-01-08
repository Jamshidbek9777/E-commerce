import styled from "styled-components";

export const Container = styled.div`
     margin: auto;
     user-select: none;
     max-width: 1240px;
     padding: 0 20px;
`;
export const Wrapper = styled.div`
     width: 100%;
     border: 1px solid #dee2e7;
     background-color: #fff;
     border-radius: 6px;
     height: 100%;
`;
export const Mainpage = styled.div`
     display: flex;
     justify-content: space-between;
     gap: 20px;
     @media screen and (max-width: 1120px) {
          display: flex;
          flex-direction: column;
     }
`;
export const Card = styled.div``;
export const CartCard = styled.div`
     justify-content: space-between;
     padding: 28px 25px;
     display: flex;
     @media screen {
          padding: 8px 10px;
     }
`;
export const LeftSide = styled.div`
     display: flex;
     > div {
          display: flex;
     }
     @media screen and (max-width: 725px) {
          display: flex;
          flex-direction: column;
     }
`;
export const RightSide = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     text-align: center;
     user-select: none;
     @media screen and (max-width: 535px) {
          flex-direction: column;
          justify-content: space-between;
     }
`;
export const Description = styled.div`
     /* display: flex; */
     margin-left: 20px;
     max-width: 250px;
     width: 100%;
`;
export const Name = styled.div`
     color: var(--dark, #1c1c1c);
     font-size: 16px;
     font-style: normal;
     font-weight: 500;
     line-height: 22px;
     margin-bottom: 10px;
     @media screen and (max-width: 535px) {
          font-size: 14px;
     }
`;
export const Image = styled.div`
     display: flex;
     width: 80px;
     height: 80px;
     padding: 4.978px 8.711px 5.289px 8.711px;
     justify-content: center;
     border: 1px solid #efefef;
     border-radius: 6px;
     background-color: #f7f7f7;
`;
export const Details = styled.div`
     display: flex;
     gap: 5px;
     color: var(--gray-500, #8b96a5);
     font-size: 16px;
     font-style: normal;
     font-weight: 400;
     line-height: 24px;
     letter-spacing: -0.2px;
     @media screen and (max-width: 535px) {
          font-size: 14px;
     }
`;
export const Seller = styled.div`
     display: flex;
     color: var(--gray-500, #8b96a5);
     font-size: 16px;
     font-style: normal;
     font-weight: 400;
     line-height: 24px;
     letter-spacing: -0.2px;
`;
export const Price = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     text-align: center;
     user-select: none;
     @media screen and (max-width: 535px) {
          color: #fff;
          height: 30px;
          font-size: 14px;
          padding: 0px 15px;
          border-radius: 6px;
          background: var(
               --primary-gradient,
               linear-gradient(180deg, #127fff 0%, #0067ff 100%)
          );
     }
`;

export const Buttons = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     /* flex-direction: column; */
     margin: 0px 50px;
     gap: 20px;
     @media screen and (max-width: 1120px) {
          display: flex;
          flex-direction: column;
     }
     @media screen and (max-width: 720px) {
          display: flex;
          flex-direction: row;
          justify-content: start;
          align-items: start;
          margin: 0;
          margin-top: 10px;
     }
`;
export const RemoveButton = styled.button`
     display: flex;
     height: 40px;
     padding: 0px 15px;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     border-radius: 10px;
     border: 1px solid var(--gray-300, #dee2e7);
     background: var(--white, #fff);
     box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);
     color: #fa3434;
     text-align: center;
     font-size: 15px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     cursor: pointer;
     @media screen and (max-width: 535px) {
          font-size: 13px;
          padding: 0 8px;
          height: 30px;
     }
`;
export const SaveButton = styled.button`
     display: inline-flex;
     height: 40px;
     padding: 0px 15px;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     gap: 10px;
     flex-shrink: 0;
     border-radius: 10px;
     border: 1px solid var(--gray-300, #dee2e7);
     background: var(--white, #fff);
     box-shadow: 0px 1px 2px 0px rgba(56, 56, 56, 0.08);
     color: #0d6efd;
     text-align: center;
     font-size: 15px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     cursor: pointer;
     @media screen and (max-width: 535px) {
          font-size: 13px;
          padding: 0 8px;
          height: 30px;
     }
`;
export const Amount = styled.div`
     margin-right: 10px;
     user-select: none;
     display: flex;
     align-items: center;
     justify-content: center;
     /* width: 70px; */
     border-radius: 4px;
     @media screen and (max-width: 535px) {
     }
     > button {
          font-size: 12px;
          border: none;
          background-color: #fff;
          margin: 0 5px;
          user-select: none;
          display: flex;
          align-items: center;
          justify-content: center;
     }
`;

// empty cart page

export const NoItem = styled.div`
     height: 50vh;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
`;
export const Text = styled.div`
     margin-bottom: 20px;
`;
export const Button = styled.div`
     > button {
          padding: 10px 20px;
          border-radius: 10px;
          border: none;
          outline: none;
          background: var(
               --primary-gradient,
               linear-gradient(180deg, #127fff 0%, #0067ff 100%)
          );
          color: #fff;
          font-size: 14px;
     }
`;

// Checkout

export const Checkout = styled.div`
     display: flex;
     flex-direction: column;
     height: 100%;
     background-color: #fff;
     border-radius: 16px;
     gap: 12px;
`;

export const Coupon = styled.div`
     width: 280px;
     height: 110px;
     border: 1px solid #dee2e7;
     border-radius: 6px;
     @media screen and (max-width: 1120px) {
          width: 100%;
          max-width: 400px;
     }
`;
export const TotalPrice = styled.div`
     @media screen and (max-width: 1120px) {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 400px;
     }
     width: 280px;
     height: 302px;
     border: 1px solid #dee2e7;
     border-radius: 6px;
     > div {
          > h4 {
               display: flex;
               margin-top: 23px;
               gap: 147px;
               margin: 23px 20px;
               color: var(--dark, #1c1c1c);
               font-size: 16px;
               font-style: normal;
               font-weight: 600;
               line-height: normal;
          }
          > button {
               display: flex;
               width: 248px;
               height: 54px;
               padding: 0px 20px;
               flex-direction: column;
               justify-content: center;
               align-items: center;
               gap: 10px;
               flex-shrink: 0;
               border-radius: 10px;
               background: var(--green, #00b517);
               outline: none;
               border: none;
               color: #fff;
               color: var(--white, #fff);
               text-align: center;
               font-size: 18px;
               font-style: normal;
               font-weight: 500;
               line-height: normal;
               margin-left: 17px;
          }
          > div {
               border-bottom: 1px solid #e4e4e4;
               margin: 0 20px;
               display: flex;
               gap: 100px;
               > h3 {
                    font-size: 20px;
               }
               > div {
                    margin: 20px 0px 20px 0px;
                    > h4 {
                         font-weight: 400;
                         color: var(--gray-600, #505050);
                         font-size: 16px;
                         font-style: normal;
                         font-weight: 400;
                         line-height: 24px; /* 150% */
                         letter-spacing: -0.2px;
                    }
               }
          }
     }
`;

export const HaveACoupon = styled.p`
     display: flex;
     justify-content: center;
     align-items: center;
     color: var(--gray-600, #505050);
     font-size: 16px;
     font-style: normal;
     font-weight: 400;
     line-height: normal;
     margin: 20px 16px 9px 16px;
`;

export const InputContainer = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     margin: 0px 17px;
`;
export const Input = styled.input`
     height: 40px;
     width: 162px;
     padding: 10px;
     outline: none;
     background-color: #fff;
     border: 1px solid #dee2e7;
     border-radius: 10px 0 0 10px;
`;
export const Apply = styled.button`
     color: var(--primary, #0d6efd);
     text-align: center;
     font-size: 16px;
     font-style: normal;
     font-weight: 500;
     line-height: normal;
     width: 83px;
     height: 40px;
     border-left: none;
     outline: none;
     background-color: #fff;
     border: 1px solid #dee2e7;
     color: #0d6efd;
     border-radius: 0 10px 10px 0;
`;
