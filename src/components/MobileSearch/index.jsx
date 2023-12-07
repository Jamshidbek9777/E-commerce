import React from "react";
import { MobileSearchContainer, MobileInput, SeachIcon } from "./style";
import SearchLogo from "../../assets/icons/search.svg";

export const MobileSearch = () => {
  return (
    <MobileSearchContainer>
      <SeachIcon src={SearchLogo} alt="" />
      <MobileInput placeholder=" Type here to search..." type="text" />
    </MobileSearchContainer>
  );
};
export default MobileSearch;
