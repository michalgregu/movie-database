import React, { Component } from "react";
import styled from "styled-components";
import {
  faForward,
  faChartBar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import NavButton from "./NavButton";

export class Discover extends Component {
  render() {
    return (
      <Wrapper>
        <Header>Discover</Header>
        <NavButton name="Popular" icon={faHeart} />
        <NavButton name="Top Rated" icon={faChartBar} />
        <NavButton name="Upcoming" icon={faForward} />
      </Wrapper>
    );
  }
}

export default Discover;

const Wrapper = styled.div`
  width: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h3`
  text-transform: uppercase;
  color: #444554;
  padding-left: 15px;
`;
