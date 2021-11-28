import IntroSection from "./Components/IntroSection/IntroSection.jsx";
import Navbar from "./Components/Navigation/Navbar.jsx";
import PiecesSection from "./Components/PiecesSection/PiecesSection.jsx";
import PiecePage from "./Components/PiecePage/PiecePage.jsx";
import UploadPage from "./Components/UploadPage/UploadPage.jsx";
import SignupPage from "./Components/SignupPage/SignupPage.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutSection from "./Components/AboutSection/AboutSection.jsx";

import { injectStyle } from "react-toastify/dist/inject-style";

function App() {
  injectStyle();

  return (
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
          <Route path="/" exact>
            <IntroSection />
            <AboutSection></AboutSection>
            <PiecesSection />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
