import styled from "styled-components";

export const DropdownWrap = styled.div`
  position: absolute;
  width: ${({ menuWidth }) => (menuWidth ? menuWidth : "172px")};
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  padding: 8px 0;
  top: 100%;
  margin-top: 12px;
  right: ${({ right }) => (right ? right : "-25px")};
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.15);
  border: solid 1px #ebebeb;
  z-index: 100;
  &::before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: -8px;
    right: 25px;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #ffffff;
  }
`;
