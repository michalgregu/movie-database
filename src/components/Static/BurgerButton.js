import React, { Component } from "react";
import styled from "styled-components";

export class BurgerButton extends Component {
  render() {
    return (
      <StyledBurger
        isMobileOpen={this.props.isMobileOpen}
        onClick={this.props.onClick}
      >
        <div />
        <div />
        <div />
      </StyledBurger>
    );
  }
}

export default BurgerButton;

const StyledBurger = styled.button`
  position: absolute;
  top: 24px;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${(props) => props.theme.colors.main};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${(props) =>
        props.isMobileOpen ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${(props) => (props.isMobileOpen ? "0" : "1")};
      transform: ${(props) =>
        props.isMobileOpen ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${(props) =>
        props.isMobileOpen ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;
