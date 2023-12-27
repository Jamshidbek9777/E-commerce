import React from "react";
import {
  Container,
  Main,
  Secondary,
  Socials,
  Middle,
  AppStore,
  Links,
  Store,
  Playmarket,
  Title,
  Tags,
  Wrapper,
} from "./style";
import Logo from "../../assets/icons/logo.svg";
import Facebook from "../../assets/icons/facebookicon.svg";
import Twitter from "../../assets/icons/twittericon.svg";
import Linkedin from "../../assets/icons/linkedinicon.svg";
import Instagram from "../../assets/icons/instagramicon.svg";
import YouTube from "../../assets/icons/youtubeicon.svg";
import AppStoreLogo from "../../assets/icons/appstore.svg";
import PlayMarketLogo from "../../assets/icons/playmarket.svg";

export const Footer = () => {
  return (
    <Container>
      <Main>
        <Socials>
          <img src={Logo} alt="" />
          <p>
            Best information about the company gies here but now lorem ipsum is
          </p>
          <Links>
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Linkedin} alt="" />
            <img src={Instagram} alt="" />
            <img src={YouTube} alt="" />
          </Links>
        </Socials>
        <Middle>
          <Wrapper>
            <Title>About us</Title>
            <Tags>About Us</Tags>
            <Tags>Find store </Tags>
            <Tags>Categories</Tags>
            <Tags>Blogs</Tags>
          </Wrapper>
          <Wrapper>
            <Title>About us</Title>
            <Tags>About Us</Tags>
            <Tags>Find store </Tags>
            <Tags>Categories</Tags>
            <Tags>Blogs</Tags>
          </Wrapper>{" "}
          <Wrapper>
            <Title>About us</Title>
            <Tags>About Us</Tags>
            <Tags>Find store </Tags>
            <Tags>Categories</Tags>
            <Tags>Blogs</Tags>
          </Wrapper>{" "}
          <Wrapper>
            <Title>About us</Title>
            <Tags>About Us</Tags>
            <Tags>Find store </Tags>
            <Tags>Categories</Tags>
            <Tags>Blogs</Tags>
          </Wrapper>
        </Middle>
        <AppStore>
          <h1>Get app</h1>
          <Store>
            <img src={AppStoreLogo} alt="" />
          </Store>
          <Playmarket>
            <img src={PlayMarketLogo} alt="" />
          </Playmarket>
        </AppStore>
      </Main>
      <Secondary>
        <p>© 2023 Ecommerce. </p>
        <p>English</p>
      </Secondary>
    </Container>
  );
};
export default Footer;
