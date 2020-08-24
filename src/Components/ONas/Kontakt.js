import React from "react";
import styled from "styled-components";

//Colors + Fonts
import * as colors from "../../style/colors";
import * as fonts from "../../style/fonts";

//Main component
export default class Ciele extends React.Component {
  render() {
    return (
      <StyledContent id="kontakt">
        <StyledContentSection>
          <StyledDescribtionCard>
            <h3 className="heading">Kontakt</h3>
            <div className="content-div">
              <strong>OZ Neónka</strong> <br />
              Námestie Ludvika Svobodu 4 <br />
              97409 Banská Bystrica
              <br />
              Slovakia
              <br />
              <br />
              smeneonka@gmail.com
            </div>
          </StyledDescribtionCard>
        </StyledContentSection>
      </StyledContent>
    );
  }
}

const StyledContent = styled.div`
  padding: 0 15vw;
  display: flex;
  @media screen and (max-width: 1500px) {
    padding: 0 10vw;
  }
  @media screen and (max-width: 800px) {
    padding: 0 5vw;
    margin-top: 20px;
  }
  @media screen and (max-width: 400px) {
    padding: 7vw;
    margin-top: 0px;
  }
`;

const StyledContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 10vh 0;
`;

const StyledDescribtionCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;

  .heading {
    color: ${colors.pinkColor};
  }
  @media screen and (max-width: 1000px) {
    padding-bottom: 50px;
  }
  h3 {
    font-size: ${fonts.mainHeadingScreen};
    @media screen and (max-width: 500px) {
      font-size: ${fonts.mainHeadingMobile};
    }
  }
  .content-div {
    font-size: ${fonts.textScreen};
    padding-bottom: 30px;
    text-align: left;
    @media screen and (max-width: 1200px) {
      padding-bottom: 10px;
    }
    @media screen and (max-width: 600px) {
      font-size: ${fonts.textMobile};
    }
    .pink {
      color: ${colors.pinkColor};
      font-weight: bold;
    }

    li {
      margin-top: 15px;
    }
  }
`;
