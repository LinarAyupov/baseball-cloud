import {
  ON_CHANGE_AUTH,
  FETCH_PROFILE_DATA,
  IS_FETCHING,
  UNAUTHORIZED,
} from "../reducers/authReducer";
import ApiServices from "../utils/ApiServices";
import StorageServices from "../utils/StorageServices";

const toggleIsFetching = () => {
  return {
    type: IS_FETCHING,
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

//-------------------Thunks--------------------

export const singIn = (userData) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching());
    try {
      const { data, headers } = await ApiServices.singIn({ userData });
      await StorageServices.setHeadersDataToStore({ headers });
      dispatch(fetchProfileData({ data }));
      dispatch(onChangeAuth());
      dispatch(toggleUnauthorized(true));
      dispatch(toggleIsFetching());
    } catch {
      dispatch(toggleUnauthorized(false));
      dispatch(toggleIsFetching());
    }
  };
};

export const singUp = ({ userData }) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching());
    try {
      const { data, headers } = await ApiServices.singUp({ userData });
      await StorageServices.setHeadersDataToStore({ headers });
      dispatch(fetchProfileData({ data }));
      dispatch(onChangeAuth());
      dispatch(toggleUnauthorized(true));
      dispatch(toggleIsFetching());
    } catch {
      dispatch(toggleUnauthorized(false));
      dispatch(toggleIsFetching());
    }
  };
};
