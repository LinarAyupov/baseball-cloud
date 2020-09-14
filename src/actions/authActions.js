import {
  ON_CHANGE_AUTH,
  FETCH_PROFILE_DATA,
  IS_FETCHING,
  UNAUTHORIZED,
  TOGGLE_EMAIL_USED,
} from "../reducers/authReducer";
import ApiService from "../utils/ApiService";
import StorageService from "../utils/StorageService";

export const toggleIsFetching = (status) => {
  return {
    type: IS_FETCHING,
    payload: { status },
  };
};

const toggleUnauthorized = (status) => {
  return {
    type: UNAUTHORIZED,
    payload: {
      status,
    },
  };
};

const onChangeAuth = () => {
  return {
    type: ON_CHANGE_AUTH,
  };
};

const fetchProfileData = ({ data }) => {
  return {
    type: FETCH_PROFILE_DATA,
    payload: { data },
  };
};

const toggleEmailUsed = (status) => {
  return {
    type: TOGGLE_EMAIL_USED,
    payload: { status },
  };
};

//-------------------Thunks--------------------

export const singIn = (userData) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    try {
      const { data, headers } = await ApiService.singIn({ userData });
      await StorageService.setHeadersDataToStore({ headers });
      dispatch(fetchProfileData({ data }));
      dispatch(onChangeAuth());
      dispatch(toggleUnauthorized(false));
      dispatch(toggleIsFetching(false));
    } catch {
      dispatch(toggleUnauthorized(true));
      dispatch(toggleIsFetching(false));
    }
  };
};

export const singUp = ({ userData }) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    try {
      const { data, headers } = await ApiService.singUp({ userData });
      await StorageService.setHeadersDataToStore({ headers });
      dispatch(fetchProfileData({ data }));
      dispatch(onChangeAuth());
      dispatch(toggleEmailUsed(false));
      dispatch(toggleIsFetching(false));
    } catch {
      dispatch(toggleEmailUsed(true));
      dispatch(toggleIsFetching(false));
    }
  };
};

export const logOut = () => {
  return async (dispatch) => {
    await localStorage.clear();
    dispatch(onChangeAuth());
  };
};
