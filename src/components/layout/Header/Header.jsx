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
import DropdownList from "../../commons/DropdownList";
import LogoSvg from "../../SvgComponents/logoSvg";
import DownIcon from "../../SvgComponents/DownIcon";
import { withRouter } from "react-router-dom";

const Header = ({
  isAuth,
  avatarUrl = "",
  userName,
  userLastName,
  logOut,
  history,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdownPanel = () => {
    setIsOpen(!isOpen);
  };

  const onLogOut = () => {
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
              <DropdownList isOpen={isOpen} setIsOpen={setIsOpen}>
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
