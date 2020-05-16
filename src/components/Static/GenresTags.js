import React, { Component } from "react";
import styled from "styled-components";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

import NavButton from "./NavButton";
import { connect } from "react-redux";

export class Genres extends Component {
  renderList = () => {
    if (this.props.genres) {
      return this.props.genres.map((item) => (
        <NavButton
          name={item.name}
          icon={faDotCircle}
          key={item.id}
          id={item.id}
        />
      ));
    }
  };

  render() {
    return (
      <Wrapper>
        <Header>Genres</Header>
        {this.renderList()}
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return { genres: state.config.genres };
};

export default connect(mapStateToProps, {})(Genres);

const Wrapper = styled.div`
  width: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Header = styled.h3`
  text-transform: uppercase;
  color: #444554;
  padding-left: 15px;
`;
