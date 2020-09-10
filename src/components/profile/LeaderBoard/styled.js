import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  grid-area: content;
`;

export const UsersContainer = styled.div`
  padding: 16px;
`;

export const Header = styled.header`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1px;
`;
export const Title = styled.div`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 400;
  -webkit-text-align: center;
  text-align: center;
  color: #667784;
`;

export const Filters = styled.nav`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-flow: row wrap;
  margin-right: 5px;
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

export const NameBtn = styled.span`
  cursor: pointer;
  font-size: 14px;
  color: #414f5a;
  &:hover {
    color: #48bbff;
    border-bottom: 1px solid #48bbff;
  }
`;
