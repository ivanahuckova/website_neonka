import React from 'react';
import styled from 'styled-components';

//Import icons/images

//Import components

//Main component
export default class Footer extends React.Component {
    render() {
        return <StyledFooter>Created in © 2019 by Neonka. All rights reserved.</StyledFooter>;
    }
}

const StyledFooter = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: darkgray;
    font-size: 0.9rem;
`;
