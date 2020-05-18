import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import MovieItem from "./MovieItem";

export class MoviesList extends Component {
  renderList = () => {
    if (this.props.list) {
      return this.props.list.map((item) => (
        <MovieItem details={item} key={item.id} />
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

export default connect(mapStateToProps)(MoviesList);

const Wrapper = styled.div`
  margin-left: 240px;
  margin-right: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 23rem));
  grid-gap: 4rem 2rem;
  padding: 50px;
  align-content: space-between;
  justify-content: space-evenly;
`;
