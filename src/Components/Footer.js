import React from 'react';
import styled from 'styled-components';

//Main component
export default class Footer extends React.Component {
    render() {
        return <StyledFooter>Created in © 2019. Občianske združenie Neónka Banská Bystrica. Sídlo DFNsP BB Námestie Ludvika Svobodu 4, Banská Bystrica, 974 09. Email: smeneonka@gmail.com</StyledFooter>;
    }
}

const StyledFooter = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: darkgray;
    font-size: 0.9rem;
    @media screen and (max-width: 1000px) {
        padding: 0 10px;
        text-align: center;
    }
`;
