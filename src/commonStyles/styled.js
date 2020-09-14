import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MainContainer = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "hd hd"
    "content content"
    "ft ft";
`;

export const ProfileContainer = styled.div`
  overflow: auto;
  display: flex;
  width: 100%;
  height: 100%;
  grid-area: content;
  @media (max-width: 40em) {
    flex-direction: column;
  }
`;

export const SidebarContainer = styled.section`
  overflow: auto;
  background: #fff;
  min-width: 298px;
  padding: 16px;
  height: auto;
  color: #788b99;
  @media (max-width: 40em) {
    min-height: 100%;
  }
`;

export const ContentContainer = styled.div`
  background: #fff;
  margin: 16px 16px 32px 16px;
  padding: 16px;
  border-radius: 8px;
`;

export const ContentTitle = styled.div`
  font-size: 18px;
  font-weight: 900;
  color: #414f5a;
  line-height: 1.25;
  text-align: left;
`;

export const ContentText = styled.div`
  display: flex;
  color: #667784;
  font-size: 16px;
`;

export const NowInfo = styled.div`
  display: flex;
  width: 100%;
  min-height: 420px;
  align-items: center;
  justify-content: center;
  color: #667784;
  font-size: 16px;
`;

export const TableWrap = styled.table`
  width: 100%;
  border: none;
  margin-top: 15px;
  table-layout: fixed;
`;

export const TableTitle = styled.caption`
  color: #414f5a;
  font-weight: 400;
  font-size: 18px;
  text-align: left;
  line-height: 1.25;
`;

export const TableHeader = styled.tr`
  height: 44px;
  margin-bottom: 6px;
`;
export const TableHeaderItem = styled.td`
  font-size: 14px;
  line-height: 1;
  font-weight: 300;
  color: #667784;
`;

export const TableCountWrap = styled.tr`
  height: 44px;
  border-radius: 4px;
  background-color: #f7f8f9;
  &:hover {
    background-color: #ecf8ff;
  }
`;
export const SpaceRow = styled.tr`
  height: 4px;
`;
export const TableCount = styled.td`
  font-size: 14px;
  color: #414f5a;
`;

export const BoardContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;
  grid-area: content;
`;

export const BoardHeader = styled.header`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1px;
  @media (max-width: 40em) {
    flex-direction: column;
  }
`;

export const BoardTitle = styled.div`
  font-size: 24px;
  line-height: 1.25;
  font-weight: 400;
  -webkit-text-align: center;
  text-align: center;
  color: #667784;
`;

export const PlayersFilters = styled.nav`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-flow: row wrap;
  margin-right: 5px;
`;

export const HeartIconSmall = styled.i`
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  cursor: pointer;
  &.blue-icon {
    color: #48bbff;
  }
  &::before {
    content: ${({ isActive }) => (isActive ? `"\f004"` : `"\f08a"`)};
  }
`;

export const BoardUserLink = styled(NavLink)`
  cursor: pointer;
  font-size: 14px;
  color: #414f5a;
  &:hover {
    color: #48bbff;
  }
`;
