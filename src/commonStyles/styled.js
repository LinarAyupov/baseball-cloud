import styled from "styled-components";

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
`;

export const SidebarContainer = styled.section`
  overflow: auto;
  background: #fff;
  width: 297px;
  padding: 16px;
  height: auto;
`;
