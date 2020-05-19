import React, { Component } from "react";
import styled from "styled-components";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import { animateScroll as scroll } from "react-scroll";

import { getDiscover } from "../../actions";
import Discover from "./DiscoverTags";
import Genres from "./GenresTags";
import Logo from "../../svg/movie-time-logo.svg";

class Navbar extends Component {
  clickHome = () => {
    scroll.scrollToTop({ smooth: "easeOutQuint" });
    this.props.push("/discover/popular");
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
        <Copyright></Copyright>
      </Nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.config.selected,
  };
};

export default connect(mapStateToProps, { push, getDiscover })(Navbar);

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

const Copyright = styled.div``;
