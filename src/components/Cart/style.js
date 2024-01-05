import styled from "styled-components";

export const Container = styled.div`
     padding: 0 160px;
     /* display: flex; */
     background-color: #f7fafc;
`;
export const Wrapper = styled.div`
     width: 100%;
     border: 1px solid #dee2e7;
     height: 70vh;
     background-color: #fff;
     border-radius: 16px;
`;
export const Mainpage = styled.div`
     display: flex;
     justify-content: space-between;
     gap: 20px;
`;
export const Card = styled.div``;
export const CartCard = styled.div`
     justify-content: space-between;
     padding: 28px 25px;
     display: flex;
`;
export const LeftSide = styled.div`
     display: flex;
`;
export const RightSide = styled.div``;
export const Description = styled.div`
     margin-left: 20px;
`;
export const Name = styled.div`
     color: var(--dark, #1c1c1c);
     font-size: 16px;
     font-style: normal;
     font-weight: 500;
     line-height: 22px;
     margin-bottom: 10px;
     /* width: 462px; */
`;
export const Image = styled.div`
     display: flex;
     width: 80px;
     height: 80px;
     padding: 4.978px 8.711px 5.289px 8.711px;
     justify-content: center;
     border: 1px solid #e0e0e0;
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
export const Price = styled.div``;
export const Checkout = styled.div`
     width: 280px;
     height: 110px;
     flex-shrink: 0;
     background-color: #fff;
     border: 1px solid #dee2e7;
     border-radius: 16px;
`;
export const Buttons = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
     /* flex-direction: column; */
     margin: 0px 100px;
     gap: 20px;
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
`;
