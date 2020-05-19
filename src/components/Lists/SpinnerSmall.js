import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

export class SpinnerSmall extends Component {
  render() {
    return <Spinner></Spinner>;
  }
}

export default SpinnerSmall;

const scaleout = keyframes`
0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
`;

const webkitScaleout = keyframes`
 0% { -webkit-transform: scale(0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
`;
const Spinner = styled.div`
  width: 40px;
  height: 40px;
  margin: 100px auto;
  background-color: #333;

  border-radius: 100%;
  -webkit-animation: ${webkitScaleout} 1s infinite ease-in-out;
  animation: ${scaleout} 1s infinite ease-in-out;
`;
