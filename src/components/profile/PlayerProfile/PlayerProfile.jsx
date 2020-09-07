import React from "react";
import { ContentWrapper } from "./styled";
import { ProfileContainer } from "../../../commonStyles/styled";
import SidebarContainer from "../../../containers/SidebarContainer";
import TopBatting from "../TopBatting";
import RecentReports from "../RecentReports";
import Statistics from "../Statistics";

const PlayerProfile = () => {
  return (
    <ProfileContainer>
      <SidebarContainer />
      <ContentWrapper>
        <TopBatting />
        <RecentReports />
        <Statistics />
      </ContentWrapper>
    </ProfileContainer>
  );
};

export default PlayerProfile;
