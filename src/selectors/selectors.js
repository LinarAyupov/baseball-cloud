export const getIsAuthState = (state) => state.authData.isAuth;
export const getIsFetchingState = (state) => state.authData.isFetching;
export const getUnauthorizedState = (state) => state.authData.unauthorized;
export const getProfileState = (state) => state.profileData.profileCurrents;
export const getSchoolsState = (state) => state.profileData.schools;
export const getTeamsState = (state) => state.profileData.teams;
export const getFacilitiesState = (state) => state.profileData.facilities;
export const getFirstPositionsState = (state) =>
  state.profileData.firstPositions;
export const getSecondPositionsState = (state) =>
  state.profileData.secondPositions;
export const getSchoolYearsState = (state) => state.profileData.schoolYears;
export const getHandsSidesState = (state) => state.profileData.handsSides;
