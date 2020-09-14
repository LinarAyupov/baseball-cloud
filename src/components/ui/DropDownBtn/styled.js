import styled from "styled-components";

export const Container = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  color: #48bbff;
  border: none;
  background: #fff;
  outline: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 1.19;
`;
export const IconWrap = styled.span`
  display: flex;
  margin-left: 6px;
  margin-top: -1px;
  width: 16px;
  height: 9px;
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
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
