import React from "react";
import * as styles from "./App.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import Terms from "./components/Legal/Terms";
import Privacy from "./components/Legal/Privacy";
import LogIn from "./components/LogIn/LogIn";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.mainContainer}>
        <Header />
        <div className={styles.contentWrapper}>
          <LogIn />
          <Route path="/legal/terms" render={() => <Terms />} />
          <Route path="/legal/privacy" render={() => <Privacy />} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
