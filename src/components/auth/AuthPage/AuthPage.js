import React from "react";
import { Route } from "react-router-dom";
import { ContentWrapper } from "./styled";
import Terms from "../Legal/Terms";
import Privacy from "../Legal/Privacy";
import LogIn from "../LogIn";
import Forgotten from "../Forgotten";
import Registration from "../Registration/Registration";
const AuthPage = () => {
  return (
    <ContentWrapper>
      <Route path="/registration" render={() => <Registration />} />
      <Route path="/forgotten" render={() => <Forgotten />} />
      <Route path="/login" render={() => <LogIn />} />
      <Route path="/legal/terms" render={() => <Terms />} />
      <Route path="/legal/privacy" render={() => <Privacy />} />
    </ContentWrapper>
  );
};

export default AuthPage;
