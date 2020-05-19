import React, { Component, Suspense } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Header from "./Header";
// import MoviesList from "./MoviesList";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

const MoviesList = React.lazy(() => import("./MoviesList"));

export class Discover extends Component {
  render() {
    return (
      <Wrapper>
        <Header name={this.props.selected} />
        <Suspense fallback={<Spinner />}>
          <MoviesList />
        </Suspense>

        <Pagination />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return { selected: state.config.selected };
};

export default connect(mapStateToProps)(Discover);

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
