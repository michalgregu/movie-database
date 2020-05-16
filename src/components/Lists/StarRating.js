import React, { Component } from "react";
import Rating from "react-rating";
import styled from "styled-components";

import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export class StarRating extends Component {
  render() {
    return (
      <Rating
        stop={10}
        step={2}
        initialRating={this.props.value}
        readonly
        emptySymbol={<StarBorder style={{ fontSize: 20 }} />}
        fullSymbol={<Star style={{ fontSize: 20 }} />}
      />
    );
  }
}

export default StarRating;

const Star = styled(StarIcon)`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.main};
`;
const StarBorder = styled(StarBorderIcon)`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.main};
`;
