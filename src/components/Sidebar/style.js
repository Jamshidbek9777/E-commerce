import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const Container = styled.div`
  display: flex;
  position: fixed;
  height: 100%;
  top: 0;
  left: 0;
  width: 300px;
  left: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: ${(props) => (props.sidebar ? slideIn : slideOut)} 0.4s ease-in-out;
  > svg {
    position: fixed;
    color: black;
    width: 15px;
    height: 15px;
    margin-top: 10px;
  }
`;

const SidebarMenu = styled.div`
  width: 400px;
  height: 800px;
  display: flex;
  flex-direction: column;
  background-color: #eff2f4;
  padding: 24px;
  border-radius: 0px 10px 10px 0px;
`;
const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid;
  margin-top: 20px;
`;
const UserImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

const UserDetails = styled.div`
  gap: 10px;
  font-weight: 500;
  display: flex;
`;
const Title = styled.p``;
const Name = styled.p``;

// Main
const SidebarItems = styled.div`
  padding-top: 20px;
`;
const Navs = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dee2e7;
  > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > li {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 0px;
    }
  }
`;
const Info = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dee2e7;
  > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > li {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 0px;
    }
  }
`;
const MoreInfo = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dee2e7;
  > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > li {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 0px;
    }
  }
`;
export {
  Container,
  SidebarMenu,
  Head,
  UserImg,
  UserDetails,
  Title,
  Name,
  Img,
  SidebarItems,
  Info,
  MoreInfo,
  Navs,
};
