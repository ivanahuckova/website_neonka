import React from 'react';
import styled from 'styled-components';

//logo
import logoText from '../assets/logo_text.svg';

//Colors + Fonts
import * as colors from '../style/colors';

//Main component
export default class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            idx: 0,
        }
        this.colors = [colors.yellowColor, colors.pinkColor]
        this.fonts = [colors.pinkColor, colors.yellowColor]
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, true);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, true);
    }
    handleScroll = () => {
        if (window.scrollY < 30) {
            this.setState({idx: 0});
        }
        else if (window.scrollY >= 30) {
            this.setState({idx: 1});
        }
    }
    
    render() {
        const { idx } = this.state
        const colorClass = idx ? 'yellow' : 'pink'

        return (
            <StyledNavbar style={{backgroundColor: this.colors[this.state.idx]}}>
                <NavbarContainer>
                    <NavbarItemsContainer>
                        <LogoContainer >
                            <a href='/'>
                                <img className='logo' src={logoText} alt='logo' />
                            </a>
                        </LogoContainer>
                        <div className='navbar-item'>
                            {' '}
                            <a href='#team' className={`${colorClass} mobile-none`}>
                                O nás
                            </a>
                        </div>
                        <div className='navbar-item'>
                            {' '}
                            <a href='#media' className={`${colorClass} mobile-none`}>
                                Médiá
                            </a>
                        </div>
                        <div className='navbar-item'>
                            {' '}
                            <a href='https://www.facebook.com/pg/neonkabanskabystrica/' className={`${colorClass} mobile-none`} rel='noopener noreferrer' target='_blank'>
                                Sledujte nás na FB
                            </a>
                        </div>
                        <div className='navbar-item'>
                            {' '}
                            <a href='#podporte' className='pink' style={{color: this.fonts[this.state.idx]}}>
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
    padding-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;

`;

const NavbarContainer = styled.div`
    width: 100%;
    margin-top: 18px;
    padding: 0 15vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1500px) {
        padding: 0 10vw;
    }
    
    @media screen and (max-width: 800px) {
        padding: 0 7vw;
    }

    .navbar-item {
        font-size: 16px;
        cursor: pointer;

        .yellow {
            color: black;
            &:hover {
                color: ${colors.yellowColor}
            }
        }
        .pink {
            color: black;
            &:hover {
                color: ${colors.pinkColor}
            }
        }
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
    .pink {
        color: ${colors.pinkColor};
    }
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
