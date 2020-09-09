import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 16px 0;
  position: sticky;
  bottom: 0;
`;

export const Button = styled.span`
  padding: 6px 12px;
  line-height: 1.42857143;
  color: #414f5a;
  border: none;
  text-decoration: none;
  border-radius: 4px;
  margin: 0 2px;
  background-color: #f7f8f9;
  outline: none;
  cursor: pointer;
  &[disabled] {
    color: #777;
    background-color: #fff;
    border-color: #ddd;
    cursor: not-allowed;
  }
  &[disabled]:hover {
    background-color: #fff;
  }
  &:hover {
    background-color: #eeeeee;
  }
`;
export const NavBtn = styled(Button)`
  ${({ isActive }) =>
    isActive
      ? `background-color: #48bbff;
        color: #fff;
        &:hover {
          background-color: #48bbff;
        }
    `
      : ""};
`;
