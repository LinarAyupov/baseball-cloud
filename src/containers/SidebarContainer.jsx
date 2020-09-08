import React, { useEffect, useState } from "react";
import EditSidebar from "../components/profile/EditSidebar";
import InfoSidebar from "../components/profile/InfoSidebar/InfoSidebar";
const SidebarContainer = ({
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
}) => {
  const [isEdit, setIsEdit] = useState(false);
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
        />
      )}
    </>
  );
};

export default SidebarContainer;
