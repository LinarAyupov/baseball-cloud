import {
  FETCH_BATTING_SUMMARY,
  FETCH_BATTING_LOG,
} from "../reducers/battingReducer";
import { toggleIsFetching } from "./authActions";
import ApiService from "../utils/ApiService";

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
    dispatch(toggleIsFetching(true));
    try {
      const { data } = await ApiService.getBattingSummary({ userId });
      const { batting_summary } = data.data;
      dispatch(fetchBattingSummary({ batting_summary }));
      dispatch(toggleIsFetching(false));
    } catch (err) {
      dispatch(toggleIsFetching(false));
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
    dispatch(toggleIsFetching(true));
    try {
      const { data } = await ApiService.getBattingLog({
        userId,
        offset,
        count,
        pitcherType,
        searchName,
      });
      const { batting_log, total_count } = data.data.batting_log;
      dispatch(fetchBattingLog({ batting_log, total_count }));
      dispatch(toggleIsFetching(false));
    } catch (err) {
      dispatch(toggleIsFetching(false));
    }
  };
};
