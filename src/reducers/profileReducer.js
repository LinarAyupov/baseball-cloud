export const FETCH_PROFILE_CURRENTS = "FETCH-PROFILE-CURRENTS";
export const FETCH_SCHOOLS = "FETCH-SCHOOLS";
export const FETCH_TEAMS = "FETCH-TEAMS";
export const FETCH_FACILITIES = "FETCH-FACILITIES";
export const FETCH_LEADERBOARD_BATTING = "FETCH-LEADERBOARD-BATTING";
export const FETCH_NOTIFICATIONS = "FETCH-NOTIFICATIONS";
export const FETCH_EVENTS = "FETCH-EVENTS";

const initialState = {
  profileCurrents: {},
  schools: [],
  teams: [],
  facilities: [],
  leaderboardBatting: [],
  notifications: [],
  events: [],
  firstPositions: [
    { id: "catcher", name: "Catcher" },
    { id: "first_base", name: "First Base" },
    { id: "second_base", name: "Second Base" },
    { id: "shortstop", name: "Shortstop" },
  ],
  secondPositions: [
    { id: "", name: "_" },
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
  [FETCH_LEADERBOARD_BATTING]: (state, action) => {
    return {
      ...state,
      lidearboardBatting: action.payload.liderboardbatting,
    };
  },
  [FETCH_NOTIFICATIONS]: (state, action) => {
    return {
      ...state,
      notifications: action.payload.notifications,
    };
  },
  [FETCH_EVENTS]: (state, action) => {
    return {
      ...state,
      events: action.payload.events,
    };
  },
};

export default function profileReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
