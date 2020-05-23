import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

import { setSelected, getGenres } from "../../actions";
import NavButton from "./NavButton";

export class Genres extends Component {
  onButtonClick = async (name, id) => {
    await this.props.setSelected(name);
    this.props.push(`/genres/${name.toLowerCase()}`);
    this.props.getGenres(id);
  };

  renderList = () => {
    if (this.props.genres) {
      return this.props.genres.map((item) => (
        <NavButton
          onClick={this.onButtonClick}
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
  return { genres: state.config.genres, selected: state.config.selected };
};

export default connect(mapStateToProps, { push, setSelected, getGenres })(
  Genres
);

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
