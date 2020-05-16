import React, { Component } from "react";
import styled from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class SearchBar extends Component {
  render() {
    return (
      <SearchBox>
        <SearchInput
          type="text"
          placeholder="Search for a movie..."
        ></SearchInput>
        <Button>
          <StyledIcon icon={faSearch}></StyledIcon>
        </Button>
      </SearchBox>
    );
  }
}

export default SearchBar;

const SearchBox = styled.div`
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
const StyledIcon = styled(FontAwesomeIcon)``;
