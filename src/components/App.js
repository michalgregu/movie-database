import React, { Component, Suspense } from "react";
import { Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import history from "../history";
import { initializeState } from "../actions";

import Navbar from "./Static/Navbar";
import SearchBar from "./Static/SearchBar";
import Spinner from "./Lists/Spinner";
// import Discover from './Lists/Discover'
const Discover = React.lazy(() => import("./Lists/Discover"));

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
        <Suspense fallback={Spinner}>
          <Route path="/discover/:name" component={Discover}></Route>
        </Suspense>
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
