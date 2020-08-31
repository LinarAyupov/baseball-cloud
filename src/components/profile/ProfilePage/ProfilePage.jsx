import React, { useEffect } from "react";
import { withRouter, Route } from "react-router-dom";
import { MainContainer } from "../../../commonStyles/styled";
import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer";
import PlayerProfile from "../PlayerProfile";

const ProfilePage = ({ isAuth, history }) => {
  useEffect(() => {
    if (isAuth) {
      history.push("/profile");
    }
  }, [isAuth, history]);
  return (
    <MainContainer>
      <Header isAuth={isAuth} />
      <Route path="/profile" render={() => <PlayerProfile />} />
      <Footer />
    </MainContainer>
  );
};

export default withRouter(ProfilePage);
