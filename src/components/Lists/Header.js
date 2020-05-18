import React, { Component } from "react";
import styled from "styled-components";

export class Header extends Component {
  render() {
    return (
      <Wrapper>
        <H1>{this.props.name.toUpperCase()}</H1>
        <H3>MOVIES</H3>
      </Wrapper>
    );
  }
}

export default Header;

const Wrapper = styled.div`
  margin-left: 300px;
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.colors.main};
  font-weight: 300;
  font-size: 2.6rem;
  margin-bottom: 0;
  margin-top: 30px;
`;

const H3 = styled.h3`
  color: ${(props) => props.theme.colors.main};
  margin-top: 0;
`;
