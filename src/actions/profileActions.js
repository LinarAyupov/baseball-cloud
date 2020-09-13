import {
  FETCH_PROFILE_CURRENTS,
  FETCH_SCHOOLS,
  FETCH_TEAMS,
  FETCH_FACILITIES,
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

export const getPlayerProfile = ({ id }) => {
  return async (dispatch) => {
    const { data } = await ApiServices.getPlayerProfile({ id });
    const profileCurrent = data.data.profile;
    dispatch(fetchProfileCurrents({ profileCurrent }));
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
    try {
      dispatch(toggleIsFetching(true));
      const response = await ApiServices.uploadPhoto({ imageFile });
      if (response) {
        dispatch(toggleIsFetching(false));
      }
    } catch (err) {
      dispatch(toggleIsFetching(false));
    }
  };
};
