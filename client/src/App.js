import IntroSection from "./Components/IntroSection/IntroSection.jsx";
import Navbar from "./Components/Navigation/Navbar.jsx";
import PiecesSection from "./Components/PiecesSection/PiecesSection.jsx";
import PiecePage from "./Components/PiecePage/PiecePage.jsx";
import UploadPage from "./Components/UploadPage/UploadPage.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutSection from "./Components/AboutSection/AboutSection.jsx";

function App() {
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
