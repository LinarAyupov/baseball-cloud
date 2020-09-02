import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ProfileContainer } from "../../../commonStyles/styled";
import EditSidebar from "../EditSidebar";
import { getProfileCurrents } from "../../../actions/profileActions";
import { getProfile } from "../../../selectors/selectors";

const PlayerProfile = ({ getProfileCurrents, profileCurrents }) => {
  useEffect(() => getProfileCurrents(), [getProfileCurrents]);
  return (
    <ProfileContainer>
      <EditSidebar profileCurrents={profileCurrents} />
    </ProfileContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    profileCurrents: getProfile(state),
  };
};

const mapDispatchToProps = {
  getProfileCurrents,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerProfile);
