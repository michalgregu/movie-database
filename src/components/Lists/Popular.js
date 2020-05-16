import React, { Component } from "react";
import styled from "styled-components";

import Header from "./Header";
import MoviesList from "./MoviesList";

export class Popular extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <MoviesList />
      </Wrapper>
    );
  }
}

export default Popular;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
