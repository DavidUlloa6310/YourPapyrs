import IntroSection from "./Components/IntroSection/IntroSection.jsx";
import Navbar from "./Components/Navigation/Navbar.jsx";
import PiecesSection from "./Components/PiecesSection/PiecesSection.jsx";
import PiecePage from "./Components/PiecePage/PiecePage.jsx";
import UploadPage from "./Components/UploadPage/UploadPage.jsx";
import ProfilePage from "./Components/ProfilePage/ProfilePage";
import Login from "./Components/Auth/Login.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useCallback, useState } from "react";

import { AuthContext } from "./Components/Shared/context/auth-context.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  });

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
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
            <Route path="/users/:username" exact>
              <ProfilePage></ProfilePage>
            </Route>
            <Route path="/login" exact>
              <Login></Login>
            </Route>
            <Route path="/" exact>
              <IntroSection />
              <PiecesSection />
            </Route>
          </Switch>
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
