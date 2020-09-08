import React, { useEffect } from "react";
import { ContentWrapper } from "./styled";
import { ProfileContainer } from "../../../commonStyles/styled";
import SidebarContainer from "../../../containers/SidebarContainer";
import TopBatting from "../TopBatting";
import RecentReports from "../RecentReports";
import Statistics from "../Statistics";
import { connect } from "react-redux";
import {
  getProfileCurrents,
  getSchools,
  getTeams,
  getFacilities,
  updateProfile,
  uploadPhoto,
  getButtingSummary,
} from "../../../actions/profileActions";
import {
  getProfileState,
  getFirstPositionsState,
  getSecondPositionsState,
  getSchoolYearsState,
  getSchoolsState,
  getHandsSidesState,
  getTeamsState,
  getFacilitiesState,
  getIsFetchingState,
} from "../../../selectors/selectors";
const PlayerProfile = ({
  getProfileCurrents,
  profileCurrents,
  firstPositions,
  secondPositions,
  schoolYears,
  handsSides,
  facilitiesList,
  updateProfile,
  getFacilities,
  isFetching,
  getSchools,
  uploadPhoto,
  getTeams,
  getButtingSummary,
  schools,
  teams,
}) => {
  useEffect(() => {
    let searchText = "";
    getProfileCurrents();
    getSchools({ searchText });
    getTeams({ searchText });
    getFacilities({ searchText });
  }, [getProfileCurrents, getSchools, getTeams, getFacilities]);

  return (
    <ProfileContainer>
      <SidebarContainer
        profileCurrents={profileCurrents}
        firstPositions={firstPositions}
        secondPositions={secondPositions}
        schoolYears={schoolYears}
        handsSides={handsSides}
        facilitiesList={facilitiesList}
        updateProfile={updateProfile}
        isFetching={isFetching}
        uploadPhoto={uploadPhoto}
        schools={schools}
        teams={teams}
      />
      <ContentWrapper>
        <TopBatting
          getButtingSummary={getButtingSummary}
          userId={profileCurrents.id}
        />
        <RecentReports />
        <Statistics />
      </ContentWrapper>
    </ProfileContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    profileCurrents: getProfileState(state),
    firstPositions: getFirstPositionsState(state),
    secondPositions: getSecondPositionsState(state),
    schoolYears: getSchoolYearsState(state),
    handsSides: getHandsSidesState(state),
    teams: getTeamsState(state),
    facilitiesList: getFacilitiesState(state),
    isFetching: getIsFetchingState(state),
    schools: getSchoolsState(state),
  };
};

const mapDispatchToProps = {
  getProfileCurrents,
  getSchools,
  getTeams,
  getFacilities,
  updateProfile,
  uploadPhoto,
  getButtingSummary,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfile);
