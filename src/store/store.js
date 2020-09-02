import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import authReducer from "../reducers/authReducer";
import profileReducer from "../reducers/profileReducer";
import StorageServices from "../utils/StorageServices";

const reducers = combineReducers({
  authData: authReducer,
  profileData: profileReducer,
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
