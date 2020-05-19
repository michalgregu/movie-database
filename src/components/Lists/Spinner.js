import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

export class Spinner extends Component {
  render() {
    return (
      <SpinnerWrapper>
        <DotOne></DotOne>
        <DotTwo></DotTwo>
      </SpinnerWrapper>
    );
  }
}

export default Spinner;

const webkitRotate = keyframes`
100% { -webkit-transform: rotate(360deg) }
`;

const rotate = keyframes`
100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }
`;

const webkitBounce = keyframes`
0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
`;

const bounce = keyframes`
 0%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
`;
const SpinnerWrapper = styled.div`
  margin: 100px auto;
  width: 80px;
  height: 80px;
  position: relative;
  text-align: center;
  opacity: 0.4;
  -webkit-animation: ${webkitRotate} 2s infinite linear;
  animation: ${rotate} 2s infinite linear;
`;

const DotOne = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #333;
  border-radius: 100%;

  -webkit-animation: ${webkitBounce} 2s infinite ease-in-out;
  animation: ${bounce} 2s infinite ease-in-out;
`;

const DotTwo = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #333;
  border-radius: 100%;

  -webkit-animation: ${webkitBounce} 2s infinite ease-in-out;
  animation: ${bounce} 2s infinite ease-in-out;

  top: auto;
  bottom: 0;
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
`;
