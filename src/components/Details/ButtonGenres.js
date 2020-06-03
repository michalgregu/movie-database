import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { push } from "connected-react-router";

import { setSelected, getGenres } from "../../actions";

export class ButtonGenres extends Component {
  onButtonClick = async () => {
    await this.props.setSelected(this.props.name);
    this.props.push(`/genres/${this.props.selected}`);
    this.props.getGenres(this.props.id);
  };

  render() {
    return (
      <StyledButton onClick={this.onButtonClick}>
        <StyledIcon icon={faDotCircle} />
        {this.props.name}
      </StyledButton>
    );
  }
}

const mapStateToProps = (state) => {
  return { selected: state.config.selected };
};

export default connect(mapStateToProps, { push, setSelected, getGenres })(
  ButtonGenres
);

const StyledButton = styled.button`
  height: 15px;
  color: ${(props) => props.theme.colors.main};
  text-transform: uppercase;
  font-weight: 800;
  font-size: 1rem;
  border: none;
  background-color: transparent;
  padding-left: 0;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    transform: translateY(-3px);
  }
  @media ${(props) => props.theme.mediaQueries.smaller} {
    font-size: 0.8rem;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;
