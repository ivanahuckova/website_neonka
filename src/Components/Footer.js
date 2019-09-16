import React from 'react';
import styled from 'styled-components';

//Main component
export default class Footer extends React.Component {
    render() {
        return (
        <StyledFooter>
            <div>OZ Neónka Banská Bystrica, DFNsP BB Námestie Ludvika Svobodu 4, Banská Bystrica, 974 09. Email: smeneonka@gmail.com</div> 
        </StyledFooter>
        )
    }
}

const StyledFooter = styled.div`
    height: 80px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: darkgray;
    font-size: 0.7rem;
    line-height: 1.15;
    @media screen and (max-width: 1000px) {
        padding: 0 10px;
        text-align: center;
    }
    @media screen and (max-width: 6000px) {
        padding: 0 10px;
        margin-top: 0px;
        text-align: center;
    }


`;
