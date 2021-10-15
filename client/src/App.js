import IntroSection from "./Components/IntroSection/IntroSection.jsx";
import Navbar from "./Components/Navigation/Navbar.jsx";
import PiecesSection from "./Components/PiecesSection/PiecesSection.jsx";
import PiecePage from "./Components/PiecePage/PiecePage.jsx";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route path="/" exact>
            <IntroSection />
            <PiecesSection />
          </Route>
          <Route path="/piece/:pieceId" exact>
            <PiecePage></PiecePage>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
