import {
  FETCH_PROFILE_CURRENTS,
  FETCH_SCHOOLS,
  FETCH_TEAMS,
  FETCH_FACILITIES,
  HEADER_USER_DATA,
} from "../reducers/profileReducer";
import { toggleIsFetching } from "./authActions";
import ApiService from "../utils/ApiService";

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

const setHeaderUserData = ({ avatar, first_name, last_name }) => {
  return {
    type: HEADER_USER_DATA,
    payload: { avatar, first_name, last_name },
  };
};

//----------------Thunks------------------------------

export const getProfileCurrents = () => {
  return async (dispatch) => {
    try {
      const { data } = await ApiService.getProfileCurrents();
      const profileCurrent = data.data.current_profile;
      dispatch(fetchProfileCurrents({ profileCurrent }));
      const { avatar, first_name, last_name } = profileCurrent;
      dispatch(setHeaderUserData({ avatar, first_name, last_name }));
    } catch (err) {
      throw err;
    }
  };
};

export const getPlayerProfile = ({ id }) => {
  return async (dispatch) => {
    const { data } = await ApiService.getPlayerProfile({ id });
    const profileCurrent = data.data.profile;
    dispatch(fetchProfileCurrents({ profileCurrent }));
  };
};

export const getSchools = ({ searchText }) => {
  return async (dispatch) => {
    try {
      const data = await ApiService.getSchoolList({ searchText });
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
      const { data } = await ApiService.getTeamsList({ searchText });
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
      const { data } = await ApiService.getFacilities({ searchText });
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
      const { data } = await ApiService.updateProfile({ profileCounts });
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
    try {
      dispatch(toggleIsFetching(true));
      const response = await ApiService.uploadPhoto({ imageFile });
      if (response) {
        dispatch(toggleIsFetching(false));
      }
    } catch (err) {
      dispatch(toggleIsFetching(false));
    }
  };
};
