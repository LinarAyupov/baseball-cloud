import {
  FETCH_FILTERED_PLAYER,
  FETCH_CHOOSED_PROFILE,
} from "../reducers/comparisonReducer";
import { toggleIsFetching } from "./authActions";
import ApiServices from "../utils/ApiServices";

const fetchFilteredPlayers = ({ profile_names }) => {
  return {
    type: FETCH_FILTERED_PLAYER,
    payload: { profile_names },
  };
};

const fetchChoosedProfile = ({ profile }) => {
  return {
    type: FETCH_CHOOSED_PROFILE,
    payload: { profile },
  };
};

//-------------------Thunks----------------------------

export const filterPlayersName = ({ playerName, position }) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));

    try {
      const { data } = await ApiServices.filterProfileNames({
        playerName,
        position,
      });
      const { profile_names } = data.data.profile_names;
      dispatch(fetchFilteredPlayers({ profile_names }));
      dispatch(toggleIsFetching(false));
    } catch (err) {
      dispatch(toggleIsFetching(false));
    }
  };
};

export const getComparisonPlayer = ({ id }) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    try {
      const { data } = await ApiServices.getComparisonPlayer({ id });
      const { profile } = data.data;
      dispatch(fetchChoosedProfile({ profile }));
      dispatch(toggleIsFetching(false));
    } catch {
      dispatch(toggleIsFetching(false));
    }
  };
};
