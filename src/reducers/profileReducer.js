export const FETCH_PROFILE_CURRENTS = "FETCH-PROFILE-CURRENTS";

const initialState = {
  profileCurrents: {},
};
const actionMap = {
  [FETCH_PROFILE_CURRENTS]: (state, action) => {
    return {
      ...state,
      profileCurrents: action.payload.profileCurrent,
    };
  },
};

export default function profileReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
