import React, { useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Styling
import "./App.css";

//Colors
import { pinkColor } from "./style/colors";

//Import components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import WelcomeModal from "./Components/WelcomeModal";
import General from "./Components/ONas/Index";
import Galeria from "./Components/Galeria/Index";
import Podporte from "./Components/Podporte/Index";
import NervoveCentrum from "./Components/Projekty/NervoveCentrum";
import MikBeh from "./Components/Projekty/MikBeh";
import Fibroza from "./Components/Projekty/Fibroza";

function App() {
  const [showModal, setShowModal] = useState(
    !localStorage.getItem("modal2percenta")
  );

  const closeModal = () => {
    setShowModal(false);
    localStorage.setItem("modal2percenta", true);
    localStorage.removeItem("modalShown");
  };

  return (
    <Router>
      <StyledLandingContainer>
        {showModal && (
          <WelcomeModal
            visible={showModal}
            onClickAway={closeModal}
            closeModal={closeModal}
          />
        )}
        <Navbar />
        <Switch>
          <Route exact path="/" render={(props) => <General {...props} />} />
          <Route
            exact
            path="/galeria"
            render={(props) => <Galeria {...props} />}
          />
          <Route
            exact
            path="/nervovo-svalove-centrum"
            render={(props) => <NervoveCentrum {...props} />}
          />
          <Route
            exact
            path="/mikulassky-beh"
            render={(props) => <MikBeh {...props} />}
          />
          <Route
            exact
            path="/cysticka-fibroza"
            render={(props) => <Fibroza {...props} />}
          />

          <Route
            exact
            path="/podpora"
            render={(props) => <Podporte {...props} />}
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
