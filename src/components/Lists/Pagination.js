import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

import Button from "./Button";
import { changePage } from "../../actions";

export class Pagination extends Component {
  render = () => {
    const { page, total_pages } = this.props.movies;

    return (
      <Wrapper page={page} total_pages={total_pages}>
        {page > 1 && (
          <Button
            clicked={() => this.props.changePage(this.props.selected, page - 1)}
            iconLeft
            icon={<ArrowBackIcon />}
            solid
            name={`Page ${page - 1}`}
          />
        )}
        {total_pages > 1 && page < total_pages && (
          <Button
            clicked={() => this.props.changePage(this.props.selected, page + 1)}
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
  return { movies: state.movies, selected: state.config.selected };
};

export default connect(mapStateToProps, { changePage })(Pagination);

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
