import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export const TabsWrap = styled(Tabs)`
  width: 100%;
`;

export const TabListWrap = styled(TabList)`
  position: relative;
  margin: 0;
  padding: 0;
  box-shadow: unset;
  display: flex;
  justify-content: flex-start;
  &.drop-down-list {
    display: none;
    width: 178px;
    position: absolute;
    flex-direction: column;
    transform: translateY(33px);
    margin-top: 12px;
    padding: 8px 0;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.15);
    border: solid 1px #ebebeb;
    z-index: 100;
    top: inherit;
    &:hover {
      display: flex;
    }
  }
`;
export const DropDownTab = styled(Tab)`
  display: block;
  padding: 8px 16px;
  background: #fff;
  line-height: 1;
  color: #788b99;
  cursor: pointer;
  outline: none;
  &:hover {
    background: #ecf8ff;
  }
`;

export const TabItem = styled(Tab)`
  padding: 8px;
  margin: 8px;
  border: 2px solid #788b99;
  border-radius: 40px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 700;
  list-style: none;
  background: #fff;
  color: #788b99;
  cursor: pointer;
  &.react-tabs__tab--selected {
    background: #788b99;
    color: #fff;
  }
  &.drop-down {
    &:hover ~ .drop-down-list {
      display: flex;
    }
  }
`;
export const TabPanelWrap = styled(TabPanel)`
  width: 100%;
  height: 100%;
`;
