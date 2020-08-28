import React, { useState } from "react";
import {
  HeaderWrapper,
  LogoLink,
  NavLink,
  Border,
  HeaderNav,
  ProfileNav,
  ProfileAvatar,
  ProfileNavBtn,
  DownIconWrap,
  DropdownList,
  DropdownLink,
} from "./styled";
import LogoSvg from "../../components/SvgComponents/logoSvg";
import DownIcon from "../../components/SvgComponents/DownIcon";

const Header = () => {
  const [dropdownActive, toggleDropdown] = useState(false);
  const toggleDropdownPanel = () => {
    toggleDropdown(!dropdownActive);
  };
  return (
    <HeaderWrapper>
      <div>
        <LogoLink to="/">
          <LogoSvg />
        </LogoLink>
      </div>

      <HeaderNav>
        <NavLink to="leaderboard">
          Leaderboard
          <Border className="border" />
        </NavLink>
        <NavLink to="network">
          Network
          <Border className="border" />
        </NavLink>
        <ProfileNav>
          <ProfileAvatar to="/profile" />
          <ProfileNavBtn onClick={toggleDropdownPanel}>
            Ayupov Linar{" "}
            <DownIconWrap>
              <DownIcon />
            </DownIconWrap>
            <DropdownList dropdownActive={dropdownActive}>
              <DropdownLink to="/profile">My Profile</DropdownLink>
              <DropdownLink to="/login">Log Qut</DropdownLink>
            </DropdownList>
          </ProfileNavBtn>
        </ProfileNav>
      </HeaderNav>
    </HeaderWrapper>
  );
};

export default Header;
