import React, { useEffect, useState } from "react";
import EditSidebar from "../components/profile/EditSidebar";
import { connect } from "react-redux";
import {
  getProfileCurrents,
  getSchools,
  getTeams,
  getFacilities,
  updateProfile,
  uploadPhoto,
} from "../actions/profileActions";
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
} from "../selectors/selectors";
import InfoSidebar from "../components/profile/InfoSidebar/InfoSidebar";
const SidebarContainer = ({
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
  schools,
  teams,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    if (!profileCurrents.first_name) {
      setIsEdit(true);
    }
  }, [profileCurrents]);
  useEffect(() => {
    let searchText = "";
    getProfileCurrents();
    getSchools({ searchText });
    getTeams({ searchText });
    getFacilities({ searchText });
  }, [getProfileCurrents, getSchools, getTeams, getFacilities]);
  const formattingFacilities = (list) => {
    if (list) {
      return list.map((f) => ({
        id: f.id,
        email: f.email,
        name: f.u_name,
      }));
    }
  };
  const facilities = formattingFacilities(facilitiesList);
  const profileFacilities = formattingFacilities(profileCurrents.facilities);

  return (
    <>
      {isEdit ? (
        <EditSidebar
          profileCurrents={profileCurrents}
          schools={schools}
          teams={teams}
          firstPositions={firstPositions}
          secondPositions={secondPositions}
          handsSides={handsSides}
          facilities={facilities}
          profileFacilities={profileFacilities}
          updateProfile={updateProfile}
          schoolYears={schoolYears}
          isFetching={isFetching}
          uploadPhoto={uploadPhoto}
          setIsEdit={setIsEdit}
        />
      ) : (
        <InfoSidebar
          profileCurrents={profileCurrents}
          schools={schools}
          schoolYears={schoolYears}
          firstPositions={firstPositions}
          secondPositions={secondPositions}
          handsSides={handsSides}
          profileFacilities={profileFacilities}
          setIsEdit={setIsEdit}
        />
      )}
    </>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
