import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import Button from "./Button";

export class Pagination extends Component {
  render = () => {
    const { page, total_pages } = this.props.movies;

    return (
      <Wrapper page={page} total_pages={total_pages}>
        {page > 1 && (
          <Button
            onClick={this.props.onClickPrevious}
            iconLeft
            icon={<ArrowBackIcon />}
            solid
            name={`Page ${page - 1}`}
          />
        )}
        {total_pages > 1 && page < total_pages && (
          <Button
            onClick={this.props.onClickNext}
            icon={<ArrowForwardIcon />}
            solid
            name={`Page ${page + 1}`}
          />
        )}
      </Wrapper>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(Pagination);

const Wrapper = styled.div`
  margin-right: 80px;
  margin-left: 250px;
  margin-bottom: 60px;
  display: flex;
  justify-content: ${(props) => {
    if (props.page === 1) {
      return "flex-end";
    } else if (props.page === props.total_pages) {
      return "flex-start";
    } else {
      return "space-between";
    }
  }};
`;
