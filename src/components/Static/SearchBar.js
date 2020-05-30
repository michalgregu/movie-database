import React, { Component } from "react";
import styled from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { push } from "connected-react-router";

import { setSearch } from "../../actions";
import { connect } from "react-redux";

export class SearchBar extends Component {
  state = { search: "" };

  onSearchSubmit = async (e) => {
    e.preventDefault();
    if (this.state.search !== "") {
      await this.props.setSearch(this.state.search);
      this.props.push(`/search/${this.state.search}`);
      this.setState({ search: "" });
    }
  };

  render() {
    return (
      <SearchBox onSubmit={this.onSearchSubmit}>
        <SearchInput
          type="text"
          value={this.state.search}
          onChange={(e) => this.setState({ search: e.target.value })}
          placeholder="Search for a movie..."
        ></SearchInput>
        <Button>
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </Button>
      </SearchBox>
    );
  }
}

export default connect(null, { push, setSearch })(SearchBar);

const SearchBox = styled.form`
  position: absolute;
  right: 20px;
  top: 20px;
  background: ${(props) => props.theme.colors.main};
  height: 30px;
  border-radius: 40px;
  padding: 10px;
`;
const SearchInput = styled.input`
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: white;
  font-size: 1.3rem;
  transition: 0.4s;
  line-height: 30px;
  width: 0px;
  ${SearchBox}:hover & {
    width: 240px;
    padding: 0 6px;
  }
  ::placeholder {
    color: #fff;
  }
`;
const Button = styled.button`
  color: white;
  float: right;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #2f3640;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  ${SearchBox}:hover & {
    background: white;
    color: #2f3640;
  }
`;
