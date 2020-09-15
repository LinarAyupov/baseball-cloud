export const FETCH_PROFILE_CURRENTS = "FETCH-PROFILE-CURRENTS";
export const FETCH_SCHOOLS = "FETCH-SCHOOLS";
export const FETCH_TEAMS = "FETCH-TEAMS";
export const FETCH_FACILITIES = "FETCH-FACILITIES";
export const HEADER_USER_DATA = "HEADER-USER-DATA";

const initialState = {
  profileCurrents: {},
  headerUserData: { first_name: "", last_name: "", avatar: "" },
  schools: [],
  teams: [],
  facilities: [],
  firstPositions: [
    { id: "catcher", name: "Catcher" },
    { id: "first_base", name: "First Base" },
    { id: "second_base", name: "Second Base" },
    { id: "shortstop", name: "Shortstop" },
  ],
  secondPositions: [
    { id: "", name: "-" },
    { id: "catcher", name: "Catcher" },
    { id: "first_base", name: "First Base" },
    { id: "second_base", name: "Second Base" },
    { id: "shortstop", name: "Shortstop" },
  ],
  schoolYears: [
    { id: "freshman", name: "Freshman" },
    { id: "sophomore", name: "Sophomore" },
    { id: "junior", name: "Junior" },
    { id: "senior", name: "Senior" },
  ],
  handsSides: [
    { id: "r", name: "R" },
    { id: "l", name: "L" },
  ],
};
const actionMap = {
  [FETCH_PROFILE_CURRENTS]: (state, action) => {
    return {
      ...state,
      profileCurrents: action.payload.profileCurrent,
    };
  },
  [HEADER_USER_DATA]: (state, action) => {
    return {
      ...state,
      headerUserData: {
        first_name: action.payload.first_name,
        last_name: action.payload.last_name,
        avatar: action.payload.avatar,
      },
    };
  },
  [FETCH_SCHOOLS]: (state, action) => {
    return {
      ...state,
      schools: action.payload.schools,
    };
  },
  [FETCH_TEAMS]: (state, action) => {
    return {
      ...state,
      teams: action.payload.teams,
    };
  },
  [FETCH_FACILITIES]: (state, action) => {
    return {
      ...state,
      facilities: action.payload.facilities,
    };
  },
};

export default function profileReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
