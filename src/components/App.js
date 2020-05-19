import React, { Component } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { goBack } from "../actions";

import history from "../history";
import { initializeState } from "../actions";

import Navbar from "./Static/Navbar";
import SearchBar from "./Static/SearchBar";
import Discover from "./Lists/Discover";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(far, faStar);

class App extends Component {
  componentDidMount() {
    this.props.initializeState(this.props.selected);
  }
  componentDidUpdate() {
    window.onpopstate = (e) => {
      this.props.goBack();
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
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { selected: state.config.selected };
};

export default connect(mapStateToProps, { initializeState, goBack })(App);
