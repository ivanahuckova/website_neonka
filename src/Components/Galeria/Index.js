import React, { useState, useEffect } from "react";
import * as colors from "../../style/colors";
import styled from "styled-components";
import galeria from "../../assets/galeria.png";

export default function Galeria() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <StyledContainer onClick={(e) => e.preventDefault()}>
    <div style={{ marginTop: '30px'}}>Viac fotiek si môžete pozrieť na našom <a href="https://www.instagram.com/smeneonka/" rel="noopener noreferrer" target="_blank">Instagrame</a> 🙂</div>
      <img src={galeria} style={{maxWidth: '70vw', marginTop: '30px', cursor: 'pointer'}} onClick={() => window.open("https://www.instagram.com/smeneonka/", '_blank', 'noopener,noreferrer')}/>


    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  max-width: 100%;
  font-weight: bold;

  padding-top: 85px;
  @media screen and (min-width: 1000px) {
    padding-right: 200px;
    padding-left: 200px;
  }
  div {
    margin-top: 13px;
    text-align: center;
    a {
      color: ${colors.pinkColor};
      weight: bold;
    }
  }
`;
