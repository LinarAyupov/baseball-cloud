import {
  FETCH_PLAYERS,
  FETCH_UPDATE_FAVORITE_PROFILE,
  FETCH_PLAYERS_PROFILES,
} from "../reducers/playersReducer";
import { toggleIsFetching } from "./authActions";
import ApiService from "../utils/ApiService";

const fetchPlayers = ({ players }) => {
  return {
    type: FETCH_PLAYERS,
    payload: { players },
  };
};

const fetchUpdateFavoriteProfile = ({ id, favorite }) => {
  return {
    type: FETCH_UPDATE_FAVORITE_PROFILE,
    payload: { id, favorite },
  };
};

const fetchPlayersProfiles = ({ profiles, total_count }) => {
  return {
    type: FETCH_PLAYERS_PROFILES,
    payload: { profiles, total_count },
  };
};

//------------------------Thunks----------------------

export const getLeaderboardPlayers = ({
  type,
  date,
  position,
  school,
  age,
  favorite,
  team,
  tab,
}) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    try {
      let response = {};
      let players = [];
      if (tab === "batting") {
        response = await ApiService.getLeaderboardBatting({
          type,
          date,
          position,
          school,
          age,
          favorite,
          team,
        });

        players = response.data.data.leaderboard_batting.leaderboard_batting;
      } else {
        response = await ApiService.getLeaderboardPitching({
          type,
          date,
          position,
          school,
          age,
          favorite,
          team,
        });
        players = response.data.data.leaderboard_pitching.leaderboard_pitching;
      }

      dispatch(fetchPlayers({ players }));
      dispatch(toggleIsFetching(false));
    } catch {
      dispatch(toggleIsFetching(false));
    }
  };
};

export const updateFavoriteProfile = ({ id, favorite }) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));

    try {
      const { data } = await ApiService.updateFavoriteProfile({
        id,
        favorite,
      });
      const favoriteStatus = data.data.update_favorite_profile.favorite;
      dispatch(fetchUpdateFavoriteProfile({ id, favorite: favoriteStatus }));
      dispatch(toggleIsFetching(false));
    } catch {
      dispatch(toggleIsFetching(false));
    }
  };
};

export const getPlayersProfiles = ({
  profiles_count,
  offset,
  school,
  position,
  team,
  age,
  favorite,
  player_name,
}) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    try {
      const { data } = await ApiService.getPlayersProfiles({
        profiles_count,
        offset,
        school,
        position,
        team,
        age,
        favorite,
        player_name,
      });
      const { profiles, total_count } = data.data.profiles;
      dispatch(fetchPlayersProfiles({ profiles, total_count }));
      dispatch(toggleIsFetching(false));
    } catch {
      dispatch(toggleIsFetching(false));
    }
  };
};
