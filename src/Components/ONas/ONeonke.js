import React from "react";
import styled from "styled-components";

//Import icons/images
import Team from "../../assets/team.jpeg";

//Colors + Fonts
import * as colors from "../../style/colors";
import * as fonts from "../../style/fonts";

//Main component
export default function ONas() {
  return (
    <StyledTeamContainer>
      <div id="team"></div>
      <h3>O nás</h3>
      <StyledPeopleConatiner>
        <div>
          Sme 4 mladé pediatričky -{" "}
          <span className="name">Ninka</span>,{" "}
          <span className="name">Ľudka</span>,{" "}
          <span className="name">Žofka</span> a{" "}
          <span className="name">Mirka</span> z Detskej fakultnej 
          nemocnice v Banskej Bystrici. Pomáhame od roku 2019 deťom a 
          rodinám chronicky chorých detí, či už finančne, alebo 
          prostredníctvom zlepšovania podmienok na našom detskom 
          oddelení a ambulanciách.
        </div>
        <CarouselContainer>
          <div>
            <img className="main-img" src={Team} alt="fotografia teamu" />
          </div>
        </CarouselContainer>
      </StyledPeopleConatiner>
    </StyledTeamContainer>
  );
}

const StyledTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 100px;
  h3 {
    color: ${colors.pinkColor};
    font-size: ${fonts.mainHeadingScreen};
    text-align: center;
    @media screen and (max-width: 500px) {
      font-size: ${fonts.mainHeadingMobile};
    }
  }
  #team {
    position: absolute;
    margin-top: -100px;
  }
`;

const StyledPeopleConatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${fonts.textScreen};
  margin: 0 0 50px 0;
  display: flex;
  flex-direction: column;
  padding: 0 15vw;
  max-width: 100vw;
  box-sizing: border-box;
  .name {
    color: ${colors.pinkColor};
    font-weight: bold;
  }
  @media screen and (max-width: 1100px) {
    width: 70%;
    padding: 0;
  }
  @media screen and (max-width: 800px) {
    width: 80%;
  }
  @media screen and (max-width: 600px) {
    font-size: ${fonts.textMobile};
    align-items: flex-start;
    justify-content: flex-start;
    text-align: left;
  }
`;

const CarouselContainer = styled.div`
  margin-top: 30px;
  width: 75%;
  @media screen and (max-width: 1000px) {
    width: 90%;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  img {
    width: 100%;
  }
`;
