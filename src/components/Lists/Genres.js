import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import LazyLoad from "react-lazyload";

import Header from "./Header";
import Pagination from "./Pagination";
import Spinner from "./Spinner";
import MoviesList from "./MoviesList";

export class Genres extends Component {
  // componentDidUpdate() {
  //   window.onpopstate = () => {
  //     this.props.getDiscover(
  //       this.props.selected,
  //       this.props.location.query.page
  //     );
  //   };
  // }

  render() {
    return (
      <Wrapper>
        <Header name={this.props.selected} />
        <LazyLoad height={100} offset={-30} placeholder={<Spinner />}>
          <MoviesList />
        </LazyLoad>

        <Pagination />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return { selected: state.config.selected, location: state.router.location };
};

export default connect(mapStateToProps)(Genres);

const Wrapper = styled.div`
  width: 100%;
  min-height: 230rem;
`;
