export const FETCH_EVENTS = "FETCH-EVENTS";
const initialState = {
  events: [],
  totalCount: 0,
};

const actionMap = {
  [FETCH_EVENTS]: (state, action) => {
    return {
      ...state,
      events: action.payload.events,
      totalCount: action.payload.total_count,
    };
  },
};

export default function eventsReducer(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
