import React, { useEffect } from "react";
import { Route, withRouter } from "react-router-dom";
import { MainContainer } from "../../../commonStyles/styled";
import { ContentWrapper } from "./styled";
import Terms from "../Legal/Terms";
import Privacy from "../Legal/Privacy";
import LogIn from "../LogIn";
import Forgotten from "../Forgotten";
import Registration from "../Registration/Registration";
import Header from "../../layout/Header";
import Footer from "../../layout/Footer";
const AuthPage = ({ isAuth, history }) => {
  useEffect(() => {
    if (!isAuth) {
      history.push("/login");
    }
  }, [isAuth, history]);
  return (
    <MainContainer>
      <Header />
      <ContentWrapper>
        <Route path="/registration" render={() => <Registration />} />
        <Route path="/forgotten" render={() => <Forgotten />} />
        <Route path="/login" render={() => <LogIn />} />
        <Route path="/legal/terms" render={() => <Terms />} />
        <Route path="/legal/privacy" render={() => <Privacy />} />
      </ContentWrapper>
      <Footer />
    </MainContainer>
  );
};

export default withRouter(AuthPage);
