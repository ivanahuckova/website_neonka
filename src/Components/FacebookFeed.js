import React from 'react';
import styled from 'styled-components';

//Colors + Fonts
import * as colors from '../style/colors';
import * as fonts from '../style/fonts';

//Main component
export default class FacebookFeed extends React.Component {
    constructor() {
        super();
        this.state = {
            size: null,
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize);
        this.resize();
    }

    resize = () => {
        this.setState({size: window.innerWidth });
    }

    render() {
        const { size } = this.state
        return (
            <StyledContent id='facebookfeed'>
                <h3>Sledujte nás na Facebooku</h3>
                { size > 600 && <StyledIframe title="facebook feed" scrolling="yes" src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fneonkabanskabystrica&width=500&height=600&stream=true&header=true"></StyledIframe> }
                { size <= 600 && size > 500 && <StyledIframe title="facebook feed" scrolling="yes" src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fneonkabanskabystrica&width=400&height=500&stream=true&header=true"></StyledIframe> }
                { size <= 500 && <StyledIframe title="facebook feed" scrolling="yes" src="http://www.facebook.com/plugins/likebox.php?href=http%3A%2F%2Fwww.facebook.com%2Fneonkabanskabystrica&width=300&height=500&stream=true&header=true"></StyledIframe> }
            </StyledContent>
        );
    }
}

const StyledContent = styled.div`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10vh 15vw;
    @media screen and (max-width: 1500px) {
        padding: 0 10vw 10vh ;
    }
    @media screen and (max-width: 800px) {
        padding: 0 5vw 5vh;
    }
    @media screen and (max-width: 400px) {
        padding: 0 5vw 5vh;
    }
    h3 {
        color: ${colors.pinkColor};
        font-size: ${fonts.mainHeadingScreen};
        text-align: center;
        @media screen and (max-width: 500px) {
            font-size: ${fonts.mainHeadingMobile};
        }
    }
`;

const StyledIframe = styled.iframe`
    border: none;
    overflow: hidden;
    width: 500px;
    height: 600px;
    @media screen and (max-width: 600px) {
        width: 400px;
        height: 500px;
    }
    @media screen and (max-width: 500px) {
        width: 300px;
    }
`;

