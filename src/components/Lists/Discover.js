import React, { Component, Suspense } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getDiscover } from "../../actions";

import Header from "./Header";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

const MoviesList = React.lazy(() => import("./MoviesList"));

export class Discover extends Component {
  componentDidUpdate() {
    window.onpopstate = () => {
      this.props.getDiscover(
        this.props.selected,
        this.props.location.query.page
      );
    };
  }
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
  return { selected: state.config.selected, location: state.router.location };
};

export default connect(mapStateToProps, { getDiscover })(Discover);

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
