import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import authReducer from "../reducers/authReducer";
import profileReducer from "../reducers/profileReducer";
import StorageServices from "../utils/StorageServices";
import battingReducers from "../reducers/battingReducer";
import eventsReducer from "../reducers/eventsReducer";
import comparisonReducer from "../reducers/comparisonReducer";

const reducers = combineReducers({
  authData: authReducer,
  profileData: profileReducer,
  battingData: battingReducers,
  eventsData: eventsReducer,
  comparisonDate: comparisonReducer,
});

const localState = StorageServices.loadState();
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
