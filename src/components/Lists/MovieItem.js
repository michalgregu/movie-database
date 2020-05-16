import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import Rating from "./StarRating";

export class MovieItem extends Component {
  render() {
    const { poster_path, title, vote_average } = this.props.details;

    const path = `${this.props.baseUrl}w342/${poster_path} `;

    return (
      <Wrapper>
        <ImgWrapper>
          <Img src={path} />
        </ImgWrapper>
        <Info>
          <Name>{title}</Name>
          <Rating value={vote_average} />
        </Info>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return { baseUrl: state.config.tmdb_config.images.base_url };
};

export default connect(mapStateToProps)(MovieItem);

const Info = styled.div`
  text-align: center;
`;

const Wrapper = styled.div`
  background-color: lightblue;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 10px;
`;
const ImgWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
`;
const Name = styled.h3`
  color: ${(props) => props.theme.colors.main};
  font-weight: 400;
  font-size: 1.3rem;
`;
