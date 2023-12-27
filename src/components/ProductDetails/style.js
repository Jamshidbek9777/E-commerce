import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin: auto;
  width: 1600px;
  height: 580px;
  margin-top: 50px;
  border-radius: 16px;
  border: 1px solid var(--gray-300, #dee2e7);
  background: #fff;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 1px solid black; */
  margin: auto;
  width: 1600px;
  height: 580px;
  margin: 20px 19px;
`;
export const ImagesView = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainImage = styled.div`
  > img {
    border: 1px solid #dee2e7;
    border-radius: 16px;
  }
`;
export const OtherImages = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 11.5px;
  > img {
    width: 48px;
    border-radius: 10px;

    height: 48px;
    border: 1px solid #dee2e7;
  }
`;
export const Description = styled.div``;
export const About = styled.div``;
export const Availability = styled.div``;
export const ProductInfo = styled.div``;
export const Reviews = styled.div`
  display: flex;
`;
export const Price = styled.div`
  width: 430px;
  height: 72px;
  flex-shrink: 0;
  background-color: #fff0df;
`;
export const Image = styled.div``;
export const Rating = styled.div`
display: flex;
`;
