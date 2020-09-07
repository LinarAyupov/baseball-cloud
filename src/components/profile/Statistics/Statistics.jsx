import React, { useState } from "react";
import { ContentContainer } from "../../../commonStyles/styled";
import {
  TabsWrap,
  TabListWrap,
  TabItem,
  TabPanelWrap,
  DropDownTab,
} from "./styled";
import Batting from "../Batting";
import SessionReports from "../SessionReports";
const Statistics = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <ContentContainer>
      <TabsWrap
        selectedIndex={tabIndex}
        onSelect={(index) => {
          setTabIndex(index);
        }}
      >
        <TabListWrap>
          <TabItem className="drop-down">Batting</TabItem>
          <TabItem>Session Reports</TabItem>
          <TabItem>Сomparison</TabItem>
          <TabListWrap className="drop-down-list">
            <DropDownTab>Summary</DropDownTab>
            <DropDownTab disabled onClick={() => setTabIndex(3)}>
              Log
            </DropDownTab>
          </TabListWrap>
        </TabListWrap>
        <TabPanelWrap>
          <Batting />
        </TabPanelWrap>
        <TabPanelWrap>
          <SessionReports />
        </TabPanelWrap>
        <TabPanelWrap>Сomparison</TabPanelWrap>
        <TabPanelWrap>Log</TabPanelWrap>
      </TabsWrap>
    </ContentContainer>
  );
};

export default Statistics;
