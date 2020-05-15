import React, { Component } from "react";
import styled from "styled-components";

import Discover from "./Discover";
import Genres from "./Genres";
import Logo from "../../svg/movie-time-logo.svg";

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <LogoWrapper>
          <Img src={Logo} />
        </LogoWrapper>
        <Discover />
        <Genres />
        <Copyright></Copyright>
      </Nav>
    );
  }
}

export default Navbar;

const Nav = styled.div`
  width: 250px;
  position: fixed;
  overflow-y: scroll;
  top: 0;
  bottom: 0;
  border-right: 1px solid #ffa700;
`;

const LogoWrapper = styled.div`
  cursor: pointer;
  margin: 50px auto;
`;

const Img = styled.img`
  width: 100%;
`;

const Copyright = styled.div``;
