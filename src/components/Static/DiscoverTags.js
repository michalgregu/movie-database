import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import {
  faForward,
  faChartBar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import { getDiscover, setSelected } from "../../actions";
import NavButton from "./NavButton";

export class Discover extends Component {
  onButtonClick = async (name) => {
    await this.props.setSelected(name);
    this.props.push(`/discover/${this.props.selected}`);
    this.props.getDiscover(name);
  };

  render() {
    return (
      <Wrapper>
        <Header>Discover</Header>
        <NavButton onClick={this.onButtonClick} name="Popular" icon={faHeart} />
        <NavButton
          onClick={this.onButtonClick}
          name="Top Rated"
          icon={faChartBar}
        />
        <NavButton
          onClick={this.onButtonClick}
          name="Upcoming"
          icon={faForward}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return { selected: state.config.selected };
};

export default connect(mapStateToProps, { push, setSelected, getDiscover })(
  Discover
);

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
