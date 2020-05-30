import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { push } from "connected-react-router";

import history from "../history";
import { initializeState } from "../actions";

import Navbar from "./Static/Navbar";
import SearchBar from "./Static/SearchBar";
import Discover from "./Lists/Discover";
import Genres from "./Lists/Genres";
import Search from "./Lists/Search";
import Details from "./Details/Details";

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
        <Navbar />
        <SearchBar />

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
