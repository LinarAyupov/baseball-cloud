import {
  FETCH_PROFILE_CURRENTS,
  FETCH_SCHOOLS,
  FETCH_TEAMS,
  FETCH_FACILITIES,
  FETCH_LEADERBOARD_BATTING,
  FETCH_NOTIFICATIONS,
  FETCH_EVENTS,
  FETCH_BATTING_SUMMARY,
} from "../reducers/profileReducer";
import ApiServices from "../utils/ApiServices";

const fetchProfileCurrents = ({ profileCurrent }) => {
  return {
    type: FETCH_PROFILE_CURRENTS,
    payload: { profileCurrent },
  };
};
const fetchSchools = ({ schools }) => {
  return {
    type: FETCH_SCHOOLS,
    payload: { schools },
  };
};

const fetchTemas = ({ teams }) => {
  return {
    type: FETCH_TEAMS,
    payload: { teams },
  };
};

const fetchFacilities = ({ facilities }) => {
  return {
    type: FETCH_FACILITIES,
    payload: { facilities },
  };
};

const fetchLeaderboardBatting = ({ liderboardbatting }) => {
  return {
    type: FETCH_LEADERBOARD_BATTING,
    payload: { liderboardbatting },
  };
};

const fetchNotifications = ({ notifications }) => {
  return {
    type: FETCH_NOTIFICATIONS,
    payload: { notifications },
  };
};

const fetchEvents = ({ events }) => {
  return {
    type: FETCH_EVENTS,
    payload: { events },
  };
};

const fetchBattingSummary = ({ battingSummary }) => {
  return {
    type: FETCH_BATTING_SUMMARY,
    payload: { battingSummary },
  };
};

//----------------Thunks------------------------------

export const getProfileCurrents = () => {
  return async (dispatch) => {
    const { data } = await ApiServices.getProfileCurrents();
    const profileCurrent = data.data.current_profile;
    dispatch(fetchProfileCurrents({ profileCurrent }));
  };
};
export const getSchools = ({ searchText }) => {
  return async (dispatch) => {
    const data = await ApiServices.getSchoolList({ searchText });
    const { schools } = data.data.data;
    dispatch(fetchSchools(schools));
  };
};

export const getTeams = ({ searchText }) => {
  return async (dispatch) => {
    const { data } = await ApiServices.getTeamsList({ searchText });
    const { teams } = data.data.teams;
    dispatch(fetchTemas({ teams }));
  };
};
