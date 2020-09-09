import React, { useEffect } from "react";
import { ContentWrapper } from "./styled";
import { ProfileContainer } from "../../../commonStyles/styled";
import SidebarContainer from "../../../containers/SidebarContainer";
import TopBatting from "../TopBatting";
import RecentReports from "../RecentReports";
import Statistics from "../Statistics";
import { connect } from "react-redux";
import { getProfileCurrents } from "../../../actions/profileActions";
import { getProfileState } from "../../../selectors/selectors";
const PlayerProfile = ({ getProfileCurrents, profileCurrents }) => {
  useEffect(() => {
    getProfileCurrents();
  }, [getProfileCurrents]);
  const {
    id,
    first_name,
    last_name,
    age,
    weight,
    feet,
    inches,
    batter_summary,
    avatar,
  } = profileCurrents;
  return (
    <ProfileContainer>
      <SidebarContainer profileCurrents={profileCurrents} />
      <ContentWrapper>
        <TopBatting userId={id} topValues={batter_summary} />
        <RecentReports />
        <Statistics
          userId={id}
          AuthUser={{
            first_name,
            last_name,
            age,
            weight,
            feet,
            inches,
            avatar,
          }}
        />
      </ContentWrapper>
    </ProfileContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    profileCurrents: getProfileState(state),
  };
};

const mapDispatchToProps = {
  getProfileCurrents,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfile);
