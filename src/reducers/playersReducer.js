export const FETCH_PLAYERS = "FETCH-LEADERBOARD-PLAYERS";
export const FETCH_UPDATE_FAVORITE_PROFILE = "FETCH-UPDATE-FAVORITE-PROFILE";
export const FETCH_PLAYERS_PROFILES = "FETCH-PLAYERS-PROFILES";

const initialState = {
  players: [],
  totalCount: 0,
  dateOptions: [
    { id: null, title: "All" },
    { id: "last_week", title: "Last Week" },
    { id: "last_month", title: "Last Month" },
  ],
  positionOptions: [
    { id: null, title: "All" },
    { id: "catcher", title: "Catcher" },
    { id: "first_base", title: "Firs Base" },
    { id: "second_base", title: "Second Base" },
    { id: "third_base", title: "Third Base" },
    { id: "outfield", title: "Outfield" },
    { id: "pitcher", title: "Pitcher" },
  ],
  favoriteOptions: [
    { id: null, title: "All" },
    { id: 1, title: "Favorite" },
  ],
  battingTypes: [
    { id: "exit_velocity", title: "Exit Velocity" },
    { id: "carry_distance", title: "Carry Distance" },
  ],
  pitcherTypes: [
    { id: "pitch_velocity", title: "Pitch Velocity" },
    { id: "spin_rate", title: "Spin Rate" },
  ],
  profileCountsOptions: ["10", "15", "25"],
};

const actionMap = {
  [FETCH_PLAYERS]: (state, action) => {
    return {
      ...state,
      players: action.payload.players,
    };
  },
  [FETCH_UPDATE_FAVORITE_PROFILE]: (state, action) => {
    return {
      ...state,
      players: state.players.map((player) => {
        if (
          player.batter_datraks_id === action.payload.id ||
          player.pitcher_datraks_id === action.payload.id ||
          player.id === action.payload.id
        ) {
          return {
            ...player,
            favorite: action.payload.favorite,
          };
        } else {
          return player;
        }
      }),
    };
  },
  [FETCH_PLAYERS_PROFILES]: (state, action) => {
    return {
      ...state,
      players: action.payload.profiles,
      totalCount: action.payload.total_count,
    };
  },
};

export default function playersReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
