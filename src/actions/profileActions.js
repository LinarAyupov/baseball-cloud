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
import { toggleIsFetching } from "./authActions";
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

const fetchTeams = ({ teams }) => {
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

const fetchBattingSummary = ({ batting_summary }) => {
  return {
    type: FETCH_BATTING_SUMMARY,
    payload: { battingSummary: batting_summary },
  };
};

//----------------Thunks------------------------------

export const getProfileCurrents = () => {
  return async (dispatch) => {
    try {
      const { data } = await ApiServices.getProfileCurrents();
      const profileCurrent = data.data.current_profile;
      dispatch(fetchProfileCurrents({ profileCurrent }));
    } catch (err) {
      throw err;
    }
  };
};
export const getSchools = ({ searchText }) => {
  return async (dispatch) => {
    try {
      const data = await ApiServices.getSchoolList({ searchText });
      const { schools } = data.data.data;
      dispatch(fetchSchools(schools));
    } catch (err) {
      throw err;
    }
  };
};

export const getTeams = ({ searchText }) => {
  return async (dispatch) => {
    try {
      const { data } = await ApiServices.getTeamsList({ searchText });
      const { teams } = data.data.teams;
      dispatch(fetchTeams({ teams }));
    } catch (err) {
      throw err;
    }
  };
};

export const getFacilities = ({ searchText }) => {
  return async (dispatch) => {
    try {
      const { data } = await ApiServices.getFacilities({ searchText });
      const { facilities } = data.data.facilities;
      dispatch(fetchFacilities({ facilities }));
    } catch (err) {
      throw err;
    }
  };
};

export const updateProfile = ({ profileCounts }) => {
  return async (dispatch) => {
    try {
      dispatch(toggleIsFetching(true));
      const { data } = await ApiServices.updateProfile({ profileCounts });
      const profileCurrent = data.data.update_profile.profile;
      dispatch(fetchProfileCurrents({ profileCurrent }));
      dispatch(toggleIsFetching(false));
    } catch (err) {
      dispatch(toggleIsFetching(false));
    }
  };
};

export const uploadPhoto = ({ imageFile }) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const response = await ApiServices.uploadPhoto({ imageFile });
    if (response) {
      dispatch(toggleIsFetching(false));
    }
  };
};

export const getButtingSummary = ({ userId }) => {
  console.log(userId);
  return async (dispatch) => {
    const response = await ApiServices.getButtingSummary({ userId });
    console.log(response);
  };
};
