import React, { useEffect } from "react";
import { withRouter, Route } from "react-router-dom";
import { MainContainer } from "../../../commonStyles/styled";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";
import PlayerProfile from "../PlayerProfile";
import LeaderBoard from "../LeaderBoard";
import { connect } from "react-redux";
import Network from "../Network/Network";
import { logOut } from "../../../actions/authActions";

const ProfilePage = ({
  isAuth,
  history,
  avatarUrl,
  userName,
  userLastName,
  logOut,
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
        logOut={logOut}
      />
      <Route exact path="/profile/:userId?" render={() => <PlayerProfile />} />
      <Route exact path="/leaderboard" render={() => <LeaderBoard />} />
      <Route exact path="/network" render={() => <Network />} />
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
export default connect(mapStateToProps, { logOut })(withRouter(ProfilePage));
