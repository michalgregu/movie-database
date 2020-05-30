import React, { Component } from "react";
import styled from "styled-components";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { animateScroll as scroll } from "react-scroll";

import { getDiscover, setSelected } from "../../actions";
import Discover from "./DiscoverTags";
import Genres from "./GenresTags";
import Logo from "../../svg/movie-time-logo.svg";
import tmdb_logo from "../../svg/tmdb_logo.svg";

class Navbar extends Component {
  clickHome = async () => {
    scroll.scrollToTop({ smooth: "easeOutQuint" });
    this.props.push("/discover/popular");
    await this.props.setSelected("popular");
    this.props.getDiscover(this.props.selected);
  };

  render() {
    return (
      <Nav>
        <LogoWrapper onClick={this.clickHome}>
          <Img src={Logo} />
        </LogoWrapper>
        <Discover />
        <Genres />
        <CopyrightWrapper>
          <Copyright
            onClick={() => window.open("https://github.com/michalgregu")}
          >
            Copyright © Michal Gregulec <br />
            Powered by:
          </Copyright>
          <TmdbLogoWrapper>
            <Img
              src={tmdb_logo}
              onClick={() => window.open("https://www.themoviedb.org/")}
            />
          </TmdbLogoWrapper>
        </CopyrightWrapper>
      </Nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.config.selected,
  };
};

export default connect(mapStateToProps, { push, getDiscover, setSelected })(
  Navbar
);

const Nav = styled.div`
  width: 230px;
  position: fixed;
  overflow-y: scroll;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  top: 40px;
  bottom: 0;
  border-right: 1px solid #ffa700;
  &::-webkit-scrollbar {
    width: 0 !important;
  }
`;

const LogoWrapper = styled.div`
  cursor: pointer;
  margin: 50px auto;
`;

const Img = styled.img`
  width: 100%;
`;

const CopyrightWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Copyright = styled.p`
  margin-top: 50px;
  cursor: pointer;
  text-align: center;
  line-height: 2;
`;

const TmdbLogoWrapper = styled.div`
  width: 40%;
  margin-bottom: 50px;
  text-align: center;
  cursor: pointer;
`;
