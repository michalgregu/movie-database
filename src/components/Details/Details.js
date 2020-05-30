import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Rating from "react-rating";
import { goBack, push } from "connected-react-router";
import ModalVideo from "react-modal-video";
import LazyLoad from "react-lazyload";
import { animateScroll as scroll } from "react-scroll";

import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import LinkIcon from "@material-ui/icons/Link";
import MovieIcon from "@material-ui/icons/Movie";
import poster from "../../svg/300x442.png";
import { getRecommendation } from "../../actions";

import ButtonGenres from "./ButtonGenres";
import Button from "../Lists/Button";
import MoviesList from "../Lists/MoviesList";
import Pagination from "../Lists/Pagination";
import Spinner from "../Lists/Spinner";
import Header from "../Lists/Header";

export class Details extends Component {
  state = { isModalOpen: false };

  backClick = () => {
    const newPage = this.props.page - 1;
    this.props.push(`${this.props.location}?page=${newPage}`);
    scroll.scrollTo(720, { smooth: "easeOutQuint" });
    this.props.getRecommendation(this.props.movie.id, newPage);
  };

  nextClick = () => {
    const newPage = this.props.page + 1;
    this.props.push(`${this.props.location}?page=${newPage}`);
    scroll.scrollTo(720, { smooth: "easeOutQuint" });
    this.props.getRecommendation(this.props.movie.id, newPage);
  };

  render() {
    const {
      genres,
      homepage,
      imdb_id,
      title,
      overview,
      poster_path,
      release_date,
      tagline,
      vote_average,
      videos,
      spoken_languages,
      runtime,
    } = this.props.movie;

    const path = `http://image.tmdb.org/t/p/w500/${poster_path} `;

    let trailerId = "";
    if (videos) {
      let trailer = videos.results.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      if (trailer !== undefined) {
        trailerId = trailer.key;
      }
    }

    return (
      <Wrapper>
        <LazyLoad height={100} offset={-10} placeholder={<Spinner />}>
          <DetailsWrapper>
            <ImageWrapper>
              <Img src={poster_path !== null ? path : poster} />
            </ImageWrapper>
            <Info>
              <InfoHeader>{title}</InfoHeader>
              <Tagline>{tagline}</Tagline>
              <RatingWrapper>
                <StyledRating
                  stop={10}
                  step={2}
                  initialRating={vote_average}
                  readonly
                  emptySymbol={<StarBorder style={{ fontSize: 20 }} />}
                  fullSymbol={<Star style={{ fontSize: 20 }} />}
                />
                <Votes>{vote_average}</Votes>
                <Language>
                  {spoken_languages.length >= 1 ? spoken_languages[0].name : ""}{" "}
                  | {runtime} min. | {release_date.substring(0, 4)}
                </Language>
              </RatingWrapper>
              <SmallHeader>The Genres</SmallHeader>
              <GenresWrapper>
                {genres.map((genre) => (
                  <ButtonGenres
                    key={genre.id}
                    id={genre.id}
                    name={genre.name}
                  />
                ))}
              </GenresWrapper>
              <SmallHeader>The Synopsis</SmallHeader>
              <Synopsis>
                {overview ? overview : "There is no movie description yet..."}
              </Synopsis>
              <ButtonsWrapper>
                {homepage && (
                  <Button
                    name="Website"
                    onClick={() => window.open(homepage)}
                    icon={<LinkIcon />}
                  />
                )}
                {imdb_id && (
                  <Button
                    name="IMDB"
                    onClick={() =>
                      window.open(`https://www.imdb.com/title/${imdb_id}`)
                    }
                    icon={<MovieIcon />}
                  />
                )}
                {trailerId !== "" && (
                  <Button
                    name="Trailer"
                    onClick={() => this.setState({ isModalOpen: true })}
                    icon={<PlayArrowIcon />}
                  />
                )}
                <Button
                  onClick={this.props.goBack}
                  iconLeft
                  solid
                  name="Back"
                  icon={<ArrowBackIcon />}
                />
                <ModalVideo
                  channel="youtube"
                  isOpen={this.state.isModalOpen}
                  onClose={() => this.setState({ isModalOpen: false })}
                  videoId={trailerId}
                />
              </ButtonsWrapper>
            </Info>
          </DetailsWrapper>
        </LazyLoad>
        <Header name="Recommended" />
        <MoviesList />
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
    movie: state.movieDetails,
    location: state.router.location.pathname,
    page: state.movies.page,
  };
};

export default connect(mapStateToProps, { goBack, push, getRecommendation })(
  Details
);

const GenresWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 230rem;
`;
const DetailsWrapper = styled.div`
  margin-left: 240px;
  margin-top: 80px;
  margin-bottom: 80px;
  min-height: 560px;
  display: flex;
  justify-content: flex-end;
`;
const ImageWrapper = styled.div`
  margin-left: auto;
  max-width: 400px;
  height: 560px;
  flex: 1;
  overflow: hidden;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const Info = styled.div`
  max-width: 700px;
  flex: 2;
  padding: 0 auto 20px 10px;
  color: ${(props) => props.theme.colors.main};
`;

const InfoHeader = styled.h1`
  margin-top: 0;
  margin-bottom: 0;
  text-transform: uppercase;
  font-size: 3.8rem;
  font-weight: 300;
  letter-spacing: -2px;
`;
const Tagline = styled.h3`
  margin-top: 5px;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-size: 1.6rem;
`;

const RatingWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 540px;
`;

const StyledRating = styled(Rating)``;

const Star = styled(StarIcon)`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.main};
`;
const StarBorder = styled(StarBorderIcon)`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.main};
`;

const Votes = styled.small`
  font-size: 1.4rem;
  font-weight: bold;
  margin-right: auto;
  margin-left: 1rem;
`;

const Language = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.lightgray};
`;

const SmallHeader = styled.p`
  margin-top: 30px;
  text-transform: uppercase;
  font-size: 1.3rem;
  font-weight: 700;
`;

const Synopsis = styled.p`
  max-width: 540px;
  font-size: 1.3rem;
  line-height: 2;
  font-weight: 500;
`;

const ButtonsWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: flex-start;
  max-width: 540px;
`;