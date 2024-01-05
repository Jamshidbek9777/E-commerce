import React, { useState } from "react";
import Logo from "../../assets/icons/logo.svg";
import Liked from "../../assets/searchbaricons/liked.svg";
import Cart from "../../assets/searchbaricons/cart.svg";
import Profile from "../../assets/searchbaricons/profile.svg";
import Menu from "../../assets/searchbaricons/menu.svg";
import Person from "../../assets/icons/person.svg";
import MobileCart from "../../assets/searchbaricons/mobilecart.svg";
import { useNavigate } from "react-router-dom";
import {
     NavContainer,
     Input,
     SearchButton,
     RightSide,
     LikedContainer,
     CartContainer,
     ProfileContainer,
     Middle,
     Mobile,
     MobileProfile,
     MobileCartContainer,
     MenuHam,
     OuterHam,
     Line,
} from "./style";
import Sidebar from "../Mobile/Sidebar";
const SearchBar = () => {
     const [sidebar, setSidebar] = useState(false);
     const navigate = useNavigate();
     const showSidebar = () => setSidebar(true);
     const closeSidebar = () => setSidebar(false);

     return (
          <NavContainer>
               <OuterHam>
                    <MenuHam onClick={showSidebar}>
                         <img src={Menu} alt="" />
                    </MenuHam>
                    <img onClick={() => navigate("/home")} src={Logo} alt="" />
               </OuterHam>
               {sidebar && <Sidebar active={closeSidebar} />}
               <Middle>
                    <Input placeholder="Type here..." type="text" />
                    <SearchButton>Search</SearchButton>
               </Middle>
               <div>
                    <RightSide>
                         <ProfileContainer onClick={() => navigate("/profile")}>
                              <img src={Profile} alt="" />
                              <p>Profile</p>
                         </ProfileContainer>
                         <LikedContainer onClick={() => navigate("/orders")}>
                              <img src={Liked} alt="" />
                              <p>Orders</p>
                         </LikedContainer>
                         <CartContainer onClick={() => navigate("/cart")}>
                              <img src={Cart} alt="" />
                              <p>Cart</p>
                              {/* <span></span> */}
                         </CartContainer>
                    </RightSide>
               </div>
               <Mobile>
                    <MobileProfile>
                         <img src={Person} alt="" />
                    </MobileProfile>
                    <MobileCartContainer onClick={() => navigate("/cart")}>
                         <img src={MobileCart} alt="" />
                    </MobileCartContainer>
               </Mobile>
          </NavContainer>
     );
};

export default SearchBar;
