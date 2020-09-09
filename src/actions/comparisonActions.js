import {
  FETCH_FILTERED_PLAYER,
  FETCH_CHOOSED_PROFILE,
} from "../reducers/comparisonReducer";

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

export const filterPlayersName = ({ playerName }) => {
  return async (dispatch) => {
    try {
      const { data } = await ApiServices.filterProfileNames({ playerName });
      const { profile_names } = data.data.profile_names;
      dispatch(fetchFilteredPlayers({ profile_names }));
    } catch (err) {
      throw err;
    }
  };
};

export const getComparisonPlayer = ({ id }) => {
  return async (dispatch) => {
    const { data } = await ApiServices.getComparisonPlayer({ id });
    const { profile } = data.data;
    dispatch(fetchChoosedProfile({ profile }));
  };
};
