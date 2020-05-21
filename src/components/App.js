import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import history from "../history";
import { initializeState } from "../actions";

import Navbar from "./Static/Navbar";
import SearchBar from "./Static/SearchBar";
import Discover from "./Lists/Discover";
import Genres from "./Lists/Genres";

library.add(far, faStar);

class App extends Component {
  componentDidMount() {
    this.props.initializeState(this.props.selected);
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
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { selected: state.config.selected };
};

export default connect(mapStateToProps, {
  initializeState,
})(App);
