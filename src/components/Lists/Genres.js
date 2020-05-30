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
import SortBy from "./SortBy";

export class Genres extends Component {
  componentDidUpdate = () => {
    const genreId = this.props.genres.find(
      (item) => item.name.toLowerCase() === this.props.selected
    ).id;

    window.onpopstate = () => {
      scroll.scrollToTop({ smooth: "easeOutQuint" });
      this.props.getGenres(
        genreId,
        this.props.location.query.page,
        this.props.sortBy
      );
    };
  };

  backClick = () => {
    const newPage = this.props.page - 1;
    const genreId = this.props.genres.find((item) =>
      item.name.toLowerCase().includes(this.props.selected)
    ).id;
    this.props.push(
      `/genres/${this.props.selected.toLowerCase()}?page=${newPage}`
    );
    scroll.scrollToTop({ smooth: "easeOutQuint" });
    this.props.getGenres(genreId, newPage, this.props.sortBy);
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
    this.props.getGenres(genreId, newPage, this.props.sortBy);
  };

  render() {
    return (
      <Wrapper>
        <Header name={this.props.selected} />
        <SortBy />
        <LazyLoad height={100} offset={-10} placeholder={<Spinner />}>
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
    location: state.router.location,
    selected: state.config.selected,
    page: state.movies.page,
    genres: state.config.genres,
    sortBy: state.config.sortBy.value,
  };
};

export default connect(mapStateToProps, { push, getGenres })(Genres);

const Wrapper = styled.div`
  width: 100%;
  min-height: 230rem;
`;
