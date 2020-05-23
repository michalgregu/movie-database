import React, { Component } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { setSelected } from "../../actions";
import { connect } from "react-redux";

export class NavButton extends Component {
  render() {
    return (
      <Button
        onClick={() => this.props.onClick(this.props.name, this.props.id)}
        selected={
          this.props.name.toLowerCase().replace(/ /g, "_") ===
          this.props.selected
            ? true
            : false
        }
      >
        <StyledIcon icon={this.props.icon} />
        {this.props.name}
      </Button>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selected: state.config.selected,
  };
};

export default connect(mapStateToProps, { setSelected })(NavButton);

const Button = styled.button`
  height: 28px;
  display: flex;
  justify-content: flex-start;
  outline: none;
  padding-left: 15px;
  border-radius: 35px;
  margin-bottom: 5px;
  background: transparent;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 800;

  border: ${(props) =>
    props.selected ? `1px solid ${props.theme.colors.main}` : "none"};
  color: ${(props) =>
    props.selected ? props.theme.colors.main : props.theme.colors.lightgray};

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.lightgray};
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;
