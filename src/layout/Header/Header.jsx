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
  DropdownLink,
} from "./styled";
import { DropdownList } from "../../commonStyles/styled";
import LogoSvg from "../../components/SvgComponents/logoSvg";
import DownIcon from "../../components/SvgComponents/DownIcon";

const Header = ({ isAuth, avatarUrl = "", userName, userLastName }) => {
  const [dropdownActive, toggleDropdown] = useState(false);
  const toggleDropdownPanel = () => {
    toggleDropdown(!dropdownActive);
  };
  return (
    <HeaderWrapper>
      <div>
        <LogoLink to={isAuth ? "/profile" : "/login"}>
          <LogoSvg />
        </LogoLink>
      </div>

      {isAuth && (
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
            <ProfileAvatar to="/profile" avatarUrl={avatarUrl} />
            <ProfileNavBtn onClick={toggleDropdownPanel}>
              {userName || "User"} {userLastName || "Name"}
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
      )}
    </HeaderWrapper>
  );
};

export default Header;
