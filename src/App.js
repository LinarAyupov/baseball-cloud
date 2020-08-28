import React from "react";
import { MainContainer } from "./styled";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { BrowserRouter } from "react-router-dom";
import AuthPage from "./components/auth/AuthPage/AuthPage";
import { connect } from "react-redux";

function App({ isAuth }) {
  return (
    <BrowserRouter>
      <MainContainer>
        <Header />
        <AuthPage />
        <Footer />
      </MainContainer>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authData.isAuth,
  };
};

export default connect(mapStateToProps, {})(App);
