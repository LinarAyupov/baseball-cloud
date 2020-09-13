import React, { useEffect, useState } from "react";
import EditSidebar from "../components/profile/EditSidebar";
import InfoSidebar from "../components/profile/InfoSidebar/InfoSidebar";
import { connect } from "react-redux";
import {
  getSchools,
  getTeams,
  getFacilities,
  updateProfile,
  uploadPhoto,
} from "../actions/profileActions";
import {
  getFirstPositionsState,
  getSecondPositionsState,
  getSchoolYearsState,
  getSchoolsState,
  getHandsSidesState,
  getTeamsState,
  getFacilitiesState,
  getIsFetchingState,
} from "../selectors/selectors";
const SidebarContainer = ({
  getSchools,
  getTeams,
  updateFavoriteProfile,
  getFacilities,
  profileCurrents,
  firstPositions,
  secondPositions,
  schoolYears,
  handsSides,
  facilitiesList,
  updateProfile,
  isFetching,
  uploadPhoto,
  schools,
  teams,
  showLikeBtn,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    let searchText = "";
    getSchools({ searchText });
    getTeams({ searchText });
    getFacilities({ searchText });
  }, [getSchools, getTeams, getFacilities]);
  useEffect(() => {
    if (!profileCurrents.first_name) {
      setIsEdit(true);
    }
  }, [profileCurrents]);
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
          showLikeBtn={showLikeBtn}
          updateFavoriteProfile={updateFavoriteProfile}
        />
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
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
  getSchools,
  getTeams,
  getFacilities,
  updateProfile,
  uploadPhoto,
};

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
