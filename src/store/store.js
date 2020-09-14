import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import authReducer from "../reducers/authReducer";
import profileReducer from "../reducers/profileReducer";
import StorageService from "../utils/StorageService";
import battingReducers from "../reducers/battingReducer";
import eventsReducer from "../reducers/eventsReducer";
import comparisonReducer from "../reducers/comparisonReducer";
import playersReducer from "../reducers/playersReducer";

const reducers = combineReducers({
  authData: authReducer,
  profileData: profileReducer,
  battingData: battingReducers,
  eventsData: eventsReducer,
  comparisonData: comparisonReducer,
  playersData: playersReducer,
});

const localState = StorageService.loadState();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  localState,
  composeEnhancers(applyMiddleware(reduxThunk))
);
store.subscribe(() => {
  localStorage.setItem("state", JSON.stringify(store.getState()));
});

export default store;
