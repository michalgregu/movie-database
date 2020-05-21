import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Rating from "react-rating";

import poster from "../../svg/300x442.png";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

export class MovieItem extends Component {
  render() {
    const { poster_path, title, vote_average } = this.props.details;

    const path = `${this.props.baseUrl}w342/${poster_path} `;

    return (
      <Wrapper>
        <ImgWrapper>
          <Img src={poster_path !== null ? path : poster} />
        </ImgWrapper>
        <Info>
          <Name>{title}</Name>
          <StyledRating
            stop={10}
            step={2}
            initialRating={vote_average}
            readonly
            emptySymbol={<StarBorder style={{ fontSize: 20 }} />}
            fullSymbol={<Star style={{ fontSize: 20 }} />}
          />
        </Info>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return { baseUrl: state.config.tmdb_config.images.base_url };
};

export default connect(mapStateToProps)(MovieItem);

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 1rem;
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  &:hover {
    box-shadow: 1px 6px 16px 9px rgba(0, 0, 0, 0.17);
    transform: scale(1.05);
    &::after {
      transform: scaleY(1);
      opacity: 1;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    transform: scaleY(0);
    transform-origin: top;
    opacity: 0;
    background-color: ${(props) => props.theme.colors.main};
    z-index: -99;
    transition: all 100ms cubic-bezier(0.215, 0.61, 0.355, 1);
  }
`;

const ImgWrapper = styled.div`
  border-radius: 1rem;
`;

const Img = styled.img`
  width: 100%;
  margin-bottom: 0;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  ${Wrapper}:hover & {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const Info = styled.div`
  text-align: center;
  margin-top: 0;
`;

const Name = styled.h3`
  margin: 1rem 2rem;
  color: ${(props) => props.theme.colors.main};
  font-weight: 400;
  font-size: 1.3rem;
  ${Wrapper}:hover & {
    color: ${(props) => props.theme.colors.lightgray};
  }
`;

const StyledRating = styled(Rating)`
  margin-bottom: 1rem;
`;

const Star = styled(StarIcon)`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.main};
  ${Wrapper}:hover & {
    color: ${(props) => props.theme.colors.lightgray};
  }
`;
const StarBorder = styled(StarBorderIcon)`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.main};
  ${Wrapper}:hover & {
    color: ${(props) => props.theme.colors.lightgray};
  }
`;
