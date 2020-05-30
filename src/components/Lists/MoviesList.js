import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import { push } from "connected-react-router";
import { animateScroll as scroll } from "react-scroll";

import { getMovie } from "../../actions";
import SpinnerSmall from "./SpinnerSmall";
import MovieItem from "./MovieItem";

export class MoviesList extends Component {
  onClick = async (id) => {
    scroll.scrollToTop({ smooth: "easeOutQuint" });
    await this.props.getMovie(id);
    this.props.push(`/details/${id}`);
  };

  renderList = () => {
    if (this.props.list) {
      return this.props.list.map((item) => (
        <LazyLoad
          key={item.id}
          height={100}
          offset={-30}
          placeholder={<SpinnerSmall />}
        >
          <MovieItem
            onClick={() => this.onClick(item.id)}
            details={item}
            key={item.id}
          />
        </LazyLoad>
      ));
    }
  };

  render = () => {
    return <Wrapper>{this.renderList()}</Wrapper>;
  };
}

const mapStateToProps = (state) => {
  return { list: state.movies.results };
};

export default connect(mapStateToProps, { push, getMovie })(MoviesList);

const Wrapper = styled.div`
  margin-left: 240px;
  margin-right: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 23rem));
  grid-template-rows: repeat(auto-fit, minmax(41rem, auto));
  grid-gap: 4rem 2rem;
  padding: 50px;
  align-content: space-between;
  justify-content: space-evenly;
`;
