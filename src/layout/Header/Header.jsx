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
  DropdownItem,
} from "./styled";
import { DropdownList } from "../../commonStyles/styled";
import LogoSvg from "../../components/SvgComponents/logoSvg";
import DownIcon from "../../components/SvgComponents/DownIcon";
import { withRouter } from "react-router-dom";

const Header = ({
  isAuth,
  avatarUrl = "",
  userName,
  userLastName,
  logOut,
  history,
}) => {
  const [dropdownActive, toggleDropdown] = useState(false);
  const toggleDropdownPanel = () => {
    toggleDropdown(!dropdownActive);
  };

  const onLogOut = () => {
    console.log(history);
    logOut();
    history.push("/login");
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
          <NavLink to="/leaderboard">
            Leaderboard
            <Border className="border" />
          </NavLink>
          <NavLink to="/network">
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
                <DropdownItem style={{ width: "100%" }} onClick={onLogOut}>
                  Log Qut
                </DropdownItem>
              </DropdownList>
            </ProfileNavBtn>
          </ProfileNav>
        </HeaderNav>
      )}
    </HeaderWrapper>
  );
};

export default withRouter(Header);
