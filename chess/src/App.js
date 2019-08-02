import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Multiplayer from "./pages/Multiplayer";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Homepage" component={Homepage} />
          <Route exact path="/Multiplayer" component={Multiplayer} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
