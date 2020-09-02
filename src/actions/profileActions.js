import { FETCH_PROFILE_CURRENTS } from "../reducers/profileReducer";
import ApiServices from "../utils/ApiServices";

const fetchProfileCurrents = ({ profileCurrent }) => {
  return {
    type: FETCH_PROFILE_CURRENTS,
    payload: { profileCurrent },
  };
};

//----------------Thunks------------------------------

export const getProfileCurrents = () => {
  return async (dispatch) => {
    const { data } = await ApiServices.getProfileCurrents();
    const profileCurrent = data.data.current_profile;
    dispatch(fetchProfileCurrents({ profileCurrent }));
  };
};
