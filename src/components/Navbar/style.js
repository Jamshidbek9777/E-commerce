import styled from "styled-components";

const NavContainer = styled.div`
  height: 56px;
  display: flex;
  padding-left: 100px;
  gap: 20px;
  border-bottom: 1px solid #8b96a5;
  transition: 0.5s all ease-in-out;
  @media screen and (max-width: 850px) {
    padding: 0px 100px;
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 620px) {
    display: none;
  }
`;
const NavLinks = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #1c1c1c;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  transition: 0.2s all ease-in-out;
  &:hover {
    color: #0067ff;
  }
`;
// const LoginButton = styled.button`
//   width: 100px;
//   margin: 10px 0px;
//   border-radius: 5px;
//   background-color: #0d6efd;
//   border: none;
//   color: #fff;
// `;
// const LogoutButton = styled.button`
//   width: 100px;
//   margin: 10px 0px;
//   border-radius: 5px;
//   background-color: #0d6efd;
//   border: none;
//   color: #fff;
// `;
export { NavContainer, NavLinks };
