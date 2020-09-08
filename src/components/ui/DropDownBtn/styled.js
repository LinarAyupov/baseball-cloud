import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: #48bbff;
  margin-left: 20px;
  padding-bottom: 5px;
  cursor: pointer;
`;
export const IconWrap = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  margin-left: 15px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
`;

export const MenuList = styled.div`
  position: absolute;
  width: ${({ menuWidth }) => (menuWidth ? menuWidth : "172px")};
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  padding: 8px 0;
  top: 100%;
  margin-top: 12px;
  right: -25px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.15);
  border: solid 1px #ebebeb;
  &::before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: -8px;
    right: 25px;
    z-index: 2;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #ffffff;
  }
`;

export const DropDownItem = styled.div`
  width: 100%;
  padding: 8px 16px;
  color: #788b99;
  text-align: left;
  line-height: 1;
  &:hover {
    background-color: #ecf8ff;
  }
`;
