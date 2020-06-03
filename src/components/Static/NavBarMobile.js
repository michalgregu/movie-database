import React, { Component } from "react";
import styled from "styled-components";

import Discover from "./DiscoverTags";
import Genres from "./GenresTags";
import { connect } from "react-redux";

export class NavBarMobile extends Component {
  render() {
    return (
      <Nav isMobileOpen={this.props.isMobileOpen}>
        <Discover />
        <Genres />
      </Nav>
    );
  }
}

const mapStateToProps = (state) => {
  return { isMobileOpen: state.config.isMobileOpen };
};

export default connect(mapStateToProps)(NavBarMobile);

const Nav = styled.div`
  padding-top: 30px;
  z-index: 100;
  width: 230px;
  height: 100%;
  position: fixed;
  overflow-y: scroll;
  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  top: 70px;
  bottom: 0;
  left: 0;
  background-color: #fff;

  &::-webkit-scrollbar {
    width: 0 !important;
  }

  transition: transform 0.3s ease-in-out;
  transform: ${(props) =>
    props.isMobileOpen ? "default" : "translateX(-100%)"};
  box-shadow: ${(props) =>
    props.isMobileOpen ? "5px 0 15px -2px rgba(0, 0, 0, 0.15)" : "none"};
`;
