import React from "react";
import { HeaderWrapper, LogoLink } from "./styled";
import LogoSvg from "../SvgComponents/logoSvg";

const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <LogoLink to="/">
          <LogoSvg />
        </LogoLink>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
