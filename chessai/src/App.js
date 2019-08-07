import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Multiplayer from "./pages/Multiplayer";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Singleplayer from "./pages/Singleplayer"
import Signin from "./pages/Signin"


function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Homepage" component={Homepage} />
          <Route exact path="/Multiplayer" component={Multiplayer} />
          <Route exact path="/Singleplayer" component={Singleplayer} />
          <Route exact path="/Signin" component={Signin} />
          
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
