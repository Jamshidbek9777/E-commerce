import styled from "styled-components";
const Container = styled.div`
     margin: auto;
     max-width: 1240px;
     padding: 0 20px;
`;
const OffersContainer = styled.div`
     > h1 {
          font-size: 24px;
          margin-top: 50px;
          color: var(--Text, #666);
          font-size: 24px;
          font-style: normal;
          font-weight: 600;
     }
     /* display: flex;
     flex-direction: column;
     @media screen and (max-width: 820px) {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
     } */
     /* align-items: center; */
     /* text-align: center; */
`;
export const Line = styled.div`
     width: 100%;
     height: 2px;
     background-color: #ededed;
     margin-top: 10px;
     border-radius: 100px;
`;
const Products = styled.div`
     margin: 1rem 0;
     display: grid;
     grid-template-columns: repeat(5, 1fr);
     gap: 1rem;
     @media screen and (max-width: 940px) {
          grid-template-columns: repeat(3, 1fr);
     }
     @media screen and (max-width: 680px) {
          grid-template-columns: repeat(2, 1fr);
     }
`;
const ProductCard = styled.div`
     position: relative;
     margin-top: 20px;
     transition: 0.2s all ease-in-out;
     &:hover {
          /* border: 1px solid #008ecc; */
          /* box-shadow:  0 4px 8px rgba(0, 0, 0, 0.1); */
     }
     max-width: 300px;
     width: 100%;
     font-size: 0.9rem;
     border-radius: 16px;
`;

const Description = styled.div`
     max-width: 300px;
     width: 100%;
     background-color: #fff;
     display: flex;
     width: 100%;
     justify-content: space-between;
     border-bottom-left-radius: 16px;
     border-bottom-right-radius: 16px;
     margin-top: 20px;
`;
const Image = styled.div`
     width: 232px;
     width: 100%;
     overflow: hidden;
     border-radius: 16px;
     > img {
          overflow: hidden;
          transition: 0.3s all ease-in-out;
          &:hover {
               transform: scale(1.04);
          }
          object-position: center;
          width: 100%;
          border-radius: 16px;
     }
`;
const Name = styled.p`
     display: -webkit-box;
     -webkit-line-clamp: 2;
     -webkit-box-orient: vertical;
     overflow: hidden;
     text-overflow: ellipsis;
     color: var(--HEading, #222);
     font-size: 12.8px;
     margin-top: 12px;
     @media screen and (max-width: 512px) {
          font-size: 14px;
     }
`;
const Price = styled.p`
     /* margin-top: 10px; */
     color: var(--HEading, #222);
     font-size: 14px;
     font-style: normal;
     font-weight: 600;
     @media screen and (max-width: 512px) {
          font-size: 14px;
     }
`;
const Discount = styled.p`
     margin-top: 10px;
     @media screen and (max-width: 512px) {
          margin-top: 0;
     }
     color: #249b3e;
     font-size: 16px;
     font-style: normal;
     font-weight: 400;
     line-height: 18px;
     @media screen and (max-width: 512px) {
          font-size: 14px;
     }
`;

const DiscountPrice = styled.span`
     display: flex;
     align-items: center;
     justify-content: center;
     text-align: center;
     border-radius: 0px 16px;
     background: var(--Primary, #008ecc);
     color: #fff;
     position: absolute;
     right: 0.2px;
     width: 40px;
     height: 45px;
     flex-shrink: 0;
     font-size: 12px;
     @media screen and (max-width: 512px) {
          width: 35px;
          height: 40px;
          font-size: 11px;
     }
`;
export const Icon = styled.div`
>img{
     width: 17px
}
`;
export {
     Container,
     OffersContainer,
     Products,
     ProductCard,
     Description,
     Image,
     Name,
     Price,
     Discount,
     DiscountPrice,
};
