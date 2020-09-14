export const ON_CHANGE_AUTH = "ON-CHANGE-AUTH";
export const FETCH_PROFILE_DATA = "SET-PROFILE-DATA";
export const IS_FETCHING = "IS-FETCHING";
export const UNAUTHORIZED = "UNAUTHORIZED";
export const TOGGLE_EMAIL_USED = "TOGGLE-EMAIL-USED";

const initialState = {
  unauthorized: false,
  emailUsed: false,
  isFetching: false,
  isAuth: false,
  profile: {},
};

const actionMap = {
  [IS_FETCHING]: (state, action) => {
    return {
      ...state,
      isFetching: action.payload.status,
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
  [TOGGLE_EMAIL_USED]: (state, action) => {
    return {
      ...state,
      emailUsed: action.payload.status,
    };
  },
};

export default function authReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
