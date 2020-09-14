import { FETCH_EVENTS } from "../reducers/eventsReducer";
import ApiService from "../utils/ApiService";
import { toggleIsFetching } from "./authActions";
const fetchEvents = ({ events, total_count }) => {
  return {
    type: FETCH_EVENTS,
    payload: {
      events,
      total_count,
    },
  };
};

//--------------Thunks-------------------------

export const getProfileEvents = ({
  userId,
  date,
  eventType,
  count,
  offset,
}) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    try {
      const { data } = await ApiService.getProfileEvents({
        userId,
        date,
        eventType,
        count,
        offset,
      });
      const { events, total_count } = data.data.profile_events;
      dispatch(fetchEvents({ events, total_count }));
      dispatch(toggleIsFetching(false));
    } catch (err) {
      dispatch(toggleIsFetching(false));
    }
  };
};
