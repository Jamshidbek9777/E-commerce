import React from "react";
import ProfilePic from "../../assets/imgs/unknown.jpg";
import {
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
} from "./style";
import HomeIcon from "../../assets//icons/home.svg";
import { FaTimes } from "react-icons/fa";
export const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };
  return (
    <div>
      {active && (
        <Container sidebar={active}>
          <SidebarMenu>
            <FaTimes onClick={closeSidebar} />
            <Head>
              <UserImg>
                <Img src={ProfilePic} alt="" />
              </UserImg>
              <UserDetails>
                <Title>Web Developer</Title>
                <Name>Jamshidbek</Name>
              </UserDetails>
            </Head>
            <Nav>
              <Menu>
                <Items>
                  <ItemsList>
                    <img src={HomeIcon} alt="" />
                    <span>Home</span>
                  </ItemsList>
                  <ItemsList>
                    <img src={HomeIcon} alt="" />
                    <span>Home</span>
                  </ItemsList>
                  <ItemsList>
                    <img src={HomeIcon} alt="" />
                    <span>Home</span>
                  </ItemsList>
                  <ItemsList>
                    <img src={HomeIcon} alt="" />
                    <span>Home</span>
                  </ItemsList>
                </Items>
              </Menu>
            </Nav>
          </SidebarMenu>
        </Container>
      )}
    </div>
  );
};

export default Sidebar;
