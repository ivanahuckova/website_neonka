import React from "react";
import styled from "styled-components";
import Menu, { SubMenu, Item as MenuItem } from "rc-menu";

import { css } from "emotion";
import "rc-menu/assets/index.css";

//Assets
import logoText from "../assets/logo_text.svg";

//Colors + Fonts
import * as colors from "../style/colors";

//Main component

export default class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      idx: 0,
    };
    this.colors = [colors.yellowColor, colors.pinkColor];
    this.fonts = [colors.pinkColor, colors.yellowColor];
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, true);
  }
  handleScroll = () => {
    if (window.scrollY < 30) {
      this.setState({ idx: 0 });
    } else if (window.scrollY >= 30) {
      this.setState({ idx: 1 });
    }
  };

  render() {
    return (
      <StyledNavbar style={{ backgroundColor: this.colors[this.state.idx] }}>
        <NavbarContainer>
          <NavbarItemsContainer>
            <CommonMenu mode="horizontal" openAnimation="slide-up" />
            <LogoContainer>
              <a href="/">
                <img className="logo" src={logoText} alt="logo" />
              </a>
            </LogoContainer>
          </NavbarItemsContainer>
        </NavbarContainer>
      </StyledNavbar>
    );
  }
}

const menuItemCss = css`
  color: black;
  cursor: pointer;
  z-index: 1000;
  position: static;

  &:hover,
  &:active {
    background-color: ${colors.pinkColor} !important;
    border-radius: 3px;
  }
`;

const subMenuItemCss = css`
  color: black;
  z-index: 100;
  * {
    &:hover,
    &:active {
      background-color: ${colors.pinkColor} !important;
      border-radius: 3px;
    }
  }
`;

const CommonMenu = (props) => {
  const updateLocation = (href) => {
    window.location.replace(href);
  };

  return (
    <Menu
      selectedKeys={["1"]}
      mode={props.mode}
      openAnimation={props.openAnimation}
      defaultOpenKeys={props.defaultOpenKeys}
    >
      {[
        <SubMenu className={subMenuItemCss} title="Projekty" key="2">
          <MenuItem
            className={menuItemCss}
            key="2-1"
            onClick={() => updateLocation("/mikulassky-beh")}
          >
            Mikulášsky beh
          </MenuItem>
          <MenuItem
            className={menuItemCss}
            key="2-2"
            onClick={() => updateLocation("/nervovo-svalove-centrum")}
          >
            Centrum nervovo-svalových ochorení
          </MenuItem>
          <MenuItem
            className={menuItemCss}
            key="2-3"
            onClick={() => updateLocation("/cysticka-fibroza")}
          >
            Diagnostika cystickej fibrózy
          </MenuItem>
        </SubMenu>,
        <SubMenu className={subMenuItemCss} title="O nás" key="1">
          <MenuItem
            className={menuItemCss}
            key="1-1"
            onClick={() => updateLocation("/#team")}
          >
            OZ Neónka
          </MenuItem>

          <MenuItem
            className={menuItemCss}
            key="1-2"
            onClick={() => updateLocation("/#ciele")}
          >
            Naše ciele
          </MenuItem>
          <MenuItem
            className={menuItemCss}
            key="1-3"
            onClick={() => updateLocation("/#media")}
          >
            Videli ste nás
          </MenuItem>
          <MenuItem
            className={menuItemCss}
            key="1-4"
            onClick={() =>
              updateLocation("https://www.facebook.com/neonkabanskabystrica")
            }
          >
            Facebook
          </MenuItem>
          <MenuItem
            className={menuItemCss}
            key="1-5"
            onClick={() => updateLocation("/#kontakt")}
          >
            Kontakt
          </MenuItem>
        </SubMenu>,

        <MenuItem
          className={menuItemCss}
          key="3"
          onClick={() => updateLocation("/podpora")}
          title="Podporte nás"
        >
          Podporte nás
        </MenuItem>,

        <MenuItem
          className={menuItemCss}
          key="4"
          onClick={() => updateLocation("/galeria")}
        >
          Galéria
        </MenuItem>,
      ]}
    </Menu>
  );
};

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
    padding: 0;
  }

  .navbar-item {
    font-size: 16px;
    cursor: pointer;

    img {
      width: 50px;
    }

    .yellow {
      color: black;
      &:hover {
        color: ${colors.yellowColor};
      }
    }
    .pink {
      color: black;
      &:hover {
        color: ${colors.pinkColor};
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
  align-items: flex-start;

  justify-content: space-between;
  .pink {
    color: ${colors.pinkColor};
  }

  @media screen and (max-width: 1200px) {
    width: 95%;
  }
  @media screen and (max-width: 400px) {
    align-items: flex-end;
  }
  * {
    background: transparent;
    border: none;
    color: black;
    cursor: pointer;

    .rc-menu-submenu-title {
      background-color: ${colors.pinkColor};
    }

    .rc-menu-item {
      color: black;
    }
    .rc-menu-submenu-title {
      background-color: transparent;
      border: none;
      color: black;
    }

    .rc-menu-submenu-active {
      background: transparent;
      border: none;
      color: black;
    }
    &:hover,
    &:active {
      background: transparent;
      border: none;
      color: black;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  @media screen and (max-width: 400px) {
    align-items: flex-end;
  }
  .logo {
    padding-top: 10px;
    width: 150px;
    @media screen and (max-width: 400px) {
      width: 100px;
    }
  }
`;
