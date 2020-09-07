import React, { useEffect } from "react";
import { withRouter, Route } from "react-router-dom";
import { MainContainer } from "../../../commonStyles/styled";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";
import PlayerProfile from "../PlayerProfile";
import { connect } from "react-redux";

const ProfilePage = ({
  isAuth,
  history,
  avatarUrl,
  userName,
  userLastName,
}) => {
  useEffect(() => {
    if (isAuth) {
      history.push("/profile");
    }
  }, [isAuth, history]);
  return (
    <MainContainer>
      <Header
        isAuth={isAuth}
        avatarUrl={avatarUrl}
        userName={userName}
        userLastName={userLastName}
      />
      <Route path="/profile" render={() => <PlayerProfile />} />
      <Footer />
    </MainContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    avatarUrl: state.profileData.profileCurrents.avatar,
    userName: state.profileData.profileCurrents.first_name,
    userLastName: state.profileData.profileCurrents.last_name,
  };
};
export default connect(mapStateToProps)(withRouter(ProfilePage));
