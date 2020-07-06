import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Styling
import "./App.css";

//Colors
import { pinkColor } from "./style/colors";

//Import components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import General from "./Components/GeneralScreen/GeneralScreen";
import Centrum from "./Components/Centrum/Centrum";

function App() {
  return (
    <Router>
      <StyledLandingContainer>
        <Navbar />
        <Switch>
          <Route exact path="/" render={(props) => <General {...props} />} />
          <Route
            exact
            path="/nervovo-svalove-centrum"
            render={(props) => <Centrum {...props} />}
          />
        </Switch>
      </StyledLandingContainer>
      <Footer />
    </Router>
  );
}

export default App;

const StyledLandingContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  letter-spacing: 1.1;
  line-height: 1.7;
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: ${pinkColor};
    }
  }
`;
