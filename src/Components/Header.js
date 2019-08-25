import React from 'react';
import styled from 'styled-components';

//logo
import logoText from '../assets/logo_text.svg';

//Main component
export default class Header extends React.Component {
    render() {
        return (
            <StyledNavbar>
                <NavbarContainer>
                    <LeftNavbarContainer>
                        <LogoContainer>
                            <a href='/'>
                                <img className='logo' src={logoText} alt='logo' />
                            </a>
                        </LogoContainer>
                        <div className='navbar-item'>
                            {' '}
                            <a href='#team' className='mobile-none'>
                                O nás
                            </a>
                        </div>
                        <div className='navbar-item'>
                            {' '}
                            <a href='#media' className='mobile-none'>
                                Média
                            </a>
                        </div>
                    </LeftNavbarContainer>
                    <MiddleNavbarContainer />
                </NavbarContainer>
            </StyledNavbar>
        );
    }
}

const StyledNavbar = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`;

const NavbarContainer = styled.div`
    width: 100%;
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .navbar-item {
        font-size: 15px;
        cursor: pointer;
        &:hover {
            color: #00bc98;
        }
    }
    .sign {
        font-weight: 600;
    }
    .mobile-none {
        @media screen and (max-width: 600px) {
            display: none;
        }
    }
`;

const LeftNavbarContainer = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1200px) {
        width: 35%;
    }
    @media screen and (max-width: 1000px) {
        width: 40%;
    }
    @media screen and (max-width: 800px) {
        width: 70%;
    }
    @media screen and (max-width: 600px) {
        width: 80%;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .logo {
        padding-top: 10px;
        width: 150px;
    }
`;
const MiddleNavbarContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1000px) {
        width: 30%;
    }
    @media screen and (max-width: 800px) {
        width: 10%;
    }
    @media screen and (max-width: 600px) {
        display: none;
    }
`;
