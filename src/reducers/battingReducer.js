export const FETCH_BATTING_SUMMARY = "FETCH-BATTING-SUMMARY";
export const FETCH_BATTING_LOG = "FETCH-BATTING-LOG";
const initialState = {
  topValues: [],
  averageValues: [],
  battingLog: [],
  totalCount: 0,
};

const actionMap = {
  [FETCH_BATTING_SUMMARY]: (state, action) => {
    return {
      ...state,
      topValues: action.payload.batting_summary.top_values,
      averageValues: action.payload.batting_summary.average_values,
    };
  },
  [FETCH_BATTING_LOG]: (state, action) => {
    return {
      ...state,
      battingLog: action.payload.batting_log,
      totalCount: action.payload.total_count,
    };
  },
};

export default function battingReducers(state = initialState, action) {
  const reduceFn = actionMap[action.type];
  return reduceFn ? reduceFn(state, action) : state;
}
