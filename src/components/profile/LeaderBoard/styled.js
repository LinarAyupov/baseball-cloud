import styled from "styled-components";

export const UsersContainer = styled.div`
  padding: 16px;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
`;

export const TabBtn = styled.button`
  padding: 8px;
  margin: 8px;
  color: ${({ isActive }) => (isActive ? "#fff" : "#788b99")};
  border: 2px solid #788b99;
  border-radius: 40px;
  background-color: ${({ isActive }) => (isActive ? "#788B99" : " #fff")};
  outline: none;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  &:hover {
    background-color: #c9d1d6;
  }
`;
