import React from "react";
import { MainContainer, ContentWrapper } from "./styled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import Terms from "./components/AuthPage/Legal/Terms";
import Privacy from "./components/AuthPage/Legal/Privacy";
import LogIn from "./components/AuthPage/LogIn";
import Forgotten from "./components/AuthPage/Forgotten";

function App() {
  return (
    <BrowserRouter>
      <MainContainer>
        <Header />
        <ContentWrapper>
          <Route path="/forgotten" render={() => <Forgotten />} />
          <Route path="/login" render={() => <LogIn />} />
          <Route path="/legal/terms" render={() => <Terms />} />
          <Route path="/legal/privacy" render={() => <Privacy />} />
        </ContentWrapper>
        <Footer />
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
