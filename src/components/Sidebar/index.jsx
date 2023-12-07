import React from "react";
import Avatar from "../../assets/icons/avatar.svg";
import {
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
} from "./style";
import HomeIcon from "../../assets/icons/home.svg";
import List from "../../assets/icons/list.svg";
import Favourites from "../../assets/icons/likedmobile.svg";
import Order from "../../assets/icons/order.svg";
import Language from "../../assets/icons/language.svg";
import Contact from "../../assets/icons/contactus.svg";
import About from "../../assets/icons/about.png";
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
                <Img src={Avatar} alt="" />
              </UserImg>
              <UserDetails>
                <Title>Sign in |</Title>
                <Name>Register</Name>
              </UserDetails>
            </Head>
            <SidebarItems>
              <Navs>
                <ul>
                  <li>
                    {" "}
                    <img src={HomeIcon} alt="" />
                    Home
                  </li>
                  <li>
                    {" "}
                    <img src={List} alt="" />
                    Categories
                  </li>
                  <li>
                    {" "}
                    <img src={Favourites} alt="" />
                    Favourites
                  </li>
                  <li>
                    {" "}
                    <img src={Order} alt="" />
                    My orders
                  </li>
                </ul>
              </Navs>
              <Info>
                <ul>
                  <li>
                    {" "}
                    <img src={Language} alt="" />
                    English | USD
                  </li>
                  <li>
                    {" "}
                    <img src={Contact} alt="" />
                    Contact us
                  </li>
                  <li>
                    {" "}
                    <img src={About} alt="" />
                    About us
                  </li>
                </ul>
              </Info>
              <MoreInfo>
                <ul>
                  <li>User greement</li>
                  <li>Partnership</li>
                  <li>Privacy policy</li>
                </ul>
              </MoreInfo>
            </SidebarItems>
          </SidebarMenu>
        </Container>
      )}
    </div>
  );
};

export default Sidebar;
