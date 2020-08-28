import React, { useState, useEffect } from "react";
import * as colors from "../../style/colors";
import styled from "styled-components";
import PulseLoader from "react-spinners/PulseLoader";

export default function Galeria() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <StyledContainer onClick={(e) => e.preventDefault()}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "0px",
          paddingTop: "5px",
        }}
      >
        <PulseLoader size={8} color="#D3D3D3" loading={loading} />
      </div>
      <iframe
        title="instagram feed"
        src="https://snapwidget.com/embed/867385"
        className="snapwidget-widget"
        allowtransparency="true"
        frameBorder="0"
        scrolling="no"
        style={{
          border: "none",
          overflow: "hidden",
          width: "100%",
        }}
        onClick={(e) => e.preventDefault()}
      ></iframe>
      <div>
        Viac fotiek si môžete pozrieť na našom <a href="/">Instagrame</a>.
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  max-width: 100%;

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
    }
  }
`;
