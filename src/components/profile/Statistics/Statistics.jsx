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
import Log from "../Log";
import Comparison from "../Comparison/Comparison";
const Statistics = ({ userId, AuthUser }) => {
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
          <Batting userId={userId} />
        </TabPanelWrap>
        <TabPanelWrap>
          <SessionReports userId={userId} />
        </TabPanelWrap>
        <TabPanelWrap>
          <Comparison AuthUser={AuthUser} />
        </TabPanelWrap>
        <TabPanelWrap>
          <Log userId={userId} />
        </TabPanelWrap>
      </TabsWrap>
    </ContentContainer>
  );
};

export default Statistics;
