export const ON_CHANGE_AUTH = "ON-CHANGE-AUTH";
export const FETCH_PROFILE_DATA = "SET-PROFILE-DATA";
export const IS_FETCHING = "IS-FETCHING";
export const UNAUTHORIZED = "UNAUTHORIZED";

const initialState = {
  unauthorized: false,
  isFetching: false,
  isAuth: false,
  profile: {},
};

const actionMap = {
  [IS_FETCHING]: (state) => {
    return {
      ...state,
      isFetching: !state.isFetching,
    };
  },
  [UNAUTHORIZED]: (state, action) => {
    return {
      ...state,
      unauthorized: action.payload.status,
    };
  },
  [ON_CHANGE_AUTH]: (state) => {
    return {
      ...state,
      isAuth: !state.isAuth,
    };
  },
  [FETCH_PROFILE_DATA]: (state, action) => {
    return {
      ...state,
      profile: action.payload.data,
    };
  },
};

export default function authReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
