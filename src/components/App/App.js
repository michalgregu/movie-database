import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { initializeState } from "../../actions/";

import Navbar from "./Navbar";
import SearchBar from "./SearchBar";
import MoviesList from "../List/MoviesList";
import Spinner from "../List/Spinner";

class App extends Component {
  componentDidMount() {
    this.props.initializeState(this.props.selected);
  }

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <SearchBar />
        <Spinner />
        <Route path="/">
          <Redirect to="/discover/popular" />
        </Route>
        <Route path="/discover/popular" component={MoviesList}></Route>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return { selected: state.config.selected };
};

export default connect(mapStateToProps, { initializeState })(App);
