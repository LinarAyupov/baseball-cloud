import styled from "styled-components";
import Link from "../../components/ui/Link";
export const HeaderWrapper = styled.header`
  padding: 8px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  grid-area: hd;
  grid-column-end: span 2;
  align-items: center;
  color: #788b99;
  @media (max-width: 40em) {
    justify-content: center;
  }
`;

export const LogoLink = styled(Link)`
  display: block;
  font-size: 0;
`;

export const DropdownItem = styled.span`
  width: 100%;
  padding: 8px 16px;
  color: #788b99;
  text-align: left;
  line-height: 1;
  &:hover {
    background-color: #ecf8ff;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 40em) {
    justify-content: center;
  }
`;

export const Border = styled.span`
  position: absolute;
  bottom: -16px;
  left: 0;
  width: 100%;
  height: 5px;
  background-color: #c1cad0;
  opacity: 0;
`;

export const NavLink = styled(Link)`
  display: block;
  position: relative;
  height: 100%;
  padding: 0 8px;
  color: #788b99;
  &:hover .border {
    opacity: 1;
  }
  &:visited,
  &:link {
    text-decoration: none !important;
    color: #788b99;
  }
`;

export const ProfileNav = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 16px;
`;

export const ProfileAvatar = styled(Link)`
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-image: url(${({ avatarUrl }) =>
    avatarUrl
      ? avatarUrl
      : "https://baseballcloud-front.herokuapp.com/4625203570ef5f6721fc145b05f790a9.png"});
  background-size: cover;
  background-position: 50% 50%;
`;

export const ProfileNavBtn = styled.button`
  position: relative;
  white-space: nowrap;
  display: flex;
  align-items: center;
  padding: 7px 33px 10px 18px;
  border-radius: 4px;
  box-shadow: none;
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  border: none;
  outline: none;
  background-color: #fff;
  &:hover {
    background-color: #ddd;
  }
`;

export const DownIconWrap = styled.span`
  position: absolute;
  top: 3px;
  right: 19px;
`;

export const DropdownLink = styled(Link)`
  width: 100%;
  padding: 8px 16px;
  color: #788b99;
  text-align: left;
  line-height: 1;
  &:link {
    text-decoration: none !important;
    color: #788b99;
  }
  &:hover {
    background-color: #ecf8ff;
  }
`;
