import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Media from "react-media";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { push } from "connected-react-router";
import StickyBox from "react-sticky-box";
import styled from "styled-components";

import history from "../history";
import { initializeState } from "../actions";

import Navbar from "./Static/Navbar";
import SearchBar from "./Static/SearchBar";
import Discover from "./Lists/Discover";
import Genres from "./Lists/Genres";
import Search from "./Lists/Search";
import Details from "./Details/Details";
import BurgerButton from "./Static/BurgerButton";
import NavBarMobile from "./Static/NavBarMobile";

library.add(far, faStar);

class App extends Component {
  componentDidMount() {
    this.props.initializeState(this.props.selected);

    window.onbeforeunload = () => {
      this.props.push(`/discover/popular`);
    };
  }

  render() {
    return (
      <Router history={history}>
        <Media
          query="(max-width:900px)"
          render={() => (
            <WrapperStickyBox>
              <BurgerButton />
              <SearchBar />
            </WrapperStickyBox>
          )}
        />
        <Media query="(max-width:900px)" render={() => <NavBarMobile />} />
        <Media query="(min-width: 900px)" render={() => <Navbar />} />
        <Media query="(min-width: 900px)" render={() => <SearchBar />} />

        <Route path="/">
          <Redirect to="/discover/popular" />
        </Route>

        <Route path="/discover/:name" component={Discover}></Route>
        <Route path="/genres/:name" component={Genres}></Route>
        <Route path="/search/:name" component={Search}></Route>
        <Route path="/details/:name" component={Details}></Route>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { selected: state.config.selected };
};

export default connect(mapStateToProps, {
  initializeState,
  push,
})(App);

const WrapperStickyBox = styled(StickyBox)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;

  border-bottom: 1px solid ${(props) => props.theme.colors.yellow};
  z-index: 200;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  height: 40px;
  background-color: #fff;
`;
