import React from "react";
import { connect } from "react-redux";
import { getIsAuthState } from "./selectors/selectors";
import AuthPage from "./components/auth/AuthPage/AuthPage";
import ProfilePage from "./components/profile/ProfilePage";

function App({ isAuth }) {
  return (
    <>
      {" "}
      {isAuth ? <ProfilePage isAuth={isAuth} /> : <AuthPage isAuth={isAuth} />}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: getIsAuthState(state),
  };
};

export default connect(mapStateToProps, {})(App);
