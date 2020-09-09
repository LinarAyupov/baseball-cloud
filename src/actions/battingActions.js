import {
  FETCH_BATTING_SUMMARY,
  FETCH_BATTING_LOG,
} from "../reducers/battingReducer";
import ApiServices from "../utils/ApiServices";

const fetchBattingSummary = ({ batting_summary }) => {
  return {
    type: FETCH_BATTING_SUMMARY,
    payload: { batting_summary },
  };
};

const fetchBattingLog = ({ batting_log, total_count }) => {
  return {
    type: FETCH_BATTING_LOG,
    payload: {
      batting_log,
      total_count,
    },
  };
};

//-------------------Thunks------------------------

export const getBattingSummary = ({ userId }) => {
  return async (dispatch) => {
    try {
      const { data } = await ApiServices.getBattingSummary({ userId });
      const { batting_summary } = data.data;
      dispatch(fetchBattingSummary({ batting_summary }));
    } catch (err) {
      throw err;
    }
  };
};

export const getBattingLog = ({
  userId,
  offset,
  count,
  pitcherType,
  searchName,
}) => {
  return async (dispatch) => {
    try {
      const { data } = await ApiServices.getBattingLog({
        userId,
        offset,
        count,
        pitcherType,
        searchName,
      });
      const { batting_log, total_count } = data.data.batting_log;
      dispatch(fetchBattingLog({ batting_log, total_count }));
    } catch (err) {
      throw err;
    }
  };
};
