import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import LazyLoad from "react-lazyload";
import { animateScroll as scroll } from "react-scroll";
import { push } from "connected-react-router";

import { getGenres } from "../../actions";
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

  backClick = () => {
    const newPage = this.props.page - 1;
    const genreId = this.props.genres.find((item) =>
      item.name.toLowerCase().includes(this.props.selected)
    ).id;
    this.props.push(
      `/genres/${this.props.selected.toLowerCase()}?page=${newPage}`
    );
    scroll.scrollToTop({ smooth: "easeOutQuint" });
    this.props.getGenres(genreId, newPage);
  };

  nextClick = () => {
    const newPage = this.props.page + 1;
    const genreId = this.props.genres.find((item) =>
      item.name.toLowerCase().includes(this.props.selected)
    ).id;
    this.props.push(
      `/genres/${this.props.selected.toLowerCase()}?page=${newPage}`
    );
    scroll.scrollToTop({ smooth: "easeOutQuint" });
    this.props.getGenres(genreId, newPage);
  };

  render() {
    return (
      <Wrapper>
        <Header name={this.props.selected} />
        <LazyLoad height={100} offset={-30} placeholder={<Spinner />}>
          <MoviesList />
        </LazyLoad>

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
    location: state.router.location,
    page: state.movies.page,
    genres: state.config.genres,
  };
};

export default connect(mapStateToProps, { push, getGenres })(Genres);

const Wrapper = styled.div`
  width: 100%;
  min-height: 230rem;
`;
