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
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid;
  margin-top: 20px;
`;
const UserImg = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

const UserDetails = styled.div`
  font-weight: 500;
`;
const Title = styled.p`
  font-size: 13px;
  color: #757575;
  text-transform: uppercase;
`;
const Name = styled.p``;

// Main
const Nav = styled.div``;
const Menu = styled.div`
  gap: 10px;
`;
const Items = styled.ul`
  padding: 12px 8px;
  gap: 20px;
`;
const ItemsList = styled.li`
  padding: 12px 8px;
  list-style: none;
  align-items: center;
  height: 48px;
  width: 260px;
  transition: 0.3s all ease-in-out;
  border-radius: 8px;
  background-color: #f6f6f6;
`;
const MainTitle = styled.p``;
export {
  Container,
  SidebarMenu,
  Head,
  UserImg,
  UserDetails,
  Title,
  Name,
  Img,
  Nav,
  Menu,
  MainTitle,
  Items,
  ItemsList,
};
