import React from 'react';
import styled from 'styled-components';

//logo
import logoText from '../assets/logo_text.svg';

//Main component
export default class Navbar extends React.Component {
    render() {
        return (
            <StyledNavbar>
                <NavbarContainer>
                    <NavbarItemsContainer>
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
                        <div className='navbar-item'>
                            {' '}
                            <a href='https://www.facebook.com/pg/neonkabanskabystrica/' className='mobile-none' rel='noopener noreferrer' target='_blank'>
                                Sledujte nás na FB
                            </a>
                        </div>
                        <div className='navbar-item'>
                            {' '}
                            <a href='#podporte' className='mobile-none'>
                                Podporte nás
                            </a>
                        </div>
                    </NavbarItemsContainer>
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
    margin-top: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .navbar-item {
        font-size: 16px;
        cursor: pointer;
    }
    .mobile-none {
        @media screen and (max-width: 650px) {
            display: none;
        }
    }
`;

const NavbarItemsContainer = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1200px) {
        width: 95%;
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
