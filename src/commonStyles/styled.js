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
  grid-area: content;
`;

export const SidebarContainer = styled.section`
  overflow: auto;
  background: #fff;
  min-width: 298px;
  padding: 16px;
  height: auto;
  color: #788b99;
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

export const DropdownList = styled.div`
  display: ${({ dropdownActive }) => (dropdownActive ? "flex" : "none")};
  flex-direction: column;
  width: 178px;
  position: absolute;
  top: 100%;
  margin-top: 12px;
  padding: 8px 0;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.15);
  border: solid 1px #ebebeb;
  z-index: 100;
  right: -5px;
  &:: before {
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: -8px;
    right: 25px;
    z-index: 2;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #ffffff transparent;
  }
`;
