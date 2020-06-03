import React, { Component, Suspense } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getDiscover } from "../../actions";
import { push } from "connected-react-router";
import { animateScroll as scroll } from "react-scroll";

import Header from "./Header";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

const MoviesList = React.lazy(() => import("./MoviesList"));

export class Discover extends Component {
  componentDidUpdate() {
    // On browsers back button click, rerender a movies list
    window.onpopstate = () => {
      scroll.scrollToTop({ smooth: "easeOutQuint" });
      this.props.getDiscover(
        this.props.selected,
        this.props.location.query.page
      );
    };
  }

  backClick = () => {
    // Move a user to a new page location and rerender new page of movies list
    const newPage = this.props.page - 1;
    this.props.push(`/discover/popular?page=${newPage}`);
    scroll.scrollToTop({ smooth: "easeOutQuint" });
    this.props.getDiscover(this.props.selected, newPage);
  };

  nextClick = () => {
    // Move a user to a new page location and rerender new page of movies list
    const newPage = this.props.page + 1;
    this.props.push(`/discover/popular?page=${newPage}`);
    scroll.scrollToTop({ smooth: "easeOutQuint" });
    this.props.getDiscover(this.props.selected, newPage);
  };

  render() {
    return (
      <Wrapper>
        <Header name={this.props.selected} />
        <Suspense fallback={<Spinner />}>
          <MoviesList />
        </Suspense>
        <Pagination
          onClickPrevious={this.backClick}
          onClickNext={this.nextClick}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.config.selected,
    page: state.movies.page,
    location: state.router.location,
  };
};

export default connect(mapStateToProps, { push, getDiscover })(Discover);

const Wrapper = styled.div`
  width: 100%;
  min-height: 230rem;
`;
