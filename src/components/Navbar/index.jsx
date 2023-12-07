import React from "react";
import { NavContainer, NavLinks } from "./style";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <NavContainer>
      <NavLinks onClick={() => navigate("/home")}>Home</NavLinks>
      <NavLinks onClick={() => navigate("/products")}>Products</NavLinks>
      <NavLinks onClick={() => navigate("/about")}>About</NavLinks>
      <NavLinks onClick={() => navigate("/contact")}>Contact</NavLinks>
    </NavContainer>
  );
};
export default Navbar;
