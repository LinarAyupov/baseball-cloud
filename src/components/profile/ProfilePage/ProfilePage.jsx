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
import { getHeaderUserData } from "../../../selectors/selectors";

const ProfilePage = ({ isAuth, history, logOut, headerUserData }) => {
  useEffect(() => {
    if (isAuth) {
      history.push("/profile");
    }
  }, [isAuth, history]);

  const { avatar, first_name, last_name } = headerUserData;
  return (
    <MainContainer>
      <Header
        isAuth={isAuth}
        avatarUrl={avatar}
        userName={first_name}
        userLastName={last_name}
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
    headerUserData: getHeaderUserData(state),
  };
};
export default connect(mapStateToProps, { logOut })(withRouter(ProfilePage));
