import React from "react";
import { MainContainer, ContentWrapper } from "./styled";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import Terms from "./components/Legal/Terms";
import Privacy from "./components/Legal/Privacy";
import LogIn from "./components/LogIn";

function App() {
  return (
    <BrowserRouter>
      <MainContainer>
        <Header />
        <ContentWrapper>
          <LogIn />
          <Route path="/legal/terms" render={() => <Terms />} />
          <Route path="/legal/privacy" render={() => <Privacy />} />
        </ContentWrapper>
        <Footer />
      </MainContainer>
    </BrowserRouter>
  );
}

export default App;
