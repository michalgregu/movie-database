import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { initializeState } from "../actions";

import Navbar from "./Static/Navbar";
import SearchBar from "./Static/SearchBar";
import Popular from "../components/Lists/Popular";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(far, faStar);

class App extends Component {
  componentDidMount() {
    this.props.initializeState(this.props.selected);
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <SearchBar />

        <Route path="/">
          <Redirect to="/discover/popular" />
        </Route>
        <Route path="/discover/popular" component={Popular}></Route>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return { selected: state.config.selected };
};

export default connect(mapStateToProps, { initializeState })(App);
