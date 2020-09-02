import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ProfileContainer } from "../../../commonStyles/styled";
import EditSidebar from "../EditSidebar";
import {
  getProfileCurrents,
  getSchools,
  getTeams,
} from "../../../actions/profileActions";
import {
  getProfileState,
  getSchoolsState,
  getTeasmsState,
} from "../../../selectors/selectors";

const PlayerProfile = ({
  getProfileCurrents,
  profileCurrents,
  getSchools,
  getTeams,
  schools,
  teams,
}) => {
  useEffect(() => {
    let searchText = "";
    getProfileCurrents();
    getSchools({ searchText });
    getTeams({ searchText });
  }, [getProfileCurrents, getSchools, getTeams]);
  return (
    <ProfileContainer>
      <EditSidebar
        profileCurrents={profileCurrents}
        schools={schools}
        teams={teams}
      />
    </ProfileContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    profileCurrents: getProfileState(state),
    schools: getSchoolsState(state),
    teams: getTeasmsState(state),
  };
};

const mapDispatchToProps = {
  getProfileCurrents,
  getSchools,
  getTeams,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfile);
