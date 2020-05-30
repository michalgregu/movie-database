import React, { Component } from "react";
import styled from "styled-components";

export class Button extends Component {
  render() {
    const { icon, name, solid, iconLeft } = this.props;
    return (
      <StyledButton
        onClick={this.props.onClick}
        iconLeft={iconLeft}
        solid={solid}
      >
        {icon}
        {name}
      </StyledButton>
    );
  }
}

export default Button;

const StyledButton = styled.button`
  display: flex;
  flex-direction: ${(props) => (props.iconLeft ? "row" : "row-reverse")};
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  margin-right: 20px;
  padding: 0 2.2rem;
  height: 35px;
  min-width: 110px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  text-decoration: none;
  outline: none;
  line-height: 1;
  transition: all 0.2s ease-in-out;
  box-shadow: 0px 5px 15px 5px rgba(0, 0, 0, 0.12);
  background-color: ${(props) =>
    props.solid ? props.theme.colors.main : "transparent"};
  border: ${(props) =>
    props.solid ? "none" : `1px solid ${props.theme.colors.main}`};
  color: ${(props) => (props.solid ? "#fff" : props.theme.colors.main)};

  &:hover {
    transform: translateY(-3px);
    box-shadow: none;
    background-color: ${(props) =>
      props.solid ? "transparent" : props.theme.colors.main};
    border: ${(props) =>
      props.solid ? `1px solid ${props.theme.colors.main}` : "none"};
    color: ${(props) => (props.solid ? props.theme.colors.main : "#fff")};
  }
`;
