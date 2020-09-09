export const FETCH_FILTERED_PLAYER = "FETCH-FILTERED-PLAYER";
export const FETCH_CHOOSED_PROFILE = "FETCH-CHOOSED-PROFILE";
const initialState = {
  filteredPlayers: [],
  choosedProfile: {},
};

const actionMap = {
  [FETCH_FILTERED_PLAYER]: (state, action) => {
    return {
      ...state,
      filteredPlayers: action.payload.profile_names,
    };
  },
  [FETCH_CHOOSED_PROFILE]: (state, action) => {
    return {
      ...state,
      choosedProfile: action.payload.profile,
    };
  },
};

export default function comparisonReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
