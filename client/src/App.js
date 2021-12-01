import { useState } from "react";

import IntroSection from "./Components/IntroSection/IntroSection.jsx";
import Navbar from "./Components/Navigation/Navbar.jsx";
import PiecesSection from "./Components/PiecesSection/PiecesSection.jsx";
import PiecePage from "./Components/PiecePage/PiecePage.jsx";
import UploadPage from "./Components/UploadPage/UploadPage.jsx";
import SignupPage from "./Components/SignupPage/SignupPage.jsx";
import LoginPage from "./Components/LoginPage/LoginPage.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutSection from "./Components/AboutSection/AboutSection.jsx";

import { injectStyle } from "react-toastify/dist/inject-style";
import ActivatePage from "./Components/ActivatePage/ActivatePage.jsx";
import SignoutPage from "./Components/SignoutPage/SignoutPage.jsx";
import { AuthContext } from "./helpers/AuthContext.js";

function App() {
  injectStyle();

  const [auth, setAuth] = useState();

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Router>
        <Navbar />
        <main>
          <Switch>
            <Route path="/piece/:pieceId" exact>
              <PiecePage></PiecePage>
            </Route>
            <Route path="/upload" exact>
              <UploadPage></UploadPage>
            </Route>
            <Route path="/signup" exact>
              <SignupPage></SignupPage>
            </Route>
            <Route path="/login" exact>
              <LoginPage></LoginPage>
            </Route>

            <Route path="/users/activate/:urlToken" exact>
              <ActivatePage></ActivatePage>
            </Route>

            <Route path="/signout" exact>
              <SignoutPage></SignoutPage>
            </Route>

            <Route path="/" exact>
              <IntroSection />
              <AboutSection></AboutSection>
              <PiecesSection />
            </Route>
          </Switch>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
