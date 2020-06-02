import React, { Component } from "react";
import styled from "styled-components";
import Select from "react-select";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";

import { setSortBy, getGenres } from "../../actions";

export class SortBy extends Component {
  onSortByChange = async (sortBy) => {
    const genreId = this.props.genres.find((item) =>
      item.name.toLowerCase().includes(this.props.selected)
    ).id;

    await this.props.setSortBy(sortBy);
    this.props.getGenres(genreId, 1, sortBy.value);

    this.props.push(process.env.PUBLIC_URL + `/genres/${this.props.selected}`);
  };

  render() {
    function customTheme(theme) {
      return {
        ...theme,
        colors: {
          ...theme.colors,
          primary25: "#BFBFBF",
          primary: "#FFA700",
        },
      };
    }

    const options = [
      { value: "popularity", label: "Popularity" },
      { value: "vote_average", label: "Votes Average" },
      { value: "original_title", label: "Title" },
      { value: "primary_release_date", label: "Release Date" },
    ];
    return (
      <Wrapper>
        <Select
          defaultValue={this.props.sortBy}
          onChange={this.onSortByChange}
          options={options}
          theme={customTheme}
          isSearchable={false}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sortBy: state.config.sortBy,
    selected: state.config.selected,
    genres: state.config.genres,
  };
};

export default connect(mapStateToProps, {
  push,
  replace,
  setSortBy,
  getGenres,
})(SortBy);

const Wrapper = styled.div`
  margin-top: 20px;
  margin-left: 300px;
  margin-right: 60px;

  @media ${(props) => props.theme.mediaQueries.medium} {
    margin-left: 60px;
    margin-bottom: 30px;
  }
`;
